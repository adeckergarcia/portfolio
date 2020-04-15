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


// Cirrus
const overlayAreaOne = document.getElementById('overlay-area-1');
const projectOverlayOne = document.getElementById('project-overlay-1');

if (overlayAreaOne && projectOverlayOne) {
    overlayAreaOne.addEventListener('mouseenter', () => {
        // console.log('I moused over one')
        projectOverlayOne.classList.remove('opacity-0')
        projectOverlayOne.classList.add('opacity-1')
    });

    overlayAreaOne.addEventListener('mouseleave', () => {
        // console.log('I moused out one')
        projectOverlayOne.classList.remove('opacity-1')
        projectOverlayOne.classList.add('opacity-0')
    });
} else {
    // console.log('not there one');
}

// CanvasGT
const overlayAreaTwo = document.getElementById('overlay-area-2');
const projectOverlayTwo = document.getElementById('project-overlay-2');

if (overlayAreaTwo && projectOverlayTwo) {
    overlayAreaTwo.addEventListener('mouseenter', () => {
        // console.log('I moused over two')
        projectOverlayTwo.classList.remove('opacity-0')
        projectOverlayTwo.classList.add('opacity-1')
    });

    overlayAreaTwo.addEventListener('mouseleave', () => {
        // console.log('I moused out two')
        projectOverlayTwo.classList.remove('opacity-1')
        projectOverlayTwo.classList.add('opacity-0')
    });
} else {
    // console.log('not there two');
}