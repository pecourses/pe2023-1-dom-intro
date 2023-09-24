'use strict';

// start запустити накопичення мс
// reset скинути накопичені мс
// stop зупинити накопичення мс

// let time = new Date(0);
let time = 0;
let intervalId = null;

const timeEl = document.querySelector('.time');
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
  '.btn-container > button'
);

function startBtnHandler() {
  function tick() {
    time++;
    updateTime(time);
  }
  if (!intervalId) {
    intervalId = setInterval(tick, 1);
  }
}

startBtn.onclick = startBtnHandler;

function stopBtnHandler() {
  clearInterval(intervalId);
  intervalId = null;
}

stopBtn.onclick = stopBtnHandler;

function resetBtnHandler() {
  time = 0;
  updateTime(time);
}

resetBtn.onclick = resetBtnHandler;

function updateTime(time) {
  timeEl.textContent = time;
}
