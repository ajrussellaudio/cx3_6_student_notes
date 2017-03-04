var assert = require( "assert" );
var Bank = require( "../bank" );

describe( "Bank", function() {

  var bank;
  var account1;

  before(function() {
    bank = new Bank( "Big Al's Bank" );
    account1 = {
      name: "Alan",
      balance: 300,
      type: "personal"
    };
    account2 = {
      name: "Robbie",
      balance: 3500,
      type: "business"
    };

    bank.add( account1 );
    bank.add( account2 );
  })

  beforeEach(function() {
  })

  it("can add an account", function() {
    assert.equal( 2, bank.accountsHeld() )
  });

  it("can find account by owner name", function() {
    assert.deepEqual( account1, bank.findAccountByName("Alan") );
  });

  it("can find the largest account", function() {
    assert.deepEqual( account2, bank.findLargestAccount() );
  });

  it("can find the total account value", function() {
    assert.equal( 3800, bank.total() );
  });

  it("can find the average value", function() {
    assert.equal( 1900, bank.averageBalance() );
  });

  it("can find the total value for an account type", function() {
    assert.equal( 300, bank.totalForAccountType( "personal" ) )
  });

})