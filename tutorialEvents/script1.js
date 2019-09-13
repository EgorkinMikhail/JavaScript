// <button onclick = "alert('Bla bla bla')" id="btn">Нажми меня</button>

let btn = document.querySelectorAll("button"),
	wrap = document.querySelector(".wrapper"),
	link = document.querySelector('a');
// btn[0].onclick = function() {
//     alert('You are click on first button 1');
// };

// btn[0].onclick = function() {
//     alert('You are click on first button 2');
// };

btn[0].addEventListener('click', function(event) {
    // console.log(event);
    // let target = event.target;
    // target.style.display = 'none';
    console.log('1 Event is happened: '+event.type + ' on element ' +event.target);
});


// btn[0].addEventListener('click', function() {
//     alert('You are click on first button 2');
// });

// btn[0].addEventListener('mouseenter', function(){
//     alert('Your mouse on first button');
// });

 wrap.addEventListener('click', function() {
    console.log('2 Event is happened: '+event.type + ' on element ' +event.target);
 });
//
 link.addEventListener('click', function(event) {
	 event.preventDefault();
	console.log('2 Event is happened: '+event.type + ' on element ' +event.target);
 });

 btn.forEach(function(item) {
	 item.addEventListener('mouseleave', function() {
		 console.log("We are out!");
	 });
 });