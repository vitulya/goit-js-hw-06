const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {

    if (input.value.length != input.dataset.length) {
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
})