const div = document.querySelector('.div');

div.addEventListener('click', function () {
  // this.classList.add('div2');
  // this.classList.remove('div');
  this.classList.toggle('div2');
});

div.style.color = 'red';

// класи - рядок з іменами класів, розділеними пробілами
// div.className = div.className + ' div2';
