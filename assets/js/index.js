// Керування розповсюдженням подій

const body = document.body;
const section = document.querySelector('section');
const button = document.querySelector('button');

function btnClickHandler(e) {
  console.log('this :>> ', this);
  console.log('e.target :>> ', e.target);
  console.log('e.currentTarget :>> ', e.currentTarget);

  // звернення до об'єкту, на якому відбулася подія
  this.style.backgroundColor = 'yellow';
}

button.addEventListener('click', btnClickHandler);
