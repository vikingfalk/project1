const toggleButton = document.querySelector('.toggle-button');
const navbarMenu = document.querySelectorAll('.container-3');
console.log(toggleButton, navbarMenu);

toggleButton.addEventListener('click', () => {
    navbarMenu.forEach((n) => {n.classList.toggle('active')})
});