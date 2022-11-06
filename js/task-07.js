const refs = {
  inputSizeController: document.querySelector('#font-size-control'),
  currenText: document.querySelector('#text'),
};

refs.inputSizeController.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.currenText.style.fontSize = event.currentTarget.value + 'px';
}
