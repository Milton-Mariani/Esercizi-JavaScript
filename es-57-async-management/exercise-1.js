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
  },

  // {
  //   id: 1,
  //   firstName: 'peppone',
  //   lastName: 'porporella',
  //   age: 3
  // }

];



function fetchPersonById(id) {
    return new Promise((resolve, reject) => {



      if (persons.find( (x) => x.id === id)) {

        return resolve(persons.find( (x) => x.id === id)) // Posso usare FIND, se voglio fermarmi solo al primo numero di ID che sto cercando, e se ce ne sono altri con lo stesso numero non me li da. 

      }



      // if (persons.filter( (x) => x.id === id)) {

      //   return resolve(persons.filter( (x) => x.id === id))  // Posso usare anche FILTER che mi trova tutti gli ID con in numero che cerco.

      // }

    });
}



fetchPersonById(1).then(console.log); // sia cosi su una riga che su due con il .THEN va bene

fetchPersonById(1)
.then(console.log);
















































































