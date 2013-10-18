var mainContent = document.getElementById("mainContent"); // most popular
/*
var mylistItems = document.getElementsByTagName('li'); // notice elementS

console.log(mainContent);
// console.log(mylistItems);


console.log('this is an element of type: ', mainContent.nodeType);
console.log('the inner HTML is ', mainContent.innerHTML );
console.log('Child nodes: ', mainContent.childNodes.length );

var myListLinks = document.getElementsByTagName('a');
console.log('links: ', myListLinks.length);
console.log(myListLinks);
var limitedListLinks = mainContent.getElementsByTagName('a')
console.log(limitedListLinks);
*/

// changing elements
mainContent.setAttribute('align', 'left');

var header = document.getElementById('header');
console.log(header.innerHTML);


// adding elements
var myNewElement = document.createElement('li');
var myList = document.getElementById('unorderedList');
myList.appendChild(myNewElement);
// myNewElement.innerHTML = 'New item text';
var myText = document.createTextNode('new list item created the right way');
myNewElement.appendChild(myText);



var newHeading = document.createElement('h1');
var newParagraph = document. createElement('p');

// an easy way
// newHeading.innerHTML = 'Did you know?';
// newParagraph.innerHTML = 'Andrey even speaks lame Finnish!';

// a right way: 1. create an element, 2. add it to the dom
var h1Text = document.createTextNode('Did you freaking know??');
var paraText = document.createTextNode("Andrey 'jopa' puhuu lame Suomea!");
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById('trivia').appendChild(newHeading);
document.getElementById('trivia').appendChild(newParagraph);

// parent.insertBefore(newElement, existingElement);

var newListElement = document.createElement('li');
var listText2 = document.createTextNode('this element is inserted using parent.isertBefore');
newListElement.appendChild(listText2);
var thirdItem = myList.getElementsByTagName('li')[2]; // line 29
myList.insertBefore(newListElement, thirdItem);