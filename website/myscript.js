
// console.log("This is js in separate file, ok?");
// this is also comment
/*
console.log
console.warn
console.error
console.info
multiline comment
!=
5 == '5'
5 === 5 strict equality (5 !== '5')
true
false
+=
-=

a = 5
alert(++a) --> output: 6, a = 6
alert(a++) --> 5, output: a = 6
a++;
++a;
a--;
--a;
*=
/=
>=
<=
&& == and
|| == or
%
condition ? true : false;
var playerOne = 400;
var playerTwo = 500

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo ;
*/
var year = 2010; // global variable
if ( year == 2013 ) {
	alert('it is year 2013 now!');
} else {
	if (year > 2013) {
		alert('oho! this is in the future');
	} else {
		alert('this date has already past');
	}

}

var playerOne = 400;
var playerTwo = 500;

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo ;
console.log(highScore)

var a = 1;

while (a < 10) {
	console.log(a);
	a++;
}

var b = 100;
// the loop will happen at least once -- do block is executed before while condition
do {
	console.log(b);
	b++;
} while (b < 10);

// break gets off the loop -- loop stops, continue skips code after and gets at the top of the loop
for (var i = 1; i < 10; i++) {
	console.log('testing for loop')
	if (i == 8) {
		break;
	}
	if ( i % 5 == 0) {
		continue;
	}
	console.log(i)
}

function createMessage () {
		console.log('we are in the function')
}

createMessage();
createMessage();

function myFunction ( x,y ) {
	var myVar = x * y;
	console.log(myVar)
	return myVar;
}
//console.log(myVar) // myVar is local for myFunction
console.log(year)
myFunction(playerOne, playerTwo);
var myresult = myFunction(6,9);

// arrays same as list in py
var multipleValues = [];
multipleValues[0] = 60;
multipleValues[1] = 50;
multipleValues[2] = 'Mouse';

console.log(multipleValues[1])

var multipleValues2 = [10, 20, 30]

console.log(multipleValues2)

// multipleValues3 = [];

// multipleValues3 = new Array();
// multipleValues3 = Array();
multipleValues3 = Array(5);

console.log(multipleValues3.length);
console.log(multipleValues3);

// array methods 
// var reversedValues = multipleValues2.reverse();
console.log(multipleValues2.join());
console.log(multipleValues2.reverse());
console.log(multipleValues.sort());

// var myArrayOfLinks = document.getElementsByTagName("a");

// all js numbers are 64 bit Floats

var foo = '55';
var myNumber = Number(foo); // converts string into a number

if (isNaN(myNumber)) {
	console.log('this is Not a Number')
}
// checking whether this is a number notice '!' meaning NOT
if ( !isNaN(myNumber)) {
	console.log('this is a number')
}


// Math objects

var one = 201.6;
var oneRounded = Math.round(one);
var biggest = Math.max(oneRounded, playerOne, playerTwo);
console.log('rounded is ', oneRounded, 'biggest number is ', biggest)
/*
Math.min
.PI
.log()
.sqrt()
.random()

escape characters
\"

*/

var phrase = "This is a phrase";
console.log(phrase.length); // 16
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase())

var words = phrase.split(' ')
console.log(words)

var position = phrase.indexOf(' is');
console.log(position);

if (phrase.indexOf('DDDD') == -1) {
	console.log('that word does not occur');
}

// .lastIndexOf()

var segment = phrase.slice(6,11);
console.log(segment);
// .substring(start,end);
// .substr(start,length);
// 'Hello' != 'hello'

var today = new Date();
console.log(today);

var y2k = new Date(1985, 7, 19)
today.getMonth(); // 0-11
today.getFullYear(); // yyyy not zero based
today.getDate(); // 1-31 day of month
today.getDay(); // 0-6 0 == sunday

console.log(y2k.getDay());
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getDay());

console.log(today.getHours()); // 0-23
console.log(today.getTime()); // 1382088648007 milliseconds since 1/1/1970

var yesterday = new Date();

yesterday.setMonth(5);
yesterday.setFullYear(2012);
// yesterday.setDay(0); // not working
console.log(yesterday);


var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);

if (date1 == date2) {
    console.log('same');
} else {
    console.log('not same');
}

if (date1.getTime() == date2.getTime()){
	console.log('date1 and date2 are the same');
}



// OBJECTS

var playerName = "Fred";
var playerScore = 10000;
var playerRank = 1;

var player1 = new Object();
player1.name = 'Fred'; // properties of the object
player1.score = 10000;
player1.rank = 1;

var player2 = {name: 'Bob', score: 20000, rank: 2}

// create method logDetails

function playerDetails() {
	console.log(this.name + " has a rank of: " + this.rank + " and a score of " + this.score);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();

// Document Object Model --> see myjavascript2.js

console.log("OBJECTS!");
// OBJECTS and PROTOTYPES

function Player(n,s,r) {
    this.name = n;
	this.score = s;
	this.rank = r;
	
}

Player.prototype.logInfo = function() {
    console.log("I am:",this.name);
}

Player.prototype.promote = function() {
    this.rank++;
    console.log("My new rank is:",this.rank);
}

var fred = new Player("Fred", 10000, 5);

fred.logInfo();
fred.promote();

var bob = new Player("Bob", 15000, 6);
bob.logInfo();
bob.promote();
