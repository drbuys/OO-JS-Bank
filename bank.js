var Account = require('./account.js');
var _ = require('lodash');

var Bank = function( accounts ){
    this.accounts = accounts;
};

Bank.prototype = {
    addAccount: function(account){
        this.accounts.push(account);
    },

    // findAccByOwnerName: function(ownerName){
    //     this.accounts.forEach(function(account){
    //         if(account.name === ownerName){
    //             return account;
    //         };
    //     })
    // }

    findAccByOwnerName: function(ownerName){

        var foundArray = _.filter(this.accounts, function(account) {
            return account.name === ownerName;
        });

        return foundArray[0];
    },

    findLargestAccount: function(){
        var value = 0
        var acc = {}
        this.accounts.forEach(function(account){
            if(account.amount > value){
            value = account.amount;
            acc = account;
        }

        })
        return account;
    }
}

module.exports = Bank;
