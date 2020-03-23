// Burger Menu

const burgerMenuButton = document.getElementById("burger-menu");
const menuLinkWrapper = document.getElementById("menu-link-wrapper");
let burgerMenuIsOpen = false;

burgerMenuButton.addEventListener("click", function() {
    if (burgerMenuIsOpen === false) {
        menuLinkWrapper.classList.add("menu-links-open");
        menuLinkWrapper.classList.remove("menu-links-closed");
        burgerMenuIsOpen = true;
    } else {
        menuLinkWrapper.classList.add("menu-links-closed");
        menuLinkWrapper.classList.remove("menu-links-open");
        burgerMenuIsOpen = false;
    }
});

// Scroll to top

const scrollTopButton = document.getElementById("scroll-top-button");
let scrollPosition = window.scrollTop

scrollTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    })
});

// scrollTopButton.addEventListener("scroll", function() {
//     if (scrollPosition > 50) {
//         scrollTopButton.classList.remove("hide-scroll-button");
//     } else {
//         scrollTopButton.classList.add("hide-scroll-button");
//     }
// });

// let prevScrollPos = window.pageYOffset;

const topOfPage = 800

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > topOfPage) {
        document.getElementById("scroll-top-button").classList.remove("hide-scroll-button");
    } else {
        document.getElementById("scroll-top-button").classList.add("hide-scroll-button");
    }
};