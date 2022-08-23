// DA RIVEDERE 


function memorize(fn) {
  let cache = {};
  return (number) => {
    if (cache[number]) {
    console.log('Fetching from cache for: '+ number)
    return cache[number]
  }
  console.log('Calculating result for: ' + number)
  const output = fn(number);
  cache[number] = output;
  return output;
}

}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}


let factory = memorize(factorial);
/*Calculating*/
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
/*Fetching*/
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));



