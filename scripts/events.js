//Scripts encargado de la interactividad
//Pantallas
const small = window.matchMedia('screen and (max-width:800px)');


const menuUser = document.querySelector('.account');
const buttonUser = document.querySelector("#menu-user-rigth");

function hideShow() {
    if (menuUser.classList.contains('is-active')) {
        menuUser.classList.remove('is-active');
    }
    else {
        menuUser.classList.add('is-active');
    }
}
// Validación menu-user
function validationMenuUser(event) {
    if (event.matches) {
        buttonUser.addEventListener('click', hideShow);
    }
    else {
        buttonUser.removeEventListener('click', hideShow);
    }
}

small.addListener(validationMenuUser);
validationMenuUser(small);

//validacion textFieldFind
const miniSmall = window.matchMedia('screen and (min-width:200px) and (max-width:650px)');
const findText = document.querySelector('#findText');
const findIcon = document.querySelector('.find-icon');
const title = document.querySelector('.title-container');
const secondaryButton = document.querySelector('#menu-user-left');
const menuSecond = document.querySelector('#secondary');

function onTextFind() {
    if (findText.classList.contains('is-active')) {
        findText.classList.remove('is-active');
        title.classList.add('is-active');
    }
    else {
        findText.classList.add('is-active');
        title.classList.remove('is-active');
    }
}
function onMenuSecond() {
    if (menuSecond.style.left === "-100vw" || menuSecond.style.left === "") {
        menuSecond.style.left = "0";
    }
    else {
        menuSecond.style.left = "-100vw";
    }
}
function validationFind(event) {
    if (event.matches) {
        findIcon.addEventListener('click', onTextFind);
        secondaryButton.addEventListener('click', onMenuSecond)
    }
    else {
        findIcon.removeEventListener('click', onTextFind);
        secondaryButton.removeEventListener('click', onMenuSecond)
    }
}

miniSmall.addListener(validationFind);
validationFind(miniSmall);