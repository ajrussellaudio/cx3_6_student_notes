var assert = require( "assert" );
var Planet = require( "../planet" );

describe( 'Planet', function() {

  it("should create a planet with a name", function() {
    var mars = new Planet( "Mars" );
    assert.equal( "Mars", mars.name );
  })

})

// 1. Create a planet_spec.js file for testing
// 2. Create a Planet constructor that takes a name as an argument and make it available to the test file with module.exports
// 3. Write a test that creates a new Planet and checks the Planet has the right name
// 4. Create a SolarSystem constructor that takes in a name and has an initial empty array of planets.
// 5. Export the SolarSystem constructor to make it available to other files
// 6. Test that the SolarSystem has an initial empty array of planets.
// 7. Add a method to the SolarSystem constructor that adds a planet to the array
// 8. Write a test that instantiates a new SolarSystem, some Planets, adds the planets to the SolarSystem and tests the SolarSystem planets array is correct