console.log('Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n')


const burgerOpen = document.querySelector('.open_burger_menu');
const burgerBtn = document.querySelector('.header_humb');
const burgerClose = document.querySelector('.open_burger_open');

burgerBtn.addEventListener('click',handleclick);
function handleclick (event) {
    console.log (burgerOpen.classList);
    burgerOpen.classList.toggle('openbur');
}
burgerClose.addEventListener('click', removeclick);
function removeclick(event) {
    burgerOpen.classList.toggle('openbur');
}

