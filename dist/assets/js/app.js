new WOW().init();
const header = document.querySelector("#header");
const headerTop = header.offsetTop;

window.addEventListener("scroll", stickyNavigation);

function stickyNavigation() {
    if (window.scrollY >= headerTop) {
        header.classList.add("header__sticky--active");
    } 
    else {
        header.classList.remove("header__sticky--active");
    }
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
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