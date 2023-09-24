'use strict';

// Користувацькі атрибути / data-*

const btns = document.querySelectorAll('button');

// data-host => dataset.host
function btnClickHandler(e) {
  console.log(e.target.dataset.host);
}

btns.forEach(b => (b.onclick = btnClickHandler));

// data-userName => dataset.username
// data-user-name => dataset.userName
console.log(btns[0].dataset.username);
console.log(btns[1].dataset.userName);

// Task: в контейнер помістити 4 кнопки
// в залежності від того, на яку натиснули,
// змінювати bg-колір кнопки або контейнера або body

const colorBtns = document.querySelectorAll('div > button');

function changeColor(e) {
  document.body.style.backgroundColor = e.target.dataset.color;
}

colorBtns.forEach(b => (b.onclick = changeColor));
