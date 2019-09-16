//'use strict';

let btnStart = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItems = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpItems = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

btnStart.addEventListener('click', function() {

	countBtn.disabled = false;
	expensesItemBtn.disabled = false;
	optionalExpBtn.disabled = false;
	checkSavings.disabled = false;

    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");
    money = +prompt("Ваш бюджет на месяц", "0");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "0");
    }
    appData.bugetInMonth = money;
    appData.timeData = time;
    budgetValue.textContent = appData.bugetInMonth.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // Month starts from 0
    dayValue.value = new Date(Date.parse(time)).getDate(); // Days starts from 0;
});

expensesItemBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let itemOfExpence = expensesItems[i].value,
            itemSpent     = expensesItems[++i].value;
        
        if (typeof(itemOfExpence)==='string' && typeof(itemOfExpence) != null && typeof(itemSpent) != null
            && itemOfExpence != '' && itemSpent != '' && itemOfExpence.length < 50 && !isNaN(itemSpent)) {
            console.log("Everything is OK");
            appData.expenses[itemOfExpence] = itemSpent;
            sum += +itemSpent;
            console.log(sum);
        }
        else {
            alert("Error! One of input values are wrong, please, repeat enter");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpItems.length; i++) {

            let optExpensesValue = optionalExpItems[i].value;
            
            if (optExpensesValue != null && optExpensesValue != "") {
                appData.optionalExpenses[i] = optExpensesValue;
                optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ' ;
            } else {
                alert("Error! One of input values are wrong, please, repeat enter");
                i--;
            }
    }
});

countBtn.addEventListener('click', function() {
    if ((appData.bugetInMonth != undefined) && (expensesValue.textContent != undefined)) {
		let a = 0;
		a = +expensesValue.textContent;
        appData.moneyPerDay = ((appData.bugetInMonth - a) / 30).toFixed(2);
        console.log(appData.moneyPerDay);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            console.log("Low salary");
            levelValue.textContent = "Low salary";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Middle salary");
            levelValue.textContent = "Middle salary";
        } else if (appData.moneyPerDay > 2000) {
            console.log("Hight salary");
            levelValue.textContent = "Hight salary";
        } else {
            console.log("Error!");
            levelValue.textContent = "Error!";
        } 
    } else {
        dayBudgetValue.textContent = 'Error!';
    }
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function() {
	appData.savings = appData.savings ? false : true;
	console.log(appData.savings);
});

sumValue.addEventListener('input', function() {
	if (appData.savings) {
		let sum = +sumValue.value;
		let sumPercent = +percentValue.value;

		appData.monthIncome = sum/100/12*sumPercent;
		appData.yearIncome = sum/100*sumPercent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings) {
		let sum = +sumValue.value;
		let sumPercent = +percentValue.value;

		appData.monthIncome = sum/100/12*sumPercent;
		appData.yearIncome = sum/100*sumPercent;

		monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
    bugetInMonth: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
	savings: false
};

function start() {
	if (appData.bugetInMonth) {
		console.log(appData.bugetInMonth);
		countBtn.disabled = false;
		expensesItemBtn.disabled = false;
		optionalExpBtn.disabled = false;
		checkSavings.disabled = false;
	} else {
		console.log('undefined');
		countBtn.disabled = true;
		expensesItemBtn.disabled = true;
		optionalExpBtn.disabled = true;
		checkSavings.disabled = true;
	}
}

start();