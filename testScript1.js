'use strict';

let money = prompt("Ваш бюджет на месяц", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1900-01-01");

let appData = {
    bugetInMonth: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let itemOfExpence = prompt("Введите обязательную статью расходов в этом месяце","1");
let itemSpent = prompt("Во сколько обойдется?","1");

appData.expenses = {itemOfExpence: itemSpent};

alert(appData.bugetInMonth/30);

