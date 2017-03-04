var React = require('react');

var PiggyBank = React.createClass({
  propTypes:{
    title: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    depositAmount: React.PropTypes.number.isRequired,
  },
  addToSavings: function(){
    this.setState({ total: this.state.total + this.props.depositAmount });
  },

  withdrawMoney: function(){
    this.setState({ total: this.state.total - this.props.depositAmount });
  },

  getInitialState: function(){
    console.log("Getting initial state...")
    return {
      total: 0
    }
  },

  componentWillMount: function() {
    console.log("Component WILL Mount");
    var button = document.querySelector("button");
    console.log("Button:", button);
  },

  componentDidMount: function() {
    console.log("Component DID Mount");
    var button = document.querySelector("button");
    console.log("Button:", button);
  },

  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL update...");
    console.log("nextProps:", nextProps);
    console.log("nextState:", nextState);
  },

  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID update.");
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
  },

  render: function(){
    console.log("Rendering...")
    var total = this.state.total.toFixed(2);

    return(
        <div>
          <h1>{this.props.title}</h1>
          <h3>Belongs to: {this.props.owner}</h3>
          <p>Total savings: £{total}</p>
          <button type="button" onClick={this.addToSavings}>Deposit change!</button>
          <button type="button" onClick={this.withdrawMoney}>Buy sweets!</button>
        </div>
    );
  }

});

module.exports = PiggyBank;
