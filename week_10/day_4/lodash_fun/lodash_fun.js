var _ = require( "lodash" );

var myArray = [ 2, 2, 4, 4, 5 ];

_.forEach( myArray, function( item ) {
  console.log( "item:", item );
});

var doubledArray = _.map( myArray, function( item ) {
  return item * 2;
})

console.log(doubledArray);

var sum = _.sum( myArray );

console.log( "sum of myArray:", sum );
console.log( _.now() )