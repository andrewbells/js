function prepareEventHandlers(){
	// the following can be put outside this function if script is put at the end of the document
	document.getElementById("frmInfo").onsubmit = function() {
		if ( document.getElementById("email").value == "" || document.getElementById("email").value == "your email") {
			document.getElementById("errorMessage").innerHTML = "Provide at least an email address";
			return false;
		} else {
		document.getElementById("errorMessage").innerHTML = "";
		return true;
		}
	};
}	

function makeSureEmail(){
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
// document.forms.frmSupport
// document.forms.frmSupport.name

// myCheckBox.checked --> true or false

// mySelect.type --> select-one or select-multiple
// onchange --> 
// select-one --> mySelect.selectedIndex
// select-multiple --> mySelect.options[x].selected --> true or false

// onsubmit --> return false -- if dont want to wait for server's validation

window.onload = function() {
	prepareEventHandlers();
	makeSureEmail();
};