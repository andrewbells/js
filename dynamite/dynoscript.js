/*
window.onload = function() {
	// code
};
*/

var switch_1 = document.getElementById("switch_1");
var switch_2 = document.getElementById("switch_2");
var switch_3 = document.getElementById("switch_3");

var clicked_1 = false;
var clicked_2 = false;
var clicked_3 = false;

var message = document.getElementById("Message");

setInterval(timer, 1000);
var screen = document.getElementById("timer");
var i = Math.floor((Math.random()*100)+30); 

function timer () {
	if (i>=0) {
	screen.innerHTML = i
	i--;
	} else {
	screen.innerHTML = "time is up"
	dynomite.setAttribute("src", "_img/explosion.jpg");
	}
}

switch_1.onclick = function() {
	
	if (clicked_1 == false && i>=0) {
	switch_1.setAttribute("src", "_img/switch_off.jpg");
	clicked_1 = true;
	message.innerHTML = "You are choosing switch No 1, hit 'Confirm' to proceed with disarming";
	
	switch_2.setAttribute("src", "_img/switch_on.jpg");
	clicked_2 = false;
	switch_3.setAttribute("src", "_img/switch_on.jpg");
	clicked_3 = false;
	
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
	
	switch_3.setAttribute("src", "_img/switch_on.jpg");
	clicked_3 = false;
	switch_1.setAttribute("src", "_img/switch_on.jpg");
	clicked_1 = false;
	
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
	
	switch_1.setAttribute("src", "_img/switch_on.jpg");
	clicked_1 = false;
	switch_2.setAttribute("src", "_img/switch_on.jpg");
	clicked_2 = false;
	
	} else {
	switch_3.setAttribute("src", "_img/switch_on.jpg");
	clicked_3 = false;
	message.innerHTML = "Changed your mind?";
	}
	
};

var disarm = document.getElementById("disarm");
var dynomite = document.getElementById("dynomite");

disarm.onclick = function() {
	if (clicked_3 == true || clicked_2 == true || clicked_1 == true) {
		dynomite.setAttribute("src", "_img/explosion.jpg");
		i = "time is up"
	}
};


