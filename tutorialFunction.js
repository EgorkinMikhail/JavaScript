//'use strict';
// function showFirstMessage (text) {
//     alert(text);
// }

// showFirstMessage("text");

function mult(a, b) {
    return a * b;
}

console.log(mult(2,12));
console.log(mult(3,12));
console.log(mult(3,9));

function returnOne () {
    let num = 50;
    return num;
}

let anotherNum = returnOne();
console.log(anotherNum);

// let calc = function(a, b) {
//     return a + b;
// }

// ES6
let calc = (c,d) => c+d

console.log(calc(9, 555));

let str = "programmJS";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));