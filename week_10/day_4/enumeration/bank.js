var Bank = function() {
  this.accounts = [100,200,300,400];
  this.total = 0;
}

Bank.prototype = {
  calculateTotal: function() {
    this.total = 0;
    this.accounts.forEach( function( item ) {
      this.total += item;
    }.bind(this) );
  }
}

var bank = new Bank();
console.log( "bank.total:", bank.total );
bank.calculateTotal();
console.log( "bank.total:", bank.total );