const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let changeColorIntervalId = null;

refs.stopBtn.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorRandomizer = () => {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

const onStartBtnClick = () => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  changeColorIntervalId = setInterval(colorRandomizer, 1000);

};

const onStopBtnClick = () => {
  clearInterval(changeColorIntervalId);
  changeColorIntervalId = null;
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
};

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.stopBtn.addEventListener('click', onStopBtnClick);