var React    = require('react');
var ReactDOM = require('react-dom');
var PiggyBank = require('./components/PiggyBank.jsx')

window.onload = function(){    
  var appDiv = document.getElementById('app');
  // var header = React.createElement('h1', null, "Jobby!");
  // ReactDOM.render( header, appDiv );
  ReactDOM.render( <PiggyBank title="Alan's Money Pig" owner="Alan"/>, appDiv );
};
