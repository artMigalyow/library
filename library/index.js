console.log('Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n')

const menuList = document.querySelector('.navigation');
const burgerOpen = document.querySelector('.open_burger_menu');
const burgerBtn = document.querySelector('.burger_menu');
const burgerClose = document.querySelector('.open_burger_open');
const wrapSlider = document.querySelector('.caruselAbout');
const PAGIN = document.querySelectorAll('.pagination');
const CARUSPAGIN = document.querySelector('.carusel_pagination');
const RADIO_BTN = document.querySelectorAll('.name_radiobtn');
const ARROW_BTN = document.querySelectorAll(".arrow");
const BLOCK_CARUSEL = document.querySelector('.about_carusel');



// Карусель в виде слайдера в блоке About с фиксированным началом и концом: На большом экране будет доступно 3 перехода. При нажатии на кнопку, происходит плавное замещение одной картинки другой (слепок. Переход из крайнего левого состояния в крайнее правое происходит только через перелистывание всех элементов посередине, и в обратную сторону. Тоже касается и ширины экранов для планшетов, только теперь кнопок будет 5. А в крайних положениях, стрелки соответствующей стороны будут становиться неактивными.

// FOR TABLET media 768px
const tablet = window.matchMedia('(max-width: 1024px) and (min-width: 768px)');



burgerBtn.addEventListener('click', wihtClick);
function wihtClick(even) {
    burgerBtn.classList.toggle('burger_menu_click');

    // menuList.classList.toggle('open__menu');
    addStyle(menuList);
    // visibleElem(menuList);
    return even;
}
function addStyle (element) {
    element.style.opacity == 1 ? element.style.opacity = 0 : element.style.opacity = 1;
    element.style.display == 'flex' ? element.style.display = 'none': element.style.display = 'flex';
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
    return event;
}


// 'Слайдер" в виде затемнения/проявления (fade in / fade out) в блоке Favorites: все 4 карточки с книгами будут плавно затухать, а затем плавно появляться следующие. Анимация может быть прервана следующим нажатием на кнопку выбора поры года. Также допускается реализация данного пункта табами.
//FAVORITES
const INPUT_SEASON = document.querySelectorAll('.real_radiobtn');
const BOOKS = document.querySelectorAll('.present_book');
const FORM_BTN = document.querySelector('.favForms');
const inptBtn = document.querySelectorAll('.real_radiobtn')

const  winter = []
const  spring = []
const  summer = []
const  autumn = []
BOOKS.forEach ( function (elem,index){
    if (index <=3) {
        winter.push(elem)
    } else if (index > 3 && index<=7) {
        spring.push(elem)

    } else if (index > 7 && index<=11) {
        summer.push(elem)

    }else if (index > 11 && index<=15) {
        autumn.push(elem)
    }
})


let bookStyle = document.querySelector('.present_book')
INPUT_SEASON.forEach(input => input.addEventListener('change', (elem) => {
    if (elem.target === INPUT_SEASON[0]){
        BOOKS.forEach(elem => {
            elem.style.animation = 'fadeOut 5s';
            elem.style.display = 'none';

        })
        winter.forEach(elem => {
            elem.style.animation = 'fadeIn 4s';
            elem.style.display = 'flex';
            elem.style.opacity = '1';
            elem.style.visibility = 'visible';
        })

    }else if (elem.target===INPUT_SEASON[1]){
        BOOKS.forEach(elem => {
            elem.style.animation = 'fadeOut 5s';
            elem.style.display = 'none';

        })
        spring.forEach(elem => {
            elem.style.animation = 'fadeIn 4s';
            elem.style.display = 'flex';
            elem.style.opacity = '1';
            elem.style.visibility = 'visible';
        })
    }else if (elem.target===INPUT_SEASON[2]){
        BOOKS.forEach(elem => {
            elem.style.animation = 'fadeOut 5s';
            elem.style.display = 'none';

        })
        summer.forEach(elem => {
            elem.style.animation = 'fadeIn 4s';
            elem.style.display = 'flex';
            elem.style.opacity = '1';
            elem.style.visibility = 'visible';

        })
    }else if (elem.target===INPUT_SEASON[3]) {
        BOOKS.forEach(elem => {
            elem.style.animation = 'fadeOut 5s';
            elem.style.display = 'none';

        })
        autumn.forEach(elem => {
            console.log('yes')
            elem.style.animation = 'fadeIn 4s';
            elem.style.display = 'flex';
            elem.style.opacity = '1';
            elem.style.visibility = 'visible';
        })
    }
}));


                     // USER POSSITION TO REGISTER//

const BTN_PROF = document.querySelector('.prof');
const MODAL = document.querySelector('.modal');
const dropProf = document.querySelector('.drop_menuProf');
const spanDrop = dropProf.getElementsByTagName('span');
const winReg = document.querySelector('.modal_reg');
const winLog = document.querySelector('.modal_lg')
const btnClsModal = document.querySelectorAll('.btn_close');
const getBtn = document.querySelectorAll('.btn_get');


// Digital Library Cards //
getBtn.forEach(elem => elem.addEventListener('click', (event) => {
    if (event.target === getBtn[0]) {
        MODAL.children[0].style.display = 'none'
        MODAL.style.display = 'flex';
        winReg.style.display = 'flex';
    }else if (event.target === getBtn[1]) {
        MODAL.children[1].style.display = 'none'
        MODAL.style.display = 'flex';
        winLog.style.display = 'flex';

    }
}))

BTN_PROF.addEventListener('click', (event) => {
    dropProf.classList.toggle('leaveDrop');
})
dropProf.addEventListener('click', (span) => {
    if (span.target === spanDrop[2]) {
        dropProf.classList.toggle('leaveDrop');
        MODAL.style.display = 'flex';
        winReg.style.display = 'flex';
    } else if (span.target === spanDrop[1]) {
        dropProf.classList.toggle('leaveDrop');
        MODAL.style.display = 'flex';
        winLog.style.display = 'flex';


    }
})
btnClsModal.forEach(btnCls => btnCls.addEventListener('click', ClsModal));
function ClsModal(elem) {
    return MODAL.style.display = 'none';
};


//----------Этап 2: Пользователь на этапе регистрации----------//



