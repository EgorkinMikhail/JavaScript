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

function testCall(messageTest1, callback) {
    console.log(messageTest1);
    callback();
}

function doTestCall() {
    console.log("This is true");
}

testCall("Testing", doTestCall);


let options = {
    height:1024,
    wight:2048,
    name: "test 3"
};

options.fill = true;

delete options.fill;

options.color = {
    border : "red",
    line : "green",
    bg : "white"
};

console.log(options);

for (let key in options) {
    console.log('property ' + key + ' = ' + options[key]);
};