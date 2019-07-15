'use strict';
 
var leftBorderWidth = 1;
{
    let second = 2;
}

const pi = 3.14;

console.log(second);
//
var numner = 3;
var string = "HELLO";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
//

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John", 
    age: 25,
    isMerried: false
}

console.log(person.name);
console.log(person["name"]);
//

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[1]);

// alert("Hello world");

// confirm("Are you here?");

// let answer = confirm("Are you here?");
// console.log(answer); // True or False


let answer = prompt("Do you have 18?", "Yes"); // all info are STRING
console.log(answer); // True or False

console.log(typeof(answer));
console.log(typeof(arr));
console.log(typeof(null));
//


console.log(4+" moex");

let a = 10;

a++;
a--;
--a;
++a;

console.log(5%2); // 1

console.log(1==3); // false

console.log("2" == 2); // true
console.log("2" === 2); // false


let isChecked = true,
    isClose   = false;

console.log(isChecked && isClose); // AND
console.log(isChecked || isClose); // OR
// ! - NOT
