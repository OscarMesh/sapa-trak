var state = {
  balance: 0,
  income: 30000,
  expenses: 10000,
  transactions: [
    { name: "salary", amount: 30000, type: "income" },
    { name: "shopping", amount: 10000, type: "expense" },
  ],
};


var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#income");
var expenseEl = document.querySelector("#expenses")


function init() {
    balanceEl.innerHTML = `#${state.balance}`
    incomeEl.innerHTML =`#${state.income}`
    expenseEl.innerHTML =`#${state.expenses}`
}
init ()
