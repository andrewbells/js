/*
document.onclick = function() {
	alert("You clicked somewhere in the document");
};
*/

function prepareEventHandlers(){
	var myImage = document.getElementById('mainImage');

	myImage.onclick = function() {
		alert('you clicked an image');
	}
}


//window contains document
window.onload = function() {
	prepareEventHandlers();
}
