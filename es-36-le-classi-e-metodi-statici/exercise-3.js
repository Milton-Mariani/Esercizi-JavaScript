class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(x) {
    return new Person(x.firstName, x.lastName)
  }
  
}

// ------------------------
const mmario = {
  firstName: 'Mario',
  lastName: 'Rossi'
};



const person = Person.fromObject(mmario);
console.log(`${person.firstName} ${person.lastName}`);
















