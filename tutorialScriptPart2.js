'use strict';

// IF
 
if (2*3 == 6) {
    console.log("Right!")
} else {
    console.log("Not right!")
}

// SWITCH

let num = 50;

if (num < 50) {
    console.log(num + " < 50")
} else if (num > 50) {
    console.log(num + " > 50")
} else {
    console.log(num + " = 50")
}
(num == 50) ? console.log("Right!") : console.log("Not right!");

switch (num) {
    case num < 50: 
        console.log(num + " < 50");
        break;
    case 50:
        console.log(num + " = 50");
        break;
    case num > 50:
        console.log(num + " > 50")
        break;
    default :
        console.log("something wrong here");
        break;
}

// LOOPS
let loop = 50;
while (loop < 55) {
    console.log(loop++);
}

loop = 50
do {
    console.log(loop++);
}
while (loop < 55);

for (let i = 1; i < 8; i++)
{
    if (i==6) {continue;}
    console.log(i);
}
