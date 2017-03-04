// var myFunction = function( arg1 ) {
//   console.log( "I waited.", arg1 );
// }

// setTimeout( myFunction, 1000, "hiya" );

var redChecker = function( colour, ifRed, ifNotRed ) {
  if( colour === "red" ) {
    console.log( ifRed() );
  } else {
    console.log( ifNotRed() )
  }
}

var itsRed = function() { return "it's red!" };

var itsNotRed = function() { return "it's not red!" };

redChecker( "blue", itsRed, itsNotRed );