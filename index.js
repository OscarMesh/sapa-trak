var state = {
  balance: 20000,
  income: 30000,
  expenses: 10000,
  transactions: [

  ],
};

var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#income");
var expenseEl = document.querySelector("#expenses");
var transactionsEl = document.querySelector("#transactions");
var incomeBtnEl = document.querySelector("#add-inc");
var expenseBtnEl = document.querySelector("#add-exp");
var nameEl = document.querySelector("#name");
var priceEl = document.querySelector("#price");

function init() {
  updateState();
  BtnListiners();
}

function BtnListiners() {
  incomeBtnEl.addEventListener("click", onAddIncome);
  expenseBtnEl.addEventListener("click", onAddExpense);
}

function addTransaction(name, price, type) {
  if (name !== "" && price !== "") {
    var transaction = {
      id : uniqueId(),
      name: name,
      amount: parseInt(price),
      type: type,
    };
  } else {
    alert("please enter a valid transaction");
  }

  nameEl.value = "";
  priceEl.value = "";

  state.transactions.push(transaction);

  updateState();
}
function onAddIncome() {
  addTransaction(nameEl.value, priceEl.value, "income");
}

function onAddExpense() {
  addTransaction(nameEl.value, priceEl.value, "expense");
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

  balance = income - expense;

  state.balance = balance;
  state.income = income;
  state.expenses = expense;

  render();
}

function uniqueId() {
  return Math.round(Math.random() * 1000000);
}

function onDeleteClick(e) {
  var id = e.target.getAttribute("data-id");
  var deleteIndex;
  for (var i = 0; i < state.transactions.length; i++) {
    if (state.transactions[i].id === id) {
      deleteIndex = 1;
      break;
    }
    state.transactions.splice(deleteIndex, 1);

    updateState();
  }
}

function render() {
  balanceEl.innerHTML = `#${state.balance}`;
  incomeEl.innerHTML = `#${state.income}`;
  expenseEl.innerHTML = `#${state.expenses}`;

  var transactionEl, containerEl, amountEL, btnEl, item;

  transactionsEl.innerHTML = "";

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
    btnEl.setAttribute("data-id", item.id);

    btnEl.addEventListener("click", onDeleteClick);

    containerEl.appendChild(btnEl);
    transactionEl.appendChild(containerEl);
  }
}
init();
