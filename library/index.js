console.log('Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n')

const menuList = document.querySelector('.navigation');
const burgerOpen = document.querySelector('.open_burger_menu');
const burgerBtn = document.querySelector('.burger_menu');
const burgerClose = document.querySelector('.open_burger_open');
const wrapSlider = document.querySelector('.caruselAbout');
const PAGIN = document.querySelectorAll('.pagination');
const CARUSPAGIN = document.querySelector('.carusel_pagination');
const FORM_BTN = document.querySelector('.favForms');
const RADIO_BTN = document.querySelectorAll('.name_radiobtn');
const FAV_BOOK = document.querySelectorAll('.present_book');








burgerBtn.addEventListener('click', wihtClick);
function wihtClick(even) {
    burgerBtn.classList.toggle('burger_menu_click');

    // menuList.classList.toggle('open__menu');
    addStyle(menuList);
    visibleElem(menuList);
    console.log(menuList.style.display)
    return even;
}
function addStyle (element) {
    // element.style.display == 'flex'? element.style.display = 'none': element.style.display = 'flex';
    element.style.opacity == 1 ? element.style.opacity = 0 : element.style.opacity = 1;
    return element;
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
//FORM FOR BTN SESIONS TI FAVORITES
FORM_BTN.addEventListener('click', clickForm);
function clickForm(elem) {
    if (elem.target === RADIO_BTN[0]) {
        for ( let i = 0; i in FAV_BOOK; i++) {
            if( i <= 4) {
                FAV_BOOK[i].style.display = 'none'
            } else {
                FAV_BOOK.classList.toggle('dispNone')
            }
        }
    }
}