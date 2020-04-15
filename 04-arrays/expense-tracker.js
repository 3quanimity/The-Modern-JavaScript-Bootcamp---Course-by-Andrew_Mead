const account = {
  name: "Haythem",
  // Expense -> description(str), amount(num)
  expenses: [],
  // Income -> description(str), amount(num)
  income: [],

  // addExpense method -> args: description, amount
  addExpense: (desc, amount) => {
    account.expenses.push({
      description: desc,
      amount: amount
    });

    console.log(
      `$${amount} for "${desc.toUpperCase()}" has been added to Expenses!`
    );
  },

  // addIncome method -> args: desc, amount
  addIncome: (desc, amount) => {
    account.income.push({
      description: desc,
      amount: amount
    });

    console.log(
      `$${amount} from "${desc.toUpperCase()}" has been added to Income!`
    );
  },

  // getAccountSummary method -> total up all expenses -> Haythem has $1250 in expenses.
  getAccountSummary: () => {
    let totalIncome = 0;
    let totalExpenses = 0;

    account.income.map(income => (totalIncome += income.amount));
    account.expenses.map(expense => (totalExpenses += expense.amount));

    return `${account.name} has $${totalIncome -
      totalExpenses}. $${totalIncome} in income & $${totalExpenses} in expenses.`;
  }
};

// calls
account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 3000);
console.log(account.getAccountSummary());
