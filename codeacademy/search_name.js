var text = "every now and then Andrey is\ trying to become somone else.\ Andrey is damn stupid. may be.";
var myName = "Andrey";
var hits = [];
for (var i = 0; i < text.length; i++) {
    if (text[i] === 'A') {
        for (var j = i; j < myName.length + i; j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    return "Your name wasn't found!";
} else {
    console.log(hits);
}