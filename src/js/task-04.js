const decrementButton = document.querySelector('[data-action = "decrement"]');
const value = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action = "increment"]');


let counterValue = 0;

    decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;    
    });
     

    incrementButton.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
    });
