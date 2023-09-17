// Task: При натисканні на кнопку:

// Отримати заголовок першого рівня
//   і встановити для нього інший колір тла.
// * Виставити для заголовків другого рівня розмір шрифта 20px і їх колір.

// Встановити src i alt, розміри для головного зображення.
// * Встановити src i alt, розміри для зображень в кожному атіклі.

// 1 Отримати посилання на кнопку
// 2 Задати функцію обробник і навісити її
//   як обробник події на click
// 3 Прописати функціонал цього обробника
//   Отримати посилання на h1
//   встановити для h1 колір тла
//   ...

// 1
const btn = document.querySelector('button');
// 2
function clickHandler(e) {
  // 3
  const h1 = document.querySelector('h1');
  h1.setAttribute('style', 'background-color: orange;');

  const img = document.querySelector('.mainImg');
  img.src =
    'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg';
  img.alt = 'cat';
  img.style.width = '300px';
  img.style.height = '100px';
  img.style.objectFit = 'cover';

  const h2s = document.querySelectorAll('h2');
  h2s.forEach(h2 => {
    h2.style.fontSize = '20px';
    h2.style.color = 'green';
    //h2.setAttribute("style", "font-size:20px; color:green;");
  });

  const sectionImgs = document.querySelectorAll('.sectionImage');
  sectionImgs.forEach(img => {
    img.src =
      'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg';
    img.alt = 'cat';
    img.width = 300;
    img.height = 200;
  });
}
btn.addEventListener('click', clickHandler);
