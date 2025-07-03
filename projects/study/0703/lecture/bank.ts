class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
    // this.#balance = this.#balance + amount;
  }

  getBalance() {
    console.log(this.balance);
  }

  setBalance(amount: number) {
    amount = amount * 1.1;
    this.balance = amount;
  }
}

let account = new BankAccount();
//account.balance = 1000;
account.setBalance(1000);
account.getBalance();
