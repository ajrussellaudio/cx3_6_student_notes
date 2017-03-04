var myArray = [ 1, 2, 3, 4, 5 ]

var square = function( n ) {
  return n * n;
}

var reportSquared = function( item ) {
  console.log("The number squared is " + square(item) )
}

// myArray.forEach( reportSquared );

var myForEach = function( array, callback ) {
  for( var i = 0; i < array.length; i++ ) {
    callback( array[i] );
  }
}

console.log( myForEach( myArray, reportSquared ) );
console.log( myForEach( myArray, function( item ) {
  console.log("The number squared is " + item )
} ) );
