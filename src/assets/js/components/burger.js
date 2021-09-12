let burgerMenu = document.getElementById('burgerMenu');
let burgerLinks = document.querySelector('.header__nav--links-mob');
let burgerNotOpen = document.querySelector('.burger__not-open');
let burgerOpen = document.querySelector('.burger__open');
let burgerLink = document.querySelectorAll('#burgerLink');

function closeBurger() {
    burgerLinks.classList.toggle('menu-grid');
    burgerOpen.classList.toggle('none');
    burgerNotOpen.classList.toggle('none');
}

burgerMenu.addEventListener('click', () => {
    closeBurger();
});

burgerLink.forEach(btn => btn.addEventListener('click', closeBurger));
