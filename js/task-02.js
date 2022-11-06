const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const el = ingredients.map(ingregient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingregient;

  return liEl;
});
const ulEl = document.querySelector('#ingredients');
ulEl.style.listStyle = 'none';
ulEl.append(...el);
console.log(ulEl);
