'use strict';

// setTimeout
// setInterval

function timeoutAction() {
  console.log('Hello');
}

console.log('Before timeout');
const timeoutId = setTimeout(timeoutAction, 1000);
console.log('After timeout');
clearTimeout(timeoutId);

let i = 0;
function intervalHandler() {
  if (i === 5) {
    return clearInterval(intervalId);
  }
  console.log(++i);
}

console.log('Before interval');
const intervalId = setInterval(intervalHandler, 1000);
console.log('After interval');
// clearInterval(intervalId);
//
function deleteBtn() {
  const offerBtn = document.querySelector('button');
  offerBtn.remove();
}

setTimeout(deleteBtn, 5000);

// При натисканні на кнопку перефарбувати її через 2 секунди
// * Після натискання на кнопку змінювати її колір кожні 2 секунди рандомно

const colorBtn = document.querySelector('.color-btn');

function changeColor(e) {
  setTimeout(() => {
    e.target.style.color = 'green';
  }, 2000);
}

colorBtn.onclick = changeColor;
