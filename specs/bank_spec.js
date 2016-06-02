var Bank = require('../bank.js');
var Account = require('../account.js');
var assert = require('chai').assert;


describe('Bank', function() {

  beforeEach(function(){
      bank1 = new Bank([]);
      account1 = new Account("Z&A", 1000, "personal");
      account2 = new Account("Dave", 2000, "personal");
      account3 = new Account("CodeClan", 10000, "business");
      account4 = new Account("Charlie Brown", 10, "personal");
      account5 = new Account("Swan", 5, "business");
      account6 = new Account("Lewis", 50000, "business");
      account7 = new Account("Andrew", 100, "personal");

  });

  it('should add an account', function(){
      console.log(bank1);
      bank1.addAccount(account1);
      console.log(bank1);
      assert.equal(1, bank1.accounts.length);
  });

  it('should find account by name', function(){
      bank1.addAccount(account1);
      bank1.addAccount(account2);
      bank1.addAccount(account3);
      bank1.addAccount(account4);
      bank1.addAccount(account5);
      bank1.addAccount(account6);
      bank1.addAccount(account7);
      console.log(bank1);
      assert.equal( account5, bank1.findAccByOwnerName("Swan"));
  });

  it('should find the largest account', function(){
      bank1.addAccount(account1);
      bank1.addAccount(account2);
      bank1.addAccount(account3);
      bank1.addAccount(account4);
      bank1.addAccount(account5);
      bank1.addAccount(account6);
      bank1.addAccount(account7);
      assert.equal(1, bank1.accounts.length);
  });

});
