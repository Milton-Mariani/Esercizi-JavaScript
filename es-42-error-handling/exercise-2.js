class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount <= 0) {
      try {
        throw new Error('The amount provided cannot be negative or zero');
      } catch (error) {
        console.log('Questo è un: ', error.message);
      }
    }
    this.#amount += amount;
  }

// -- -- -- -- -- -- -- -- -- -- -- -- 

  withdraw(amount) {



    try {

      if (amount < 0) {
        throw new Error('The amount provided cannot be negative');
      }

      if (this.#amount < amount) {
        throw new Error('You cannot withdraw more than account balance');
      }

      this.#amount -= amount;
    }
    catch (error) {
        console.log('Questo è un: ', error.message);
    }

}
  
// -- -- -- -- -- -- -- -- -- -- -- -- 

  view() {
    console.log(this.#amount);
  }
}


// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();