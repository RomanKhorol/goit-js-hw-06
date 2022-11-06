function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  amountOfElemets: document.querySelector('#controls > input'),
  createBut: document.querySelector('#controls > button[data-create]'),
  destroyeBut: document.querySelector('#controls > button[data-destroy]'),
  containerForElements: document.querySelector('#boxes'),
};

refs.createBut.addEventListener('click', createBoxes);
refs.destroyeBut.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount === refs.amountOfElemets.value;
}
