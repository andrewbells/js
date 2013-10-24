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
};

