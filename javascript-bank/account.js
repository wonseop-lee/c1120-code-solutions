/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  if (amount > 0) {
    let newTrans = new Transaction('deposit', amount);
    this.transactions.push(newTrans);
    return true;
  }
  return false;
}

Account.prototype.withdraw = function(amount) {
  if (amount > 0) {
    let newTrans = new Transaction('withdraw', amount);
    this.transactions.push(newTrans);
    return true;
  }
  return false;
}

Account.prototype.getBalance = function() {
  // if (this.transactions.length === 0){
  //   return 0;
  // }
  var balance = 0;
  for (let i = 0; i < this.transactions.length; i++){
    if (this.transactions[i].type === 'deposit'){
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdraw'){
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
}
