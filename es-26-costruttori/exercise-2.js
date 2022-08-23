function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = () => `${firstName} ${lastName}`
}

const john = new Person('John', 'Doe');

const simon = new Person('Salmon 鮭', 'Collin');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins





