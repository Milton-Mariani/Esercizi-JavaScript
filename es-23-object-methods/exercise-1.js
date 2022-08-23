// const person = {
//   firstName: 'Mario',
//   lastName: 'Rossi',
//   age: 25
// }

// // Print values of person using Object.keys
// //Vedo che non funziona, mi esce solo se metto la coppia Chiave: "valore", solo se metto direttamente person, in console.log senza usare Object.key() o altri metodi.

// // console.log(Object.keys(person));

//  console.log(person);

// ----------------------------------------

const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}


// Print values of person using Object.keys




// SCELTA 1
let key= Object.keys(person);

for( let i = 0 ; i < key.length; i++ ){
  console.log(`${key[i]}: ${person[key[i]]}`);
}

console.log('');

// SCELTA 2
console.log(person);

console.log('');


// SCELTA 3
console.log(Object.entries(person));





// dite la verità, lavete messo apposta per complicarci la vita per vedere se capivamo se era errato o Node.




