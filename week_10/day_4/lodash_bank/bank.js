var _ = require( "lodash" );

var Bank = function( name ) {
  this.name = name;
  this.accounts = [];
}

Bank.prototype.accountsHeld = function() {
  return this.accounts.length;
};

Bank.prototype.add = function( account ) {
  this.accounts.push( account );
};

Bank.prototype.findAccountByName = function( name ) {
  var account = _.find( this.accounts, function(account) { 
    return account.name === name 
  });
  return account;
};

Bank.prototype.findLargestAccount = function() {
  var sortedAccountsAsc = _.sortBy( this.accounts, function(account) {
    return account.balance;
  })
  var sortedAccountsDesc = _.reverse( sortedAccountsAsc );
  return sortedAccountsDesc[0]
};

Bank.prototype.total = function() {
  var total = 0;
  _.forEach( this.accounts, function(account) { 
    total += account.balance;
    return total;
  });
  return total;
};

Bank.prototype.averageBalance = function() {
  var total = this.total();
  var accountsHeld = this.accountsHeld();

  return total / accountsHeld;
};

Bank.prototype.totalForAccountType = function( type ) {
  var accountsOfType = _.filter( this.accounts, function(account) {
    return account.type === type;
  })
  var total = 0;
  _.forEach( accountsOfType, function(account) { 
    total += account.balance;
    return total;
  });
  return total;
};

module.exports = Bank;