// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function() {
//         console.log('Hello ' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' are go out')
// }

// let ivan = new User('Ivan', 31),
//     kate = new User('Kate', 28);

// console.log(ivan);
// console.log(kate);

// kate.hello();

// ivan.exit();
//'use strict';
function showThis(a, b){
    console.log(this);
    function summa() {
        console.log(this);
        return a + b;
    }
    console.log(summa());
}
 //showThis(4, 5);
 //showThis(5, 5);

 let obj = {
    a: 20,
    b: 30,
    sum: function() {
        console.log(this);
        function Shout() {
            console.log(this);
        }
        Shout();
    }
 }

 //obj.sum();
 
let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
     return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(7));


let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis2() {
        console.log(this);
    }
    showThis2();
});
// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объект
// 3) Конструктов (new) - this = Новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind
// 5) 