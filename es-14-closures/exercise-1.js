
// -----VERSIONE 1--------------------------------------------
function greet(greeting) {
    return function(person) {
            return `${greeting} ${person}`
  }
}




// // -----VERSIONE 2-  con 2 funzioni separate e unite nel console log-------------------------------------------
// function greet(greeting) {
//   return greeting
//   }

// function person(persons) {
//     return persons
//   }


// console.log(greet('Ciau'),person('Pepin'));











const greetWithHello = greet('Hello');
const greetWithBye = greet('Bye');
const greetWithHi = greet('Hi');
const greetWithWella = greet('Wella');


const greetPaulWithHello = greetWithHello('Paul');
const greetPaulWithHi = greetWithHi('Paul');
const greetJohnWithBye = greetWithBye('John');
const greetSimonWithHello = greetWithHello('Simon');
const greetPeppaWithWella = greetWithWella('Peppa');



console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);
console.log(greetPeppaWithWella + '! (^^)/');
console.log('Scusami ma non mi piaceva la virgola.');