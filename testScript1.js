'use strict';

let money = +prompt("Ваш бюджет на месяц", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1900-01-01");

let appData = {
    bugetInMonth: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

//let itemOfExpence = prompt("Введите обязательную статью расходов в этом месяце",''),
//    itemSpent     = prompt("Во сколько обойдется?",'');
//appData.expenses.itemOfExpence = itemSpent;

for (let i = 0; i < 2; i++) {
    let itemOfExpence = prompt("Введите обязательную статью расходов в этом месяце",''),
        itemSpent     = +prompt("Во сколько обойдется?",'');
    
    if (typeof(itemOfExpence)==='string' && typeof(itemOfExpence) != null && typeof(itemSpent) != null
        && itemOfExpence != '' && itemSpent != '' && itemOfExpence.length < 50 && itemSpent != NaN ) {

        appData.expenses[itemOfExpence] = itemSpent;
    }
    else {
        alert("One of input values are wrong, please, repeat enter");
        i--;
    }

};

appData.moneyPerDay = appData.bugetInMonth / 30;

alert("Daily buget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Low salary");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle salary");
} else if (appData.moneyPerDay > 2000) {
    console.log("Hight salary");
} else {
    console.log("Error!");
}

