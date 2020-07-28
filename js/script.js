const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const searchButton = document.querySelector('#search-button');
const searchCancel = document.querySelector('#search-cancel');
const navbarSearch = document.querySelector('.mobile-nav-search');
const navAccount = document.querySelector('#nav-account');
const loginMenu = document.querySelector('.login-menu');
const cancelButton = document.querySelector('.cancel-button');
const viewportHeight = window.innerHeight;
const body = document.querySelector('body');

body.style.height = viewportHeight;


//mobilvy kontoknapp
navAccount.addEventListener('click', () => {
    loginMenu.classList.add('active')
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
});

searchCancel.addEventListener('click', () => {
    navbarSearch.classList.remove('active');
    navbarSearch.classList.remove('transition');
});