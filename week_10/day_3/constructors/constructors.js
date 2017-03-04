var House = function( sqFeet, bathrooms, bedrooms ) {
  this.sqFeet    = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms  = bedrooms;
  this.rooms     = function() {
    return (this.bathrooms + this.bedrooms);
  }
}

var house1 = new House( 2000, 2, 3 );
var house2 = new House( 3000, 3, 5 );

// console.log( "house1:", house1 );
// console.log( "house2:", house2 );
// console.log( "house1.rooms():", house1.rooms() );
// console.log( "house2.rooms():", house2.rooms() );

var Office = function( desks, meetingRooms ) {
  this.desks        = desks;
  this.meetingRooms = meetingRooms;
  this.desksPerMeetingRoom = function() {
    return this.desks / this.meetingRooms;
  }
}

var office1 = new Office(22, 7);

console.log("office1:", office1);
console.log("office1.desksPerMeetingRoom():", office1.desksPerMeetingRoom());