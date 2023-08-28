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
const ARROW_BTN = document.querySelectorAll(".arrow");
const BLOCK_CARUSEL = document.querySelector('.about_carusel');





// FOR TABLET media 768px
const tablet = window.matchMedia('(max-width: 1024px) and (min-width: 768px)');



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



// CARUSEL ABOUT


CARUSPAGIN.addEventListener('click', clickPag);
function clickPag(event) {
    PAGIN.forEach((elem) => {elem.style.background = '#0C0C0E'})
    event.target.style.background = '#BB945F';

    if (tablet.matches) {
        switch (event.target) {
            case PAGIN[0] :
                wrapSlider.style.left = '-982px';
                wrapSlider.style.transition = '.5s ease-out cubic-bezier(1, 1, 1, 1)';
                break;
            case PAGIN[1] :
                wrapSlider.style.left = '-1514px';
                wrapSlider.style.transition = '.5s ease-out cubic-bezier(1, 1, 1, 1)';
                break;
            case PAGIN[2]:
                wrapSlider.style.left = '-2046px';
                wrapSlider.style.transition = '.5s ease-out cubic-bezier(1, 1, 1, 1)';
                break;
            case PAGIN[3]:
                wrapSlider.style.left = '-2578px';
                wrapSlider.style.transition = '.5s ease-out cubic-bezier(1, 1, 1, 1)';
                break;
            case PAGIN[4]:
                wrapSlider.style.left = '-3110px';
                wrapSlider.style.transition = '.5s ease-out cubic-bezier(1, 1, 1, 1)';
                break;
        }
    }else if (event.target === PAGIN[1]) {
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
//ARROW CLICK
function toLeft(str) {
    str = str.replaceAll('px','');
    return  `${Number(str)+532}px`;
}
function toRight(str) {
    str = str.replaceAll('px','');
    return  `${Number(str)-532}px`;
}
let posSlide = window.getComputedStyle(wrapSlider);
let countClick = 0;

let posCard = ['-982px', '-1514px', '-2046px', '-2578px','-3110px'];
let stackPosCard = ['-982px']

BLOCK_CARUSEL.addEventListener('click', clickArrow);
function clickArrow(event) {

    if ( event.target === ARROW_BTN[0] ) {
        if (posSlide.left === '-982px') {

            ARROW_BTN[0].setAttribute('disabled', 'disabled');
            ARROW_BTN[1].removeAttribute('disabled', 'disabled');

        }else {

            ARROW_BTN.forEach((elem) => {elem.removeAttribute('disabled')})

            PAGIN.forEach((elem) => {elem.style.background = '#0C0C0E'});
            PAGIN[--countClick].style.background = '#BB945F';
            stackPosCard.pop(posCard[countClick])
            wrapSlider.style.left = stackPosCard[stackPosCard.length-1]

        }
    }
    if (event.target === ARROW_BTN[1]) {
        if (posSlide.left === '-3110px'){
            ARROW_BTN[1].setAttribute('disabled', 'disabled');


        }else {

            ARROW_BTN.forEach((elem) => {elem.removeAttribute('disabled')})
            PAGIN.forEach((elem) => {elem.style.background = '#0C0C0E'});
            PAGIN[++countClick].style.background = '#BB945F';

            stackPosCard.push(posCard[countClick]);
            wrapSlider.style.left = stackPosCard[stackPosCard.length-1];


        }
    }
}

