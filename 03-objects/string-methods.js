let name = " Haythem Ben Drissia ";

// Length property
console.log(name.length);

// Convert to UpperCase
console.log(name.toUpperCase());

// Convert to LowerCase
console.log(name.toLowerCase());

// Includes method
let password = "123password456";
console.log(password.includes("password"));

// Trim Method
console.log(name.trim());
console.log(name);

// Challenge Area
// isValidPassword length is sup to 8 and dosnt contain the word password
const isValidPassword = testedPassword =>
  testedPassword.length > 8 && !testedPassword.includes("password");

console.log(isValidPassword("haha"));
console.log(isValidPassword("hahahahaahhahah"));
console.log(isValidPassword("hahahahahahhpasswordah"));
