const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const searchButton = document.querySelector('#search-button');
const searchCancel = document.querySelector('#search-cancel');
const navbarSearch = document.querySelector('.mobile-nav-search');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

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

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        navbarLinks.classList.remove('active')
    }
});