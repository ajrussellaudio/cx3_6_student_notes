//Section 1

//what types are these? Write your answer in a comment beside it.

1;         // number
"cat";     // string
true;      // boolean
[];        // array
{};        // object
1.1;       // number
undefined; // undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; // true
true;  // true
NaN;   // false
[];    // true
{};    // true
undefined; // false
"";    // false
0;     // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var number = 42;

//3.2 Assign a variable that is a string
var string = "cockmaster";

//3.3 Assign a variable that is a boolean
var jetFuelCanMeltSteelBeams = false;

//3.4 Assign a variable that is an object
var alan = {
  name: "Alan Russell",
  age: 34,
  hometown: "Glasgow",
  isAwesome: true
}

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var it = true;
if(it === true){
  console.log("hello");
} else {
  console.log("bye");
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstAnimal = animals[0];

//5.2. Assign the last element to a variable
var lastAnimal = animals[-1];

//5.3. Assign the length of an array to a variable
var animalsCount = animals.length;

//5.4. Add an item to the end of the array
animals.push("snake");

//5.5. Add an item to the start of the array
animals.unshift("panda");

//5.6. Assign the index of hedgehog to a variable
var hedgehogIndex = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["chips", "potato scone", "pickled onion", "mushrooms I think", "Snickers?"];

//6.2 Loop over the array and write to the console using a "while"
var i = 0;
while( i < vegetables.length ) {
  vegetable = vegetables[i];
  console.log(vegetable);
  i++;
}

//6.3 Loop again using a "for" with a counter
for( var i = 0; i < vegetables.length; i++ ) {
  vegetable = vegetables[i];
  console.log(vegetable);
}

//6.4 Loop again using a "for in"
for( i in vegetables ) {
  vegetable = vegetables[i];
  console.log(vegetable);
}

// BONUS: Loop again using a "for of"
for( vegetable of vegetables ){
  console.log(vegetable);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
var totalCash = function() {
  total = 0;
  for( var i = 0; i < accounts.length; i++ ) {
    total += accounts[i].amount;
  }
  return total
}

//7.2 Find the name of the account with the largest balance
var accountsSorted = accounts.sort(function(a, b) {
  return (b.amount - a.amount);
})

var nameOfLargestBalanceHolder = function() {
  return accountsSorted[0].name;
}

//7.3 Find the name of the account with the smallest balance
var nameOfSmallestBalanceHolder = function() {
  return accountsSorted[accounts.length - 1].name;
}

//7.4 Calculate the average bank account value
var averageBalance = function() {
  var totalCash = totalCash();
  var accountHolders = accounts.length;
  return (totalCash / accountHolders);
}

//7.5 Find the value of marcs bank account
var accountBalanceByName = function(searchName) {
  for(var i = 0; i < accounts.length; i++) {
    var account = accounts[i];
    if(account.name === searchName) {
      return account.amount;
    }
  }
}
accountBalanceByName("marc");

//7.6 Find the holder of the largest bank account
console.log("val");

//7.7 Calculate the total cash in business accounts
var totalCashInAccountType = function(accountType) {
  total = 0;
  for( var i = 0; i < accounts.length; i++ ) {
    account = accounts[i];
    if(account.type === accountType){
      total += account.amount;
    }
  }
  return total
}
totalCashInAccountType("business");

//7.8 Find the largest personal account owner
var largestAccountHolderByType = function(accountType) {
  for( var i = 0; i < accounts.length; i++ ) {
    account = accountsSorted[i];
    if(account.type === accountType){
      return account.name;
    }
  }
}
largestAccountHolderByType("personal")


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
var myPerson = {
  name: "Alan Russell",
  height: 74, // inches
  belly: [],
  favouriteFood: {
    name: "pizza",
    calories: 2000
  },
  eat: function(food) {
    belly.push(food);
    console.log("nom nom nom");
  }
}