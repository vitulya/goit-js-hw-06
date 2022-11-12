const form = document.querySelector('.login-form');
const button = document.querySelector('[type="submit"]');
// console.log(form.elements.email)
//   console.log(form.elements.password)


button.addEventListener('click', function (event) {
    event.preventDefault();
    const { elements: { email, password } } = form;

    console.log(email);
    
    if (email.value === '' || password.value === '') {
       alert ('Всі поля повинні бути заповнені') 
    }

    const user = {
        [email.name]: email.value,
        [password.name]: password.value,
    }

    console.log(user);

    form.reset();
})

