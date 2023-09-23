'use strict';

const section = document.createElement('section');

const divRoot = document.querySelector('#root');

// додавання дочірнього ел-та append/prepend
divRoot.append(section);
section.textContent = 'Lorem ipsum';
section.style.backgroundColor = 'grey';

const article = document.createElement('article');
divRoot.prepend(article);
article.textContent = 'article is the first child';

// додавання сіблінгів - before/after

const btn = document.createElement('button');

section.after(btn);
btn.textContent = 'new btn';

// видалення
const divForRemove = document.querySelector('.removable');

divForRemove.addEventListener('mouseenter', function () {
  this.remove();
});
