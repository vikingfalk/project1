const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');
const searchButton = document.querySelectorAll('.search-button');
const searchCancel = document.querySelector('.search-cancel');
const navbarSearch = document.querySelector('.mobile-nav-search');
const navAccount = document.querySelector('.nav-account');
const loginMenu = document.querySelector('.login-menu');
const cancelButton = document.querySelector('.cancel-button');
const catBtn = document.querySelector('#categories-button');
const brands = document.querySelectorAll('.brand');

//ajax
fetch('../html/landing.txt')
    .then((res) => res.text())
    .then((data) => {
        document.querySelector('#content').innerHTML = data;
    });

catBtn.addEventListener('click', () => {
    fetch('../html/categories.txt')
        .then((res) => res.text())
        .then((data) => {
            document.querySelector('#content').innerHTML = data;
        });

    navbarLinks.classList.remove('active');
});

brands.forEach((brand) => {
    brand.addEventListener('click', () => {
        fetch('../html/landing.txt')
            .then((res) => res.text())
            .then((data) => {
                document.querySelector('#content').innerHTML = data;
            });

        navbarLinks.classList.remove('active');
    });
});


//kontoknapp
navAccount.addEventListener('click', () => {
    loginMenu.classList.add('active');

    navbarLinks.classList.remove('active');
});

cancelButton.addEventListener('click', () => {
    loginMenu.classList.remove('active')
});


//mobilmenyknappen
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');

    navbarSearch.classList.remove('active');
    navbarSearch.classList.remove('transition');
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
        navbarLinks.classList.remove('active')
    }
});


//nav söken
searchButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        navbarSearch.classList.toggle('active');
        document.querySelector('.mobile-nav-search input').focus();
    });
});

searchButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        navbarSearch.classList.toggle('transition');

        navbarLinks.classList.remove('active');
    });
});

searchCancel.addEventListener('click', () => {
    navbarSearch.classList.remove('active');
    navbarSearch.classList.remove('transition');
});
