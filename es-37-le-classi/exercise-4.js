


class BankAccount {
    constructor(importo) {

        this.importo = importo;

    }


    deposit(x) {
        this.importo = this.importo + x;
    }


    withdraw(y) {
        this.importo = this.importo - y;
    }


    view() {
        console.log(this.importo);
    }


} 
















const bankAccount = new BankAccount(1000); // ,io conto iniziale



bankAccount.deposit(500); // aggungio
bankAccount.deposit(200); // aggungio
bankAccount.withdraw(800); // ciapi su e porti a ca
bankAccount.view();















































































