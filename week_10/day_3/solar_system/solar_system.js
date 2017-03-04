var SolarSystem = function( name ) {
  this.name = name;
  this.planets = [];
  this.planetsCount = function() {
    return this.planets.length;
  };
  this.add = function(planet) {
    this.planets.push(planet);
  }

}

module.exports = SolarSystem;