var pressedDisarm = false;
var pressedConfirm = false;
var win = 0;
var lose = 0;
var game = 0;
var clicked_1 = false;
var clicked_2 = false;
var clicked_3 = false;
var fire = [true, true, true];
var fire_1 = fire[0];
var fire_2 = fire[1];
var fire_3 = fire[2];
var switch_1 = document.getElementById("switch_1");
var switch_2 = document.getElementById("switch_2");
var switch_3 = document.getElementById("switch_3");
var message = document.getElementById("Message");
var confirm = document.getElementById("confirm");
var dynomite = document.getElementById("dynomite");

setInterval(timer, 1000);
var screen = document.getElementById("timer");
var i = Math.floor((Math.random() * 30) + 30); 

function timer () {
    if (i >= 0) {
        screen.innerHTML = i;
        i--;
    } else if (i !== "Success!") {
        screen.innerHTML = "time is up"
        document.getElementById("dynomite").className = "explosion";
    }
}

switch_1.onclick = function() {
    if (clicked_1 == false && i >= 0) {
        document.getElementById("switch_1").className = "switch_off";
        clicked_1 = true;
        message.innerHTML = "You are choosing switch No 1, hit 'Confirm' to proceed with disarming";
    } else {
        document.getElementById("switch_1").className = "switch_on";
        clicked_1 = false;
        message.innerHTML = "Changed your mind?";
    }
};

switch_2.onclick = function() {
    
    if (clicked_2 == false && i >= 0) {
        document.getElementById("switch_2").className = "switch_off";
        clicked_2 = true;
        message.innerHTML = "You are choosing switch No 2, hit 'Confirm' to proceed with disarming";
    } else {
        document.getElementById("switch_2").className = "switch_on";
        clicked_2 = false;
        message.innerHTML = "Changed your mind?";
    }
};

switch_3.onclick = function() {
    if (clicked_3 == false && i >= 0) {
        document.getElementById("switch_3").className = "switch_off";
        clicked_3 = true;
        message.innerHTML = "You are choosing switch No 3, hit 'Confirm' to proceed with disarming";
    } else {
        document.getElementById("switch_3").className = "switch_on";
        clicked_3 = false;
        message.innerHTML = "Changed your mind?";
    }
};

confirm.onclick = function() {
    if (clicked_3 == true && pressedConfirm == false) {
        if (fire_2 == true) {
            document.getElementById("switch_2").className = "switch_off";
            clicked_2 = true;
            message.innerHTML = "Look, switch 2 is not the safe one - don't forget to switch it back, wanna change your choice? When you are done hit 'disarm'";
        } else if (fire_1 == true && clicked_2 == false) {
            document.getElementById("switch_1").className = "switch_off";
            clicked_1 = true;
            message.innerHTML = "Look, switch 1 is not the safe one - don't forget to switch it back, wanna change your choice? When you are done hit 'disarm'";
        }
        pressedConfirm = true;
    }
	else if (clicked_2 == true && pressedConfirm == false) {
        if (fire_3 == true) {
            document.getElementById("switch_3").className = "switch_off";
            clicked_3 = true;
            message.innerHTML = "Look, switch 3 is not the safe one - don't forget to switch it back, wanna change your choice? When you are done hit 'disarm'";
        } else if (fire_1 == true && clicked_3 == false) {
            document.getElementById("switch_1").className = "switch_off";
            clicked_1 = true
            message.innerHTML = "Look, switch 1 is not the safe one - don't forget to switch it back, wanna change your choice? When you are done hit 'disarm'";
        }
        pressedConfirm = true;
    }
    else if (clicked_1 == true && pressedConfirm == false) {
        if (fire_2 == true) {
            document.getElementById("switch_2").className = "switch_off";
            clicked_2 = true;
            message.innerHTML = "Look, switch 2 is not the safe one - don't forget to switch it back, wanna change your choice? When you are done hit 'disarm'";
        } else if (fire_3 == true && clicked_2 == false) {
            document.getElementById("switch_3").className = "switch_off";
		    clicked_3 = true
            message.innerHTML = "Look, switch 3 is not the safe one - don't forget to switch it back, wanna change your choice? When you are done hit 'disarm'";
        }
		pressedConfirm = true;
	}
        console.log(fire);
};

document.getElementById("disarm").onclick = function() {
    if (pressedDisarm == false && ((clicked_3 == true && fire_3 == true) || (clicked_2 == true && fire_2 == true) || (clicked_1 == true && fire_1 == true))) {
        document.getElementById("dynomite").className = "explosion";
		
        i = "wrong switch!";
        lose++;
        document.getElementById("infofield_3").innerHTML = lose;
        message.innerHTML = "Not this time, dude, try once more...";
        pressedDisarm = true;
    } else if (pressedDisarm == false && ((clicked_3 == true && fire_3 == false) || (clicked_2 == true && fire_2 == false) || (clicked_1 == true && fire_1 == false))) {
        document.getElementById("dynomite").className = "sorry_mario";
        i = "Success!";
        win++;
        document.getElementById("infofield_2").innerHTML = win;
        message.innerHTML = "Congratulations, you've disarmed the bomb!";
        pressedDisarm = true;
    }
};

function newGame() {
    pressedDisarm = false;
    pressedConfirm = false;
    i = Math.floor((Math.random() * 30) + 30); 
    fire = [true, true, true];
    fire[Math.floor(Math.random() * 3)] = false;
    
    fire_1 = fire[0];
    fire_2 = fire[1];
    fire_3 = fire[2];

    clicked_1 = false;
    clicked_2 = false;
    clicked_3 = false;
    message.innerHTML = "One of the switches below can prevent an explosion, two others don't -- click one";
    document.getElementById("dynomite").className = "dynamite_brown";
		
    document.getElementById("switch_1").className = "switch_on";
    document.getElementById("switch_2").className = "switch_on";
    document.getElementById("switch_3").className = "switch_on";
    game++;
    document.getElementById("infofield_1").innerHTML = game;
}

window.onload = function() {
    newGame();
};

document.getElementById("newgame").onclick = function() {
    newGame();
};