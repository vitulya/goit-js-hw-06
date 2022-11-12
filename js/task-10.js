function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const collection = document.querySelector('#boxes');
 
let arrElem = [];
input.value = 1;

createBtn.addEventListener('click', (event) => {
  event.preventDefault();

  arrElem = createBoxes(input.value);
  collection.append(...arrElem);
})

const arr = [];
let widthEl = '30px';
let heightEl = '30px';

function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
    const elem = document.createElement("div");
    
    const width = elem.style.width = widthEl;
    elem.style.height = heightEl;

    widthEl = `${parseInt(widthEl) + 10}px`;
    heightEl = `${parseInt(heightEl) + 10}px`;
   
    const color = getRandomHexColor();
    elem.style.backgroundColor = color;
    elem.style.border = '1px solid black';

    arr.push(elem);
  }

  return arr;
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
})

function destroyBoxes() {
  collection.innerHTML = '';
  arrElem.splice(0, arrElem.length);
  input.value = 1;
  widthEl = '30px';
  heightEl = '30px';
}