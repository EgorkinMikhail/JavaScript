'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "0");
    time = prompt("Введите дату в формате YYYY-MM-DD", "1900-01-01");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "0");
    }
}

// let money = +prompt("Ваш бюджет на месяц", "0");
// let time = prompt("Введите дату в формате YYYY-MM-DD", "1900-01-01");

start();

let appData = {
    bugetInMonth: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

//let itemOfExpence = prompt("Введите обязательную статью расходов в этом месяце",''),
//    itemSpent     = prompt("Во сколько обойдется?",'');
//appData.expenses.itemOfExpence = itemSpent;

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let itemOfExpence = prompt("Введите обязательную статью расходов в этом месяце",''),
            itemSpent     = +prompt("Во сколько обойдется?",'');
        
        if (typeof(itemOfExpence)==='string' && typeof(itemOfExpence) != null && typeof(itemSpent) != null
            && itemOfExpence != '' && itemSpent != '' && itemOfExpence.length < 50 && itemSpent != NaN ) {
    
            appData.expenses[itemOfExpence] = itemSpent;
        }
        else {
            alert("Error! One of input values are wrong, please, repeat enter");
            i--;
        }
    
    }
}

// for (let i = 0; i < 2; i++) {
//     let itemOfExpence = prompt("Введите обязательную статью расходов в этом месяце",''),
//         itemSpent     = +prompt("Во сколько обойдется?",'');
    
//     if (typeof(itemOfExpence)==='string' && typeof(itemOfExpence) != null && typeof(itemSpent) != null
//         && itemOfExpence != '' && itemSpent != '' && itemOfExpence.length < 50 && itemSpent != NaN ) {

//         appData.expenses[itemOfExpence] = itemSpent;
//     }
//     else {
//         alert("One of input values are wrong, please, repeat enter");
//         i--;
//     }

// }

//chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.bugetInMonth / 30).toFixed(4);
    alert("Daily buget: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Low salary");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle salary");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Hight salary");
    } else {
        console.log("Error!");
    }
}

//detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Enter sum of savings");
        let percent = +prompt("Enter the percent");

        appData.monthIncome = save/100/12*percent;
        alert("Your monthly income is "+ appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let optionalExpensesValue = prompt("Enter optional expenses:");
        
        if (optionalExpensesValue != null && optionalExpensesValue != "") {
            appData.optionalExpenses[i] = optionalExpensesValue;
        }

    }
}