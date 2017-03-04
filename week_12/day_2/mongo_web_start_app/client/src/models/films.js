var Film = require('./film');
var Review = require('./review');

var Films = function(){

}

Films.prototype = {
  all: function() {
    var url = "http://localhost:3000/api/films";
    this.makeRequest( url, function() {
      if( this.status != 200 ) return;
      var jsonString = this.responseText;
      var results = JSON.parse( jsonString );
      console.log( results );
    });
  },
  makeRequest: function( url, callback ){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }
}

module.exports = Films;