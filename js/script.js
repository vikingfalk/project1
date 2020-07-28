const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const searchButton = document.querySelector('#search-button');
const searchCancel = document.querySelector('#search-cancel');
const navbarSearch = document.querySelector('.mobile-nav-search');
const navAccount = document.querySelector('#nav-account');
const loginMenu = document.querySelector('.login-menu');
const cancelButton = document.querySelector('.cancel-button');
const html = document.querySelector('html');
const body = document.querySelector('body');
const viewportHeight = html.clientHeight;
const user = navigator.userAgent.toLowerCase();
const isAndroid = user.indexOf("android") > -1 && user.indexOf("mobile") > -1;


//fixa bakgrunden för android
if (isAndroid) {
    document.querySelector('body').style.backgroundSize = "auto " + viewportHeight + "px";
}


//mobilvy kontoknapp
navAccount.addEventListener('click', () => {
    loginMenu.classList.add('active')
    navbarLinks.classList.remove('active')
});

cancelButton.addEventListener('click', () => {
    loginMenu.classList.remove('active')
});


//mobilmenyknappen
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        navbarLinks.classList.remove('active')
    }
});


//nav söken
searchButton.addEventListener('click', () => {
    navbarSearch.classList.toggle('active');
    document.querySelector('.mobile-nav-search input').focus();
});

searchButton.addEventListener('click', () => {
    navbarSearch.classList.toggle('transition');
    navbarLinks.classList.remove('active')
});

searchCancel.addEventListener('click', () => {
    navbarSearch.classList.remove('active');
    navbarSearch.classList.remove('transition');
});