



  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    city: 'Rome',
    job: 'Developer',
  };

  

  const chiavi = [];

// -----CICLO FOR-IN-------------------
  function getKeys() {
      for(let key in person) {

         chiavi.push(key);
      }
  }

  //(key in person): KEY è una variabile vera e propia come la "i" nei cicli FOR, e non un parametro come le arrow-function


  getKeys();

  console.log(chiavi);





































// function getKeys() {


  //   for (const key in person) {
  //       // console.log(key);
  //       console.log(person[key]);
  //    }
  
  //   }
  //