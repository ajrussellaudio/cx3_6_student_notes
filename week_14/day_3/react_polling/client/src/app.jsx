var React = require('react');
var ReactDOM = require('react-dom');

var BitCoinPricer = require('./components/BitCoinPricer');

window.onload = function(){
  ReactDOM.render(
    <BitCoinPricer 
      url="http://api.coindesk.com/v1/bpi/currentprice/JPY.json" />,
    document.getElementById('app')
  );
}
