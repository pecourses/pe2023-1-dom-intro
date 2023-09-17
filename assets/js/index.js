// Обробка подій

const btn = document.getElementById('clickBtn');

console.log('btn :>> ', btn);
console.dir(btn);

const clickHandler = function (event) {
  console.log('Btn was clicked');
};

btn.onclick = clickHandler;

btn.onclick = null;
//------------------------------------------------

const loginBtn = document.getElementById('loginBtn');

function loginBtnHandler(e) {
  alert('Log in in process');
}

loginBtn.addEventListener('click', loginBtnHandler);

loginBtn.removeEventListener('click', loginBtnHandler);

//---------------------------------------------------
// Виводити "Click me!", коли наводимо курсором миші на loginBtn

function loginMouseMoveHandler(e) {
  console.log('Click me!');
}

loginBtn.addEventListener('mousemove', loginMouseMoveHandler);

// Додати кнопку і при натисканні на неї виводити "Hello world!"
const greetingsBtn = document.getElementById('greetingsBtn');
function greetingsBtnHandler(e) {
  alert('Hello world');
}
greetingsBtn.addEventListener('click', greetingsBtnHandler);
