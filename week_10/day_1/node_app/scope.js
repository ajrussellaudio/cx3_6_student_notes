// var name = "Alan"

// var talk = function() {
//   var name = "Kiyo";
//   console.log("My name is", name);
// }

// var walk = function() {
//   console.log(name + " is walking");
// }

// talk();
// walk();

// console.log("trying to access name... " + name);

///////////////////////////////////////////////////

var greet = function (isHappy) {
  var text = "";
  if(isHappy) {
    text = "hello my friend";
  } else {
    text = "mind your own business!";
  }
  var displayText = function() {
    console.log(text);
  }
  displayText();
}

greet(true);