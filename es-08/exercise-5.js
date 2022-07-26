
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


// con FUNZIONE senza nome--------------------------------------
  // let media = persons.reduce(
  //   function(a, b) {
  //     return a + b.age / persons.length;
  //   }, 0

  // );




// con ARROW FUNCTION----------------------------------------------------

// let media = persons.reduce(
//   (a, b) => {
//     return a + b.age / persons.length;
//   },0
// );

// Variente della Arrow Function senza RETURN e Graffe-------------------------------------------------------------
let media = persons.reduce(
  (a, b) => 
  a + b.age / persons.length, 0
             /*↑ b ↑ */
);





// -- con CICLO FOR----------------------------------------------------
  // let media = 0;

  // for(let i = 0; i < persons.length; i = i + 1) {
  //         media = media + persons[i].age / persons.length;
  // }









//    sum(key) {
//     return this.reduce((a, b) => a + (b[key] || 0), 0);
// }




  console.log(persons);
  console.log(Math.floor(media));














