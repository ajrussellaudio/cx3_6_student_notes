var assert = require( 'assert' );
var A = require('../behaviours/useful_functions');

describe(".map( array, callback )", function() {
  var input = [ 1, 2, 3 ];

  it("maps new values to the items of an array", function() {
    var expected = [ 2, 3, 4 ];
    var actual = A.map( input, function( n ) { return n + 1 });
    assert.deepEqual( expected, actual );
  });
})

describe(".filter( array, test )", function() {
  var input = [ 1, 2, 3, 4 ];

  it("applies a test to each item in an array, returning all those which pass", function() {
    var expected = [ 3, 4 ];
    var actual = A.filter( input, function( n ) { return n > 2 }); 
    assert.deepEqual( expected, actual );
  })
})

describe(".concatAll()", function() {

  it("iterates over each sub-array in the array and collects the results in a new, flat array", function() {
    var input = [ [1,2,3], [4,5,6], [7,8,9] ];
    expected = [1,2,3,4,5,6,7,8,9];
    actual = A.concatAll( input );
    assert.deepEqual( expected, actual );
  })

  it("returns the original for one-dimensional arrays", function() {
    var input = [1,2,3];
    expected = [1,2,3];
    actual = A.concatAll( input );
    assert.deepEqual( expected, actual );
  })

  it("doesn't mess up mixed arrays", function() {
    var input = [ [1,2,3], 4, [5,6,7], 8, 9 ];
    expected = [1,2,3,4,5,6,7,8,9];
    actual = A.concatAll( input );
    assert.deepEqual( expected, actual );
  })

})

describe(".reduce()", function() {
  it("does stuff")
})

describe(".zip", function() {
  it("does stuff")
})