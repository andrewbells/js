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


