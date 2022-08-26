//PRIMA
// function isAdult(person) {
//   return person.age >= 18;
// }

//DOPO
function isAdult({age}) { //{age} significa gli anni dell oggetto.
  return age >= 18;  //qui scrivo solo: age, perchè il fatto che sia dell oggetto è gia definito all interno del parametro tra le graffe -->  {age}.
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));