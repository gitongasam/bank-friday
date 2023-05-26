class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    getAccountNumber() {
      return this.accountNumber;
    }
  
    getAccountHolder() {
      return this.accountHolder;
    }
  
    getBalance() {
      return this.balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Insufficient funds');
      }
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest() {
      const interest = (this.balance * this.interestRate) / 100;
      console.log(`Interest calculated: ${interest}`);
      return interest;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Exceeded overdraft limit');
      }
    }
  }
  
  // Example usage:
  const savingsAccount = new SavingsAccount('SA001', 'John Doe', 5000, 5);
  console.log(`Account Number: ${savingsAccount.getAccountNumber()}`);
  console.log(`Account Holder: ${savingsAccount.getAccountHolder()}`);
  console.log(`Balance: ${savingsAccount.getBalance()}`);
  savingsAccount.deposit(2000);
  savingsAccount.withdraw(1000);
  savingsAccount.calculateInterest();
  
  const checkingAccount = new CheckingAccount('CA001', 'Jane Smith', 3000, 2000);
  console.log(`Account Number: ${checkingAccount.getAccountNumber()}`);
  console.log(`Account Holder: ${checkingAccount.getAccountHolder()}`);
  console.log(`Balance: ${checkingAccount.getBalance()}`);
  checkingAccount.deposit(1500);
  checkingAccount.withdraw(4000);
  checkingAccount.withdraw(3000);
  