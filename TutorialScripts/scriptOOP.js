//'use strict';


let soldier =  {
    health : 100,
    armor: 100
};

let John = {
    health : 110
};

John.__proto__ = soldier;

console.log(John);
console.log(John.armor);