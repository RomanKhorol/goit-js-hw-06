function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBut: document.querySelector('.change-color'),
  currentColor: document.querySelector('.color'),
  body: document.querySelector('body'),
};

refs.changeColorBut.addEventListener('click', handlerTargetButtonClick);

function handlerTargetButtonClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.currentColor.textContent = refs.body.style.backgroundColor;
}
