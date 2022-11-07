const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('All inputs have to be completed');
  } else {
    const userData = { email: mail, pass: password };
    console.log(userData);
    form.reset();
  }
}
