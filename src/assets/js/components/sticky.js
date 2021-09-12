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