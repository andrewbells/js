// strict mode -- makes sure var is declared, var names are different, etc...

(function() {
// when combining strict scripts with non stricts its better 
// to wrap up the using script in a function like this
"use strict";

var foo = "Contact form";

var myObject = { samename: 1, different:2 };

function myFunction( a,b,c) {
    return a + b + c;
}

document.getElementById("infopers").innerHTML = foo;

}());

// JS to avoid:
// works only upon page loading, dont wrap in function
document.write("here is some <em>important</em> content added with document.write");
// browser sniffing
if (navigator.userAgent.indexOf('Netscape'))
if (navigator.appName == 'Microsoft Internet Explorer')

// eval

var x = "alert('";
var y = "hello";
var z = "');";

eval(x + y + z)

// pseudo-protocol
/*
<p>Inside your HTML, you may find:
<a href="javascript:someFunction()">this</a>
</p>
// preferable way:
<p>
<a href="page_6.html" onclick="someFunction(); return false;">this</a>
</p>
*/