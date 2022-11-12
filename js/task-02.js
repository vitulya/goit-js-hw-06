const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

function createItemIngredients(array) {

    const itemsArr = array.map(element => {
    const item = document.createElement('li');
    item.textContent = element;
    item.classList.add('item');
    
      return item;
    })
    
  ingredientsList.append(...itemsArr);
}
// createItemIngredients(ingredients)
createItemIngredients(ingredients);