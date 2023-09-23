// View - Spagetti
//      ||
//      \/
// View - ViewModel - Model

// Model - дані + методи роботи з ними
class Counter {
  constructor(counter) {
    this.counter = counter;
  }
  dec() {
    this.counter--;
  }
  inc() {
    this.counter++;
  }
}

// ViewModel

const [decBtn, incBtn] = document.querySelectorAll('.counterBtn');
const counterEl = document.querySelector('#counter');

const count = new Counter(0);

updateView();

function decCount(e) {
  count.dec();
  updateView();
}

decBtn.addEventListener('click', decCount);

function incCount(e) {
  count.inc();
  updateView();
}

incBtn.addEventListener('click', incCount);

function updateView() {
  counterEl.textContent = count.counter;
}
