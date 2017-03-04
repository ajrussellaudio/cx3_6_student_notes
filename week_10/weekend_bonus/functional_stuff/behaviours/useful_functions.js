var forEach = function( array, callback ) {
  for( var i = 0; i < array.length; i++ ){
    callback( array[i] );
  }
}

module.exports.map = function( array, callback ) {
  var results = [];
  forEach( array, function( item ) {
    results.push( callback( item ) );
  })
  return results;
};

module.exports.filter = function( array, test ) {
  var results = [];
  forEach( array, function( item ){
    if( test(item) ){
      results.push( item );
    }
  })
  return results;
};

module.exports.concatAll = function( array ) {
  var results = [];
  forEach( array, function( subarray ) {
    if( Array.prototype.isPrototypeOf( subarray ) ){
      forEach( subarray, function( item ) {
        results.push( item );
      })
    } else {
      results.push( subarray );
    }
  })
  return results;
};
