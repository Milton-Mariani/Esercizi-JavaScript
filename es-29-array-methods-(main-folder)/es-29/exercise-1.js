function adultFilter(persons) {
  let adults = persons.filter((oggetto) => oggetto.age >= 18 );
  return adults
}

function kitzFilter(persons) {
  let kitz = persons.filter((oggettino) => oggettino.age < 18 );
  return kitz
}

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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);

console.log('');
console.log('');


const kitz = kitzFilter(persons);
console.log(persons);
console.log(kitz);


