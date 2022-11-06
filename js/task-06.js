const inputString = document.querySelector('#validation-input');
inputString.addEventListener('blur', onInputBlur);

const validValue = Number(inputString.dataset.length);

function onInputBlur(event) {
  if (event.currentTarget.value.length === validValue) {
    inputString.classList.add('valid');
    inputString.classList.remove('invalid');
  } else {
    inputString.classList.remove('valid');
    inputString.classList.add('invalid');
  }
}
