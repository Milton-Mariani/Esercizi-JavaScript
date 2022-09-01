const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

(async () => {
  // const personJson = await fetchPersonById(4);  //
  // const person = await JSON.parse(personJson);  // codice vecchio, già presente
  // console.log(person);                          //

try {

  const personJson = await fetchPersonById(4);
  const person = await JSON.parse(personJson);
  console.log(person);


} 
catch(err) {
  console.log(err)
}
})();






// console.error() // fa uscire direttamente un ERROR in Rosso

// console.warn()  // fa uscire direttamente un WARNING in Giallo
