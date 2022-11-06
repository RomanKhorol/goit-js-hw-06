const refs = {
  inputName: document.querySelector('#name-input'),
  textShown: document.querySelector('#name-output'),
};

const onInputChange = event => {
  refs.inputName.value.length === 0
    ? (refs.textShown.textContent = 'Anonymous')
    : (refs.textShown.textContent = event.currentTarget.value);
};

refs.inputName.addEventListener('input', onInputChange);
