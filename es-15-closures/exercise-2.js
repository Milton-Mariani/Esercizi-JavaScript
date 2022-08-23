function pow(base) {
  return function(number) {
  return base**number;
   }
}

const pow2 = pow(2); //base
const pow5 = pow(5); //base

console.log('--- Power of 2 ---');
console.log(pow2(4)); //esponente
console.log(pow2(2)); //esponente
console.log(pow2(8)); //esponente

console.log('--- Power of 5 ---');
console.log(pow5(4)); //esponente
console.log(pow5(2)); //esponente
console.log(pow5(8)); //esponente


// da ritornarci per capire meglio





