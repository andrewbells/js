document.onclick = function() {
	alert("You clicked somewhere in the document");
};

var myImage = document.getElementById('mainImage');

myImage.onclick = function() {
	alert('you clicked an image');
}