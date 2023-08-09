console.log('Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n')


const burgerOpen = document.querySelector('.open_burger_menu');
const burgerBtn = document.querySelector('.header_humb');
const burgerClose = document.querySelector('.open_burger_open');

burgerBtn.addEventListener('click',handleclick);
function handleclick (even) {
    burgerOpen.classList.toggle('openbur');

    return
}
burgerClose.addEventListener('click', removeclick);
function removeclick(even) {
    burgerOpen.classList.toggle('openbur');

    return


}
