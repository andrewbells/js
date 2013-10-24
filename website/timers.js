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
// 
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

window.onload = function() {
	prepareFrontPage();
	setTimeout(beginAnimate,5000);
}