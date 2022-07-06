const category = document.querySelector('#categories');
console.log('Number of categories:', category.children.length);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(item => {
  const titleEl = item.querySelector('h2');
  console.log('Category:', titleEl.textContent);
  const itemListEl = item.querySelectorAll('li');
  console.log('Elements:', itemListEl.length);
});
