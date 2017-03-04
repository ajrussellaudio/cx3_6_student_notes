function hello() {
  console.log("Hello everyone!");
}

function add(number1, number2) {
  return number1 + number2;
}

function printName(name, age) {
  console.log(name, "is", age, "years old.");
}

// function sum() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// var sum = add(2, 5);

var hello = function() {
  console.log("Hello!");
}

hello();
console.log(add(3, 4));
printName("Alan", 34);

console.log( add(5) );
console.log( sum(5, 4, 9, 90, 43, 75, 62, 12) )
