var React = require('react');

var PiggyBank = React.createClass({

  getInitialState: function() {
    return { 
      total: 0,
      amount: 0 };
  },

  propTypes: {
    title: React.PropTypes.string
  },

  addToSavings: function() {
    this.setState({
      total: this.state.total + this.state.amount
    })
  },

  withdrawFromSavings: function() {
    this.setState({
      total: this.state.total - this.state.amount
    })
  },

  handleChange: function( event ) {
    this.setState({
      amount: parseInt(event.target.value)
    })
  },

  render: function(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Owner: {this.props.owner}</p>
        <p>Total Savings: £{this.state.total}</p>
        <input type="number" value={this.state.amount} onChange={this.handleChange} />
        <button onClick={this.addToSavings}>Deposit change!</button>
        <button onClick={this.withdrawFromSavings}>Withdraw funds!</button>
      </div>
      );
  }

});

module.exports = PiggyBank;
