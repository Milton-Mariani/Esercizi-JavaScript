class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) { // ⇓⇓⇓ Error, è una classe nativa, notare infatti la lettera maiuscola all inizio della parola.
//   vecchio　→   throw new Error('The amount provided cannot be negative'); // Use custom Error class
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class

    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) { // ⇓⇓⇓ Error, è una classe nativa, notare infatti la lettera maiuscola all inizio della parola.
//  vecchio　→    throw new Error('The amount provided cannot be negative'); // Use custom Error class
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class

    }

    if (this.#amount < amount) { // ⇓⇓⇓ Error, è una classe nativa, notare infatti la lettera maiuscola all inizio della parola.
//  vecchio　→    throw new Error('You cannot withdraw more than account balance'); // Use custom Error class
      throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}



      //  ⇓⇓⇓   vedi l' Error descritto sopra!
    class NegativeAmountError extends Error {
      constructor(emanueleFilibertoSecondoDiSantaChiaraAlPinoMarittimoInCimaAlColle) {
        super(emanueleFilibertoSecondoDiSantaChiaraAlPinoMarittimoInCimaAlColle);
      }
    }
    
    class WithdrawNotPermittedError extends Error {
      constructor(emanueleFilibertoSecondoDiSantaChiaraAlPinoMugoInCimaAlColle) {
        super(emanueleFilibertoSecondoDiSantaChiaraAlPinoMugoInCimaAlColle);
      }
    }
    





try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}
















































