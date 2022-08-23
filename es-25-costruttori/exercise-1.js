// const person = {
//   firstName: '',
//   lastName: '',
//   get fullName() {
//       return `${person.firstName} ${person.lastName}` 
//   },
//   set fullName(value) {
//       const partsName = value.split(' ');
//       this.firstName = partsName[0];
//       this.lastName = partsName[1];
//   }
// };

// const person1 =  person.fullName = 'John Doe';
// const person2 = new person.fullName = 'Simon Collins';


// console.log(person);



const person = {
  get firstName() {
    return this._firstName;
  },
  set firstName(a) {
    this._firstName = a;
  },
//- - - - - - - - - - - - - -
  get lastName() {
    return this._lastName;
  },
  set lastName(a) {
    this._lastName = a;
  },
//- - - - - - - - - - - - - -
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- --
const john = Object.create(person);
john.firstName = "John";
john.lastName = "Doe";

const simon = Object.create(person);

simon.firstName = "Simon";
simon.lastName = "Collins";


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins



// ` `