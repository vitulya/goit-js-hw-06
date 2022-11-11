function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(3, 0)}`;
}

const button = document.querySelector('.change-color');
const output = document.querySelector('.color')

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  output.textContent = color;
  document.body.style.backgroundColor = color;
});



