const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const itemListEl = document.createElement('li');
  itemListEl.textContent = option;
  // console.log(option);
  itemListEl.classList.add('item');

  return itemListEl;
});

ingredientsEl.append(...elements);
