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

/*
$("p").click(function() {
    $(this).fadeOut(2000);
});
*/

/*
$(document).ready(function() {
    $("#header").text("the DOM is fully loaded");
});
*/

$(document).ready(function() {
    $("h3").css("color", "red");
});
