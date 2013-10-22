
function newGame() {
	disarmCount = 1;
	i = Math.floor((Math.random()*70)+30); 
	fire = [true, true, true];
	fire[Math.floor(Math.random()*3)] = false;
	fire_1 = fire[0];
	fire_2 = fire[1];
	fire_3 = fire[2];
	clicked_1 = false;
	clicked_2 = false;
	clicked_3 = false;
	message.innerHTML = "One of the switches below can prevent an explosion, two others don't -- click one";
	dynomite.setAttribute("src", "_img/dynamite_brown.jpg");
	switch_1.setAttribute("src", "_img/switch_on.jpg");
	switch_2.setAttribute("src", "_img/switch_on.jpg");
	switch_3.setAttribute("src", "_img/switch_on.jpg");
	game++;
	document.getElementById("infofield_1").innerHTML = game;
	console.log('game');
	console.log(game);
}

window.onload = function() {
	newGame();
};

document.getElementById("newgame").onclick = function() {
	newGame();
};

var win = 0;
var lose = 0;
var game = 0;

var switch_1 = document.getElementById("switch_1");
var switch_2 = document.getElementById("switch_2");
var switch_3 = document.getElementById("switch_3");

var message = document.getElementById("Message");

setInterval(timer, 1000);
var screen = document.getElementById("timer");
var i = Math.floor((Math.random()*70)+30); 

function timer () {
	if (i>=0) {
	screen.innerHTML = i;
	i--;
	} else if (i !== "Success!") {
	screen.innerHTML = "time is up"
	dynomite.setAttribute("src", "_img/explosion.jpg");
	
	}
}

switch_1.onclick = function() {
	
	if (clicked_1 == false && i>=0) {
	switch_1.setAttribute("src", "_img/switch_off.jpg");
	clicked_1 = true;
	message.innerHTML = "You are choosing switch No 1, hit 'Confirm' to proceed with disarming";
	
	} else {
	switch_1.setAttribute("src", "_img/switch_on.jpg");
	clicked_1 = false;
	message.innerHTML = "Changed your mind?";
	}
	
};

switch_2.onclick = function() {
	
	if (clicked_2 == false && i>=0) {
	switch_2.setAttribute("src", "_img/switch_off.jpg");
	clicked_2 = true;
	message.innerHTML = "You are choosing switch No 2, hit 'Confirm' to proceed with disarming";
	
	} else {
	switch_2.setAttribute("src", "_img/switch_on.jpg");
	clicked_2 = false;
	message.innerHTML = "Changed your mind?";
	}
	
};

switch_3.onclick = function() {
	
	if (clicked_3 == false && i>=0) {
	switch_3.setAttribute("src", "_img/switch_off.jpg");
	clicked_3 = true;
	message.innerHTML = "You are choosing switch No 3, hit 'Confirm' to proceed with disarming";
	
	} else {
	switch_3.setAttribute("src", "_img/switch_on.jpg");
	clicked_3 = false;
	message.innerHTML = "Changed your mind?";
	}
	
};

var disarm = document.getElementById("disarm");
var dynomite = document.getElementById("dynomite");

disarm.onclick = function() {

	if (clicked_3 == true && disarmCount == 1) {
		if (fire_2 == true) {
		switch_2.setAttribute("src", "_img/switch_off.jpg");
		clicked_2 = true;
		message.innerHTML = "Look, switch 2 is not the safe one - don't forget to switch it back, wanna change your choice?";
		
		}
		else if (fire_1 == true && clicked_2 == false) {
		switch_1.setAttribute("src", "_img/switch_off.jpg");
		clicked_1 = true;
		message.innerHTML = "Look, switch 1 is not the safe one - don't forget to switch it back, wanna change your choice?";
		
		}
		
	}
	else if (clicked_2 == true && disarmCount == 1) {
		if (fire_3 == true) {
		switch_3.setAttribute("src", "_img/switch_off.jpg");
		clicked_3 = true;
		message.innerHTML = "Look, switch 3 is not the safe one - don't forget to switch it back, wanna change your choice?";
		}
		else if (fire_1 == true && clicked_3 == false) {
		switch_1.setAttribute("src", "_img/switch_off.jpg");
		clicked_1 = true
		message.innerHTML = "Look, switch 1 is not the safe one - don't forget to switch it back, wanna change your choice?";
		}
		
	}
	else if (clicked_1 == true && disarmCount == 1) {
		if (fire_2 == true) {
		switch_2.setAttribute("src", "_img/switch_off.jpg");
		clicked_2 = true;
		message.innerHTML = "Look, switch 2 is not the safe one - don't forget to switch it back, wanna change your choice?";
		}
		else if (fire_3 == true && clicked_2 == false) {
		switch_3.setAttribute("src", "_img/switch_off.jpg");
		clicked_3 = true
		message.innerHTML = "Look, switch 3 is not the safe one - don't forget to switch it back, wanna change your choice?";
		}
		
	}
	disarmCount++;
	
	if (disarmCount == 3 && ((clicked_3 == true && fire_3 == true) || (clicked_2 == true && fire_2 == true) || (clicked_1 == true && fire_1 == true))) {
		dynomite.setAttribute("src", "_img/explosion.jpg");
		i = "wrong switch!";
		lose++;
		document.getElementById("infofield_3").innerHTML = lose;
		message.innerHTML = "Not this time, dude, try once more...";
		
	}
	else if (disarmCount == 3 && ((clicked_3 == true && fire_3 == false) || (clicked_2 == true && fire_2 == false) || (clicked_1 == true && fire_1 == false))) {
		dynomite.setAttribute("src", "_img/sorry_mario.jpg");
		i = "Success!";
		win++;
		document.getElementById("infofield_2").innerHTML = win;
		message.innerHTML = "Congratulations, you've disarmed the bomb!";
		
	}
	
};
