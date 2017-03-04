var React = require('react');
var ReactDOM = require('react-dom');
var PiggyBank = require('./components/PiggyBank.jsx');

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Alan's Money Pig" owner="Alan" depositAmount={0.5} />,
    document.getElementById('app')
  );
}
