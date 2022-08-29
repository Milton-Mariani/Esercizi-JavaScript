// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// const numbers = [1, 2, 3];
// console.log(sum(numbers[0], numbers[1], numbers[2]));  // 6


// -------------------------------------------

function sum(...num) {
  return num.reduce((a, b) => a + b);  // <-- logica(usare metodo)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));