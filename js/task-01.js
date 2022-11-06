const cat = document.querySelectorAll('.item');
let numberOfCategories = cat.length;

console.log('number Of Categories:', numberOfCategories);

cat.forEach(el => {
  console.log('Category:', el.querySelector('h2').textContent);
  console.log('Elements:', el.querySelectorAll('li').length);
});
