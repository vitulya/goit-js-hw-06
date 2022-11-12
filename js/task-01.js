const categories = document.querySelector('#categories');

function countCategories() {
    const categoriesItem = categories.querySelectorAll('.item');

    console.log('Number of categories:', categoriesItem.length);

    categoriesItem.forEach((elem) => {
        const categoriesNameText = elem.querySelector('h2').textContent;
        const categoriesElemCount = elem.querySelectorAll('li').length;
        console.log('Category:', categoriesNameText);
        console.log('Elements:', categoriesElemCount);
    })
}

countCategories()