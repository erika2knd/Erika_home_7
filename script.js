//1 задание//

let balance = 100;
let message = document.getElementById("balanceMessage");
if (balance > 0) {
    console.log("You have a positive balance.");
    message.className = "positive"
} else if (balance === 0) {
    console.log("Your balance is zero.");
    message.className = "zero"
} else {
    console.log("Your balance is negative.");
    message.className = "negative"
}

//2 задание//

let spendScore = 100;
if (spendScore >= 90) {
    console.log("Вы-мастер экономии");
} else if (spendScore >= 70) {
    console.log("Хороший уровень экономии");
} else if (spendScore >= 50) {
    console.log("Средний уровень экономии");
}

//3 задание//

let viewMode = "detailed";
let viewDescription = (viewMode === "detailed") ? "Подробный режим" : "Компактный режим";
console.log(viewDescription);

let viewMode2 = "compact";
let viewDescription2 = (viewMode2 === "detailed") ? "Подробный режим" : "Компактный режим";
console.log(viewDescription2);

//4 задание//

const transactions = [
    {description: "Зарплата", amount: 50000},
    {description: "Продукты", amount: -3000},
    {description: "Кафе", amount: -500}
];
for (let i =0; i < transactions.length; i++) {
    console.log(transactions[i].description + ": " + transactions[i].amount);
}

//5 задание//

const categories = ["Еда", "Транспорт", "Развлечения"];
for(categories of categories) {
    console.log(categories);
}

//6 задание//

const transactions2 = [
    {description: "Зарплата", amount: 50000},
    {description: "Аренда жилья", amount: -15000},
    {description: "Продукты", amount: -3000},
    {description: "Продажа старой мебели", amount: 2000}
];
transactions2.forEach((transaction =>{
    if (transaction.amount > 0) {
    console.log("Доход: [transaction.description], сумма:[transaction.amount]");
} else if (transaction.amount < 0) {
    console.log("Расход: [transaction.description], сумма:[transaction.amount]");
}
}))

//7 задание//

function greetUser(name) {
    console.log("Здравствуйте," + name + "! Добро пожаловать в ваш финансовый кабинет.")
}
const username = "Эрика";
greetUser(username);

//8 задание//
const calculateFee = function(amount) {return amount * 0.02;};
const colculateFee = (amount) => amount * 0.02;

const amount = 1000;
console.log(calculateFee(amount));//20

//9 задание//
function getMinMaxExpense(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return { min, max};
}
const expenses = [-500, -2000, -100];

const result = getMinMaxExpense(expenses);
console.log(result);//min:-2000, max:-100


//10 задание//

let currentCurrency = "EUR";
function changeCurrency() {
    let currentCurrency = "USD";
    console.log(currentCurrency);
}

//11 задание//

function outer() {
    let exchangeRate = 73.5;
    function inner() {
        console.log(exchangeRate);
    }

    inner();
}
outer();



//12 задание//

function calculatePrice(price, hasPVN) {
    const pvnRate = 0.21;

    if(hasPVN) {
        return price / (1 + pvnRate);
    } else {
        return price * (1 + pvnRate);
    }
}

console.log(calculatePrice(121,true));
console.log(calculatePrice(100, false));









