//Scripts encargado de la interactividad
//Pantallas
const medium = window.matchMedia('screen and (max-width:800px)');

const menuUser = document.querySelector('.account');
const buttonUser = document.querySelector("#menu-user");

function validation(event) {
    if (event.matches) {
        buttonUser.addEventListener('click', hideShow);
    }
    else {
        buttonUser.removeEventListener('click', hideShow);
    }
}

function hideShow() {
    console.log(menuUser);
    if (menuUser.classList.contains('is-active')) {
        menuUser.classList.remove('is-active');
    }
    else {
        menuUser.classList.add('is-active');
    }
}
medium.addListener(validation);
validation(medium);

