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

function createBoxes(amount) {
  refs.amountOfElemets.value === amount;

  const newElement = document.createElement('div');

  newElement.style.width = '30px';
  newElement.style.height = '30px';
  newElement.style.backgroungColor = getRandomHexColor();
  refs.containerForElements.insertAdjacentHTML('beforeend', newElement);
  console.log(refs.containerForElements);
}
