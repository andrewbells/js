// jquery

/*
instead of
document.getElementById("myDiv").className = "highlight";

we use selector -- same as in css

jQuery(#myDiv).addClass("highlight");
jQuery(".someClass")
jQuery("p")
jQuery("a")
jQuery("li")
works on all elements

jQuery("p.description") --> all paragraphs with certain class

:first
:last
:visible
:contains()

*/
// basic:
// document.getElementById("mainContent").className = "highlight";

// jQuery:
// jQuery("#mainContent").addClass("highlight");

// jQuery("li").addClass("highlight");

// jQuery(".tourDescription").addClass("highlight");

// jQuery("li:last").addClass("highlight");

// jQuery("p:contains('one')").addClass("highlight");

// jQuery("p.contains('one')").removeClass("highlight");
// jQuery("p.contains('one')").toggleClass("highlight"); -- if it is there remove, if not - add

$("p:contains('lorem')").addClass("highlight");

// $("p").hide(4000);

// $("p").fadeOut(4000);

/*
$("#one").click(function() {
    $("#one").text("You clicked me!");
});
*/

/*
$("h3").click(function() {
    $(this).text("You clicked me too!");
});
*/


$("p").click(function() {
    $(this).fadeOut(2000);
});


/*
$(document).ready(function() {
    $("#header").text("the DOM is fully loaded");
});
*/

/*
$(document).ready(function() {
    $("h3").css("color", "red");
});
*/


/*

// html 5

var a = document.getElementById("mainTitle");
var b = document.getElementsByTagName("li");

var c = document.getElementsByClassName("myclass");
var d = document.getElementByClassName("first second");
*/

/*
myVideo
.play();
.pause();
.currentTime = 0;
*/

myVideo.addEventListener("ended", function() {
    myVideo.play();
}, false);

/* html5 local storage
localStorage["username"] = name;

var name = localStorage["username"];
*/

/*
 // not in IE8:
var worker = new Worker("worker.js");

// get ready to receive messages from the worker
worker.onmessage = function(e) {
    console.log("The worker called me");
};

// send messages to the worker
worker.postMessage("firstFunction");
*/

// feature detection -- checking whether browser supports this feature
if ( document.getElementsByClassName ) {
    // it exists, we can use it
	// ... code goes here
} else {
    // it doesnt exist on this browser
}

if ( Modernizr.video ) {
    // yes - use html5 video
	// ... code goes here
} else {
    // it doesnt exist on this browser, perhaps replace with Flash video
}

if (Modernizr.geolocation) {
}


// REGULAR EXPRESSIONS

var myRE = /hello/;
var myRE_2 = new RegExp("hello"); // same variable, but other way to write down

var myString = "Does this sequence have the word hello in it?";
if ( myRE.test(myString) ) {
    alert("Yes");
}

var myRE_3 = /^hello/; // ^ appears at the start
var myRE_4 = /hello$/; // $ appears at the end
var myRE_5 = /hel+o/; // + appears once or more --> "helo", hello, hellllllo
var myRE_6 = /hel*o/; // * appears zero or more --> heo, "helo", hello, hellllllo
var myRE_7 = /hel?o/; // * appears zero or one --> heo, "helo"
// /hello|goodbye/;  --> either | or
// /he..o/; --> . any character
// /\wello/; --> \w alphanumeric or _
// /\bello/; --> \b word boundary -- appears after a space or newline (eg).
// /[crnld]ope/; --> [...] range of chars -- cope, rope,..., NOT zope

// US post code regular expression with optional part:
// /^[0-9]{5}(?:-[0-9]{4})?$/; 

// RE for email address (imperfect):
// /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
