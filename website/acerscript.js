/*
document.onclick = function() {
	alert("You clicked somewhere in the document");
};
*/

function prepareEventHandlers(){
	var myImage = document.getElementById('reportImage');

	myImage.onclick = function() {
		alert('you clicked an image');
	}
	
	// the following can be put outside this function if script is put at the end of the document
	var emailField = document.getElementById("email");

	emailField.onfocus = function() {
		if ( emailField.value == "your email") {
			emailField.value = "";
		}
};

	emailField.onblur = function() {
		if ( emailField.value == "") {
			emailField.value = "your email";
		}
	};
}

var messageArray = ["Best!", "Best of the Best!", "Best of the Best of the Best!"];
var messageIndex = 0;
/*
function deeperFunction() {
	// perform loop
	for (var i = 0; i < 500; i++) {
		// do stuff
		var foo = i * (Math.random());
		var bar = foo;
		// more code
	
	}
}
*/

function simpleFunction() {
	// jump into a deeper function
	// deeperFunction();
	// now grab the message and change it
	var newMessage = messageArray[messageIndex];
	var messageElement = document.getElementById("mainMessage");
	messageElement.innerHTML = newMessage;
	messageIndex++;
	if (messageIndex >= messageArray.length) {
		messageIndex = 0;
	}

}


function changeMessage() {
	simpleFunction();
}


//window contains document
window.onload = function() {
	prepareEventHandlers();
	setInterval(changeMessage, 5000);
	prepareFrontPage();
	setTimeout(beginAnimate,2000);
};

/*
function simpleMessage() {
	alert("this is an alert box set up by a timer")
}

setTimeout(simpleMessage, 5000);
*/

var myImage = document.getElementById("mainImage");

var imageArray = ["_img/img_1.jpg", "_img/img_2.jpg", "_img/img_3.jpg", "_img/img_4.jpg",
					"_img/img_5.jpg", "_img/img_6.jpg",];
					
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(changeImage, 5000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}


function prepareFrontPage() {
	document.getElementById("header").onclick = function() {
		if (document.getElementById("header").className == "example") {
			document.getElementById("header").className = "";
		} else {
			document.getElementById("header").className = "example";
		}
	};
	
}

// added timers.js
 
var currentPos = 0;
var intervalHandle;

function beginAnimate() {
    "use strict";
	document.getElementById("frmSupport").style.position = "absolute";
	document.getElementById("frmSupport").style.left = "0px";
	document.getElementById("frmSupport").style.top = "100px";
	// cause the animateForm to be called
	intervalHandle = setInterval(animateForm, 10);
	
}


function animateForm() {
	currentPos += 1;
	document.getElementById("frmSupport").style.left = currentPos + "px";
	if (currentPos > 1200) {
		clearInterval(intervalHandle);
		document.getElementById("frmSupport").style.position = "";
		document.getElementById("frmSupport").style.left = "";
		document.getElementById("frmSupport").style.top = "";
		
	}
}


