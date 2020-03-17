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