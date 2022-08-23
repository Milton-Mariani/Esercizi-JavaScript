const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const multiply = (a, b) => {
  return a * b;
}

const divide = (a, b) => {
  return a / b;
}



// const rsum1 = sum(2, 4); 
// const rsum2 = sum(5, 2);
// const rmolt = multiply(rsum1, rsum2);
// const rsub = subtract(rmolt, 2);
// const rdiv = divide(rsub, 5);

// const result = console.log(rdiv);


// console.log(divide(subtract(multiply(sum(2,4), sum(5,2)),2), 5));

 
// LOGICA: ((2 + 4) * (5 + 2) - 2) / 5 = 8

 console.log( divide( subtract( multiply( sum(2,4),sum(5,2) ) , 2) ,5) );


























