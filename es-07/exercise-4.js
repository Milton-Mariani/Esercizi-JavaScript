



const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];




// // ---VERSIONE 1----------------- funzione con arrow funcion((xk non ne ha bisogno del nome in questo caso).
// const nicknames = persons.map( 
//   (element)=> {
//       return  element.name + element.age;
// }
// )

// ---VERSIONE 2-----------------funzione senza nome(xk non ne ha bisogno del nome in questo caso). / versione vista usare piu vole, e subito dopo anche laArrowFunction come sopra.
const nicknames = persons.map( 
  function (element) {
      return  element.name + element.age;
}
)

// // ---VERSIONE 3----------------- nome a caso della funzione interna alla variabile(xk non ne ha bisogno del nome in questo caso).
// const nicknames = persons.map( 
//   function aaa (element) {
//       return  element.name + element.age;
// }
// )


//da ricordare: 
//Posso usare anche questa forma per unire i valori alla fine dopo il RETURN:

// return `${element.firstName} ${element.lastName}`;


console.log(persons);
console.log(nicknames);















