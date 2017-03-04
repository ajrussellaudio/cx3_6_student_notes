// var greater = function(a, b){
//   if(a > b) return a;
//   return b;
// }

// // console.log("The return value is:", greater(1,2));

// var functionCallingFunctions = function(functionToCall) {
//   console.log( functionToCall(5, 9) );
// }

// functionCallingFunctions( greater );

var greeting = function(firstName, lastName) {
  greetingMessage = "Howdy, " + firstName + " " + lastName + "!";
  return greetingMessage;
}

var multiply = function(number1, number2) {
  product = number1 * number2;
  return product;
}

var firstElement = function(array) {
  return array[0];
}

var printAllTheThings = function() {
  for(var i = 0; i < arguments.length; i++) {
    console.log( arguments[i] );
  }
}

var addToFarmAndPrintName = function( names ) {
  farm = [];
  for(var i = 0; i < names.length; i++){
    name = names[i]
    console.log( name );
    farm.push( name );
  }
  return farm;
}

console.log( greeting("Alan", "Russell") );
console.log( "7 * 8 is", multiply(7, 8) );
var swears = ["fuck", "shit", "cunt", "arse"];
console.log( "The first element of", swears, "is", firstElement(swears) );
printAllTheThings("fuck", "shit", "cunt", "arse");

console.log("");

var animalNames = ["Steve", "Brian", "Chloe", "Fred", "Kirsty"];
console.log( "farm:", addToFarmAndPrintName(animalNames) );
