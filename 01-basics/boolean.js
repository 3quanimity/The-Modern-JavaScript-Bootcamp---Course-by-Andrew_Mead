let age = 6;

const ageChecker = age => {
  console.log(`isChild: ${age <= 7}`);
  console.log(`isSenior: ${age >= 65}`);
};

ageChecker(age);

switch (true) {
  case age <= 7:
    console.log("You're too young");
    break;

  case age >= 65:
    console.log("You're too old");
    break;

  default:
    console.log("You can pass");
}
