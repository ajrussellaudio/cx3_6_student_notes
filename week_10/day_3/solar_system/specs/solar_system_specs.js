var assert = require( "assert" );
var SolarSystem = require( "../solar_system" );
var Planet = require( "../planet" );

describe( "SolarSystem", function() {

  var solarSystem;
  var jupiter;

  beforeEach(function() {
    solarSystem = new SolarSystem( "The Solar System" );
    jupiter = new Planet( "Jupiter" );
  })

  it("should create a solar system with a name", function() {
    assert.equal( "The Solar System", solarSystem.name );
  })

  it("should be empty when created", function() {
    assert.deepEqual( [], solarSystem.planets );
  })

  it("should be able to add planets", function() {
    solarSystem.add(jupiter);
    assert.equal( 1, solarSystem.planetsCount() );
  })

})