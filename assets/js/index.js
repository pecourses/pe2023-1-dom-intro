'use strict';

// start запустити накопичення мс
// reset скинути накопичені мс
// stop зупинити накопичення мс

let time = new Date(0);
let intervalId = null;

const timeEl = document.querySelector('.time');
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
  '.btn-container > button'
);

startBtn.onclick = startBtnHandler;
stopBtn.onclick = stopBtnHandler;
resetBtn.onclick = resetBtnHandler;

updateTime(time);

function startBtnHandler() {
  const DELAY = 100;
  function tick() {
    // беремо стару кількість мс, додаємо DELAY і встановлюємо як нову кількість мс
    time.setMilliseconds(time.getMilliseconds() + DELAY);
    updateTime(time);
  }
  if (!intervalId) {
    intervalId = setInterval(tick, DELAY);
  }
}

function stopBtnHandler() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetBtnHandler() {
  time = new Date(0);
  updateTime(time);
}

function updateTime(time) {
  timeEl.textContent = `
  ${formatMinutesOrSeconds(time.getMinutes())}
  :
  ${formatMinutesOrSeconds(time.getSeconds())}
  .
  ${formatMilliseconds(time.getMilliseconds())}
  `;
}

// форматуємо двозначні числа: якщо число з однієї цифри,
// то додаємо попереду 0: 5 => 05
function formatMinutesOrSeconds(m) {
  return m < 10 ? `0${m}` : m;
}

// форматуємо тризначні числа:
// якщо число з однієї цифри, то додаємо попереду 00:  5 => 005
// якщо число з двох цифр, то додаємо попереду 0    : 55 => 055
function formatMilliseconds(ms) {
  return ms < 100 ? (ms < 10 ? `00${ms}` : `0${ms}`) : ms;
}
