'use strict';

let arr = [1, 2, 3, 4, 5];

arr.pop(); // delete
arr.push("5"); // add

arr.shift(); // delete first
arr.unshift("1"); // add first

console.log(arr);

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (mass: " + mass + ') ')
});

let mass = [1,2,4,5,6,7,8,9,0];

for (let key of mass) {
    console.log(key);
};

let ans = prompt(" "," " ),
    arr1 = [];

arr1 = ans.split(',');

console.log(arr1);

let arr2 = [1,54, 14], 
    i = arr2.join(', ');

console.log(i);
console.log(arr2);

function compareAB(a,b) {
    return a-b;
}

i = arr2.sort(compareAB);
console.log(i);
