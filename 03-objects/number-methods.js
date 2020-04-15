let num = 103.941;

// .toFixed : determines num of decimals
console.log(num.toFixed(2));

console.log(Math.round(num)); // round to closest
console.log(Math.ceil(num)); // round up
console.log(Math.floor(num)); // round down

console.log(Math.random()); // generate num in [0, 1[

//generate a num between 10 and 20
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge Area
const makeGuess = guess => {
  let min = 0;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return `${guess ===
    randomNum}, you guessed ${guess}, correct answer was ${randomNum}`;
};

console.log(makeGuess(2));
