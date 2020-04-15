// let myAccount = {
//   name: "Haythem",
//   expenses: 0,
//   income: 150000
// };

// let otherAccount = myAccount;
// otherAccount.income = 200000;
// otherAccount = 1;

// let addExpense = function(account, amount) {
//   account.expenses += amount;
// };

// addExpense(myAccount, 2.5);
// console.log(myAccount);
// console.log(otherAccount);

//Challenge Area
let challengeAccount = {
  name: "Peter",
  expenses: 0,
  income: 0
};
// addIncome
const addIncome = (account, income) => {
  account.income += income;
  return `Added $${income} to income`;
};

// addExpense
const addExpense = (account, expense) => {
  account.expenses += expense;
  return `Added $${expense} to expenses`;
};

// resetAccount
const resetAccount = account => {
  account.income = 0;
  account.expenses = 0;
  return `Account has been reset`;
};

// getAccountSummary
const getAccountSummary = account =>
  `${account.name} has $${account.income - account.expenses}. $${
    account.income
  } in income & $${account.expenses} in expenses`;

console.log(challengeAccount);
console.log(addIncome(challengeAccount, 5000));
console.log(addExpense(challengeAccount, 1000));
console.log(getAccountSummary(challengeAccount));
console.log(resetAccount(challengeAccount));
console.log(getAccountSummary(challengeAccount));
