console.log('Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n')


const burgerOpen = document.querySelector('.open_burger_menu');
const burgerBtn = document.querySelector('.header_humb');
const burgerClose = document.querySelector('.open_burger_open');
const wrapSlider = document.querySelector('.caruselAbout');
const PAGIN = document.querySelectorAll('.pagination');
const CARUSPAGIN = document.querySelector('.carusel_pagination');








burgerBtn.addEventListener('click',handleclick);
function handleclick (event) {
    // console.log (burgerOpen.classList);
    burgerOpen.classList.toggle('openbur');
}
burgerClose.addEventListener('click', removeclick);
function removeclick(event) {
    burgerOpen.classList.toggle('openbur');
}
// carusel-about-tap
CARUSPAGIN.addEventListener('click', clickPag);
function clickPag(event) {
    PAGIN.forEach((elem) => {elem.style.background = '#0C0C0E'})
    event.target.style.background = '#BB945F';
    if (event.target === PAGIN[1]) {
        // console.log('yes')
        wrapSlider.style.left = '-1425px';
        wrapSlider.style.transition = '.5s ease-out'
    } else if (event.target === PAGIN[2]) {
        wrapSlider.style.left = '-1900px';
        wrapSlider.style.transition = '.5s ease-out';

    }else if (event.target === PAGIN[0]) {
        wrapSlider.style.left = '-950px';
        wrapSlider.style.transition = '.5s ease-out'

    }
    return;
}
