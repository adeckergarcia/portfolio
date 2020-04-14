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
let scrollPosition = window.scrollTop;

// Button is not on every page
if (scrollTopButton) {
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        })
    });

    const topOfPage = 800

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > topOfPage) {
            document.getElementById("scroll-top-button").classList.remove("hide-scroll-button");
        } else {
            document.getElementById("scroll-top-button").classList.add("hide-scroll-button");
        }
    };
}

const overlaySituation = document.getElementById('overlay-situation');
const thingToOverlay = document.getElementById('thing-to-overlay');

if (overlaySituation && thingToOverlay) {
    overlaySituation.addEventListener('mouseenter', () => {
        console.log('I moused over')
        thingToOverlay.classList.remove('opacity-0')
        thingToOverlay.classList.add('opacity-1')
    });

    overlaySituation.addEventListener('mouseleave', () => {
        console.log('I moused over')
        thingToOverlay.classList.remove('opacity-1')
        thingToOverlay.classList.add('opacity-0')
    });
} else {
    console.log('not there');
}