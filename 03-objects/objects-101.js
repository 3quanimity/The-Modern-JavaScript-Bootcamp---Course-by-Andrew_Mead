//Defining an object
let myBook = {
  title: "1987",
  author: "George Orwell",
  pageCount: 326
};

//Reading properties from an object
console.log(`${myBook.title} by ${myBook.author}`);

//Changing an object property
myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

//Challenge Area
let person = {
  name: "Haythem",
  age: 31,
  location: "Elmourouj"
};

person.age += 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
