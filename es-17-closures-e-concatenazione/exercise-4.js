function calculate() {
  let total = 0;
  return {
    add(number){
      total+=number;
      return this;
    }, //-------------------------------
    sub(number){
      total-=number;
      return this;
    },//-------------------------------
    multiply(number){
      total*=number;
      return this;
    },//-------------------------------
    divide(number){
      total/=number;
      return this;
    },//-------------------------------
    printResult(){
      console.log(total);
    }
  }
}

//il THIS mi permette di ritornare TUTTA LA LOGICA, all interno di ADD o di altre mini funzioni o che sia.
//quindi se ci fosse un altra logica oltre quella esistente in ogni mini-funzione, mi ritornerebbe entrambi i risultati delle 2 lgiche


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7





