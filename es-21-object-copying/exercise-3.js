const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// const person2 = Object.assign({}, person1);
const person2 =  JSON.parse(JSON.stringify(person1));





person2.firstName = 'Braü';
person2.lastName = 'Brambilla';

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';


console.log(person1);
console.log(person2);








// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1





let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));






