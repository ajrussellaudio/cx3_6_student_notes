// Hashes are called objects in JS

var myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: "cutlass",
  address: { 
    street: "Pirate Way", 
    postcode: "EH4 7AL" 
  }
}

console.log(myPerson);
console.log( "name:", myPerson.name );

// myPerson.name = "Lee";
// console.log(myPerson);

console.log("street:", myPerson.address.street)

var caesar = {city: "Rome"};
var cleopatra = {city: "Cairo"}
var cicero = {city: "Rome"}

var historicalPeople = [caesar, cleopatra, cicero];

console.log(historicalPeople);