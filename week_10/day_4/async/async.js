// console.log( "this runs first" );

// setTimeout( function() {
//   console.log( "this runs second" );
// }, 1000)

// console.log( "this runs third" );

////////////////////////////////

// CUSTOMER 1

console.log( "Customer: Can I order a latte please?" );
console.log( "Server: Nae bother. I'll hand over to the barista." );

setTimeout( function() {
  console.log( "Barista: Your latte is ready." );
}, 4000);

// CUSTOMER 2

console.log( "Customer: Can I order an espresso please?" );
console.log( "Server: Sure. I'll hand over to the barista." );

setTimeout( function() {
  console.log( "Barista: Your espresso is ready." );
}, 2000);

// Customer: Can I order a latte please?
// Server: Nae bother. I'll hand over to the barista.
// Customer: Can I order an espresso please?
// Server: Sure. I'll hand over to the barista.
// Barista: Your espresso is ready.
// Barista: Your latte is ready.
