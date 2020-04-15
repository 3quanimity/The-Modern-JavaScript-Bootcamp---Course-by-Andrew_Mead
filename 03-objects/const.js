const isRaining = true;
// isRaining = false; // you can't REASSIGN a variable declared with const
console.log(isRaining);

const person = {
  age: 32
};

person.age = 30; // valid (manipuating properties)
console.log(person);

person = {}; // invalid (reassignment)
