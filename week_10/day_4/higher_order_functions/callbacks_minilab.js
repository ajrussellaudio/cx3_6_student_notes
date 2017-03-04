/////////////////////////////////////////

var functionCaller = function( myCallback, number ) {
  return myCallback(number);
}

var myCallback = function( number ) {
  console.log( "My number is " + number )
}

functionCaller( myCallback, 5 )

/////////////////////////////////////////

var getSomethingFromTheShop = function( budget, callback ) {
  var wanted = "easy lesson today";
  var got = "fucking callbacks!!";

  callback( wanted, got );
}

getSomethingFromTheShop( "50p", function(req, res) {
  console.log("I wanted a " + req + " but all I got was " + res)
});

/////////////////////////////////////////

var increment = function( number ) {
  return number + 1;
}

var square = function( number ) {
  return number * number;
}

var doSomeMathsForMe = function( n, callback ) {
  return callback(n);
}

var n = 45;

console.log(n + " + 1 = " + doSomeMathsForMe(n, increment) );
console.log(n + " squared is " + doSomeMathsForMe(n, square) );

/////////////////////////////////////////
