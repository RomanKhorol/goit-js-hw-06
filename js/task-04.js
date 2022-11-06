const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueCount: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', degreaceAmount);
refs.incrementBtn.addEventListener('click', increaceAmount);

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

function increaceAmount() {
  counterValue.increment();
  return (refs.valueCount.textContent = counterValue.value);
}
function degreaceAmount() {
  counterValue.decrement();
  return (refs.valueCount.textContent = counterValue.value);
}
