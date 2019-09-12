// 1 task
let menu = document.getElementsByClassName('menu')[0],
    menuItems = document.getElementsByClassName("menu-item");
menu.insertBefore(menuItems[2], menuItems[1]);

// add 5th element
let menuItem = document.createElement('li');
menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый пункт';
menu.appendChild(menuItem);
console.log(menu);

// 2 task
document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

// 3 task
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';
console.log(title);

// 4 task
let adv = document.getElementsByClassName('adv')[0];
adv.remove();
console.log(adv[0]);

// task 5
let answer = document.getElementById('prompt');
let question = prompt('What do you think about Apple?');
answer.textContent = question;
console.log(answer);