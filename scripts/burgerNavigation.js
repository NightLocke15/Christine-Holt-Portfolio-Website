const burgerSymbol = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobileNavigation')

burgerSymbol.addEventListener('click', (menu) => {
    burgerSymbol.classList.toggle("open");
    mobileMenu.classList.toggle("open")
})