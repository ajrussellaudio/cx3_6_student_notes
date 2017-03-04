// var myPerson = {
//   name: "Guybrush",
//   age: 32,
//   weapon: "cutlass",
//   talk: function() {
//     return "Shiver me timbers! My name is " + this.name;
//   }
// }

// // console.log( "myPerson:", myPerson );
// console.log( myPerson.talk() );

var bear = {
  name: "Steve",
  type: "panda",
  belly: [],
  eat: function(food) {
    this.belly.push(food);
  }
}

bear.eat("pizza");
console.log("belly:", bear.belly);