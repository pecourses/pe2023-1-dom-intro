const burgerBtn = document.querySelector('.burgerMenuBtn');
const burgerContainer = document.querySelector('.burgerMenuContainer');

function burgerClickHandler(e) {
  burgerContainer.classList.toggle('burgerMenuContainerHide');
  burgerContainer.classList.toggle('burgerMenuContainerActive');
  console.log('btn :>> ');
  e.stopPropagation();
}

burgerBtn.addEventListener('click', burgerClickHandler);

function bodyClickHandler() {
  burgerContainer.classList.add('burgerMenuContainerHide');
  burgerContainer.classList.remove('burgerMenuContainerActive');
  console.log('body :>> ');
}

document.body.addEventListener(
  'click',
  bodyClickHandler /*, { capture: true }*/
);

// body capture -
// btn capture
// btn; X
// body; +
