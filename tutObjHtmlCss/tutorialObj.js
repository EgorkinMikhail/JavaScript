let box = document.getElementById('box');

let btn = document.getElementsByTagName('button'),
    crcl = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);

// console.log(btn);
// console.log(btn[0]);

// console.log(crcl);
// console.log(crcl[2]);

// console.log(heart);
// console.log(heart[1]);

// console.log(oneHeart);

box.style.backgroundColor = 'purple';

btn[1].style.borderRadius = '100%';

crcl[0].style.backgroundColor = 'red';
crcl[1].style.backgroundColor = 'yellow';
crcl[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// };

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'lightgreen';
});

let div = document.createElement('div'),
    text = document.createTextNode('I was here');

console.log(div);
console.log(text);

div.classList.add('black');

document.body.appendChild(div);

console.log(div);

//wrapper.appendChild(div);

//div.innerHTML = '<h1>Hello world!</h1>';
div.textContent = 'Hello world!';


document.body.insertBefore(div, crcl[0]);

document.body.removeChild(crcl[1]);

wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], crcl[1]);


///

let btn1 = document.getElementsByTagName('button')[0];
console.log(btn1);
console.log(oneHeart);

function myAnimation() {
    let position = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            oneHeart.style.top = position + 'px';
            oneHeart.style.left = position + 'px';
            console.log(position);
        }
    }

}

div.addEventListener('click', myAnimation);

// btn.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log('1st variant');
//     }

//     if (event.target && event.target.matches('button.first')) {
//         console.log('2nd variant');
//     }
// });