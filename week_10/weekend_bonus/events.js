var events = require( 'events' );
var util = require( 'util' );

// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function( message ) {
//   console.log( message );
// })

// myEmitter.emit("someEvent", "hiya");

var Person = function( name ) {
  this.name = name;
};

util.inherits( Person, events.EventEmitter );

var james = new Person( "James" )
var mary = new Person( "Mary" )
var ryu = new Person( "Ryu" )

var people = [ james, mary, ryu ];

people.forEach( function(person) {
  person.on("speak", function( message ) {
    console.log(person.name + " said '" + message + "'");
  })
});

Person.prototype.speak = function( message ) {
  this.emit( "speak", message );
};

// james.speak("Hey dudes!");
// ryu.speak("I want a curry!");

module.exports = Person;