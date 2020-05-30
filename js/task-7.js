const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return { id: Math.random(), amount: amount, type: type };
  },

  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
    return `Операция успешна. Ваш баланс: ${this.balance}`;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
      this.balance -= amount;
      return `Операция успешна. Ваш баланс: ${this.balance}`;
    } else {
      return "Недостаточно средств";
    }
  },

  getBalance() {
    return `Ваш баланс: ${this.balance}`;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return "Такой транзакции не существует";
  },
  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Общая сумма по транзакциям ${type} составляет ${total}`;
  },
};

console.log(account.deposit(200));
console.log(account.withdraw(10));
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(1212));
console.log(account.deposit(10000));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

