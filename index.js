var state = {
  balance: 20000,
  income: 30000,
  expenses: 10000,
  transactions: [
    { name: "salary", amount: 30000, type: "income" },
    { name: "shopping", amount: 10000, type: "expense" },
  ],
};

var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#income");
var expenseEl = document.querySelector("#expenses");
var transactionsEl = document.querySelector("#transactions");

function init() {
  updateState();
  render();
}

function updateState() {
  var balance = 0,
    income = 0,
    expense = 0,
  item;

  for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];

    if (item.type === "income") {
      income += item.amount;
    } else if (item.type === "expense") {
      expense += item.amount;
    }
  }

  console.log(balance, income, expense);
}

function render() {
  balanceEl.innerHTML = `#${state.balance}`;
  incomeEl.innerHTML = `#${state.income}`;
  expenseEl.innerHTML = `#${state.expenses}`;

  var transactionEl, containerEl, amountEL, btnEl, item;

  for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];
    transactionEl = document.createElement("li");

    transactionEl.append(item.name);
    transactionsEl.appendChild(transactionEl);

    containerEl = document.createElement("div");
    amountEL = document.createElement("span");

    if (item.type === "income") {
      amountEL.classList.add("income-amt");
    } else if (item.type === "expense") {
      amountEL.classList.add("expense-amt");
    }

    amountEL.innerHTML = `#${item.amount}`;
    containerEl.appendChild(amountEL);
    btnEl = document.createElement("img");
    btnEl.src = "cancel.svg";

    containerEl.appendChild(btnEl);
    transactionEl.appendChild(containerEl);
  }
}
init();
