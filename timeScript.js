//setTimeout(func, delay);
let timerId = setTimeout(sayHello, 3000);

clearTimeout(timerId);

let intervalId = setInterval(sayHello, 10000);

clearInterval(intervalId);

function sayHello() {
    console.log('Hello world!');
}


// recurcive

let timerId2 = setTimeout(function log() {
    console.log('Helo!');

    setTimeout(log, 2000);
});

clearTimeout(timerId2);