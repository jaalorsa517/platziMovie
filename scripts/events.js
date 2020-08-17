//Scripts encargado de la interactividad
//Pantallas
const small = window.matchMedia('screen and (max-width:800px)');


const menuUser = document.querySelector('.account');
const buttonUser = document.querySelector("#menu-user");


// Validación menu-user
function validationMenuUser(event) {
    if (event.matches) {
        buttonUser.addEventListener('click', hideShow);
    }
    else {
        buttonUser.removeEventListener('click', hideShow);
    }
}

function hideShow() {
    if (menuUser.classList.contains('is-active')) {
        menuUser.classList.remove('is-active');
    }
    else {
        menuUser.classList.add('is-active');
    }
}
small.addListener(validationMenuUser);
validationMenuUser(small);

//validacion textFieldFind
const miniSmall = window.matchMedia('screen and (min-width:320px) and (max-width:650px)');
const findText = document.querySelector('#findText');
const findIcon = document.querySelector('.find-icon');
const title = document.querySelector('.title-container');

function validationFind(event) {
    if (event.matches) {
        findIcon.addEventListener('click', onTextFind);
    }
    else {
        findIcon.addEventListener('click', onTextFind);
    }
}

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

miniSmall.addListener(validationFind);
validationFind(miniSmall);