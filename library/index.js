console.log('Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n')


const menuList = document.querySelector('.navigation');
const burgerBtn = document.querySelector('.burger_menu');

// burgerBtn.addEventListener('click', () => burgerBtn.classList.toggle('burger_menu_click'));


burgerBtn.addEventListener('click', wihtClick);
function wihtClick(even) {
    burgerBtn.classList.toggle('burger_menu_click');

    // menuList.classList.toggle('open__menu');
    addStyle(menuList);
    console.log(menuList.style.display)
    return even;
}
function addStyle (element) {
    element.style.display == 'flex'? element.style.display = 'none': element.style.display = 'flex';
    return element;
}
