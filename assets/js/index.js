// Атрибути

// Через властивості
const p1 = document.querySelector('#p1');

// атрибути елементів - це властивості відповідних об'єктів
console.log(p1.title);
// вивести id у p1
console.log(p1.id);

p1.title = 'New title';
// булевські атрибути
// p1.hidden = true;

p1.style.color = 'red';
p1.style.backgroundColor = 'orange';

// Через методи
const p2 = document.querySelector('#p2');
p2.setAttribute('title', 'Title of p2'); // <p id="p2" title="Title of p2"
p2.setAttribute('style', 'font-size: 10px; color: yellow;'); // style="font-size: 10px; color: yellow;"
// p2.setAttribute('hidden', 'hidden'); // <p hidden ...

console.log(p2.getAttribute('style'));

// Задати для body колір тла на вибір

// document.querySelector('body').style.backgroundColor = 'green';

// const body = document.querySelector('body');
// body.style.backgroundColor = 'green';

document.body.setAttribute('style', 'background-color: green;');

// зміна контенту в елементі
p2.textContent = 'New content';

// Задати атрибути зображення по об'єкту
const imgAttr = {
  src: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg',
  alt: 'cat',
};

const imgEl = document.querySelector('img');

imgEl.src = imgAttr.src;
imgEl.alt = imgAttr.alt;
// задати розміри зображенню
// imgEl.setAttribute('width', '400');
imgEl.setAttribute('style', 'width: 400px;');
