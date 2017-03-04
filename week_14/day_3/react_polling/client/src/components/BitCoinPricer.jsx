var React = require('react');

var BitCoinPricer = React.createClass({

  getInitialState: function() {
    return { price: null }
  },

  componentDidMount: function() {
    this.getData();
    setInterval( this.getData, 10000 );
  },

  componentWillUpdate: function(nextProps, nextState) {
    if( nextState.price > this.state.price ){
      this.setColor("green");
    } else if ( nextState.price < this.state.price ){
      this.setColor("red");
    }
  },

  setColor: function( color ) {
    var tag = document.querySelector(".pPrice");
    tag.className = "pPrice " + color;
  },

  getData: function() {
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function() {
      var priceData = JSON.parse(request.responseText );
      this.setState({ price: priceData.bpi.JPY.rate_float })
      console.log("Price is:", this.state.price)
    }.bind(this);
    request.send();
  },

  render: function() {
    console.log("Rendering...");
    var priceInfo = this.state.price
    if( !this.state.price ){
      priceInfo = "Loading..."
    }

    return (
      <div>
      <h1>BitCoin Price Index JPY</h1>
      <p className="pPrice">¥{priceInfo}</p>
      </div>
    );
  }
});

module.exports = BitCoinPricer;