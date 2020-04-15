let myBook = {
  title: "1987",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

//Passing an object to a function
let getSummary = function(book) {
  console.log(`${book.title} by ${book.author}`);
};

getSummary(myBook);
getSummary(otherBook);

//Returning an object from a function -> to be able to pass back multiple values (exp: 2 strings)
let getSummary2 = function(book) {
  return {
    summary: `${book.title} by ${book.author}.`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  };
};

let bookSummary = getSummary2(myBook);
console.log(bookSummary.pageCountSummary);

// Challenge area
const convertFahrnheit = fahrenheit => {
  return {
    fahrenheit: fahrenheit,
    celcius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9)
  };
};

// console.log(convertFahrnheit(74).celcius);
const convertedTemp = convertFahrnheit(74);
console.log(convertedTemp.celcius);
