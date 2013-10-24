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

function preparePage() {
	document.getElementById("spam").onclick = function() {
		if (document.getElementById("spam").checked) {
			document.getElementById("tourSelection").style.display = "block";
		} else {
			document.getElementById("tourSelection").style.display = "none";
		}
	};
	document.getElementById("tourSelection").style.display = "none";
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
	preparePage();
};

/*http://closure-compiler.appspot.com/home
function prepareEventHandlers(){document.getElementById("frmInfo").onsubmit=function(){if(""==document.getElementById("email").value||"your email"==document.getElementById("email").value)return document.getElementById("errorMessage").innerHTML="Provide at least an email address",!1;document.getElementById("errorMessage").innerHTML="";return!0}}
function preparePage(){document.getElementById("spam").onclick=function(){document.getElementById("spam").checked?document.getElementById("tourSelection").style.display="block":document.getElementById("tourSelection").style.display="none"};document.getElementById("tourSelection").style.display="none"}function makeSureEmail(){var a=document.getElementById("email");a.onfocus=function(){"your email"==a.value&&(a.value="")};a.onblur=function(){""==a.value&&(a.value="your email")}}
window.onload=function(){prepareEventHandlers();makeSureEmail();preparePage()};
*/