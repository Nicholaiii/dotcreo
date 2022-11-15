/* Hamburger Style Logic */
const hamburger = document.querySelector('.hamburger-container');
let menuOpen = false;

hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        hamburger.classList.add('open');
        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        menuOpen = false;
    }
})

/* Hamburger Functional Logic */
hamburger.addEventListener('click', function() {
  const mobileNav = document.querySelector('.mobileNav'); 
  mobileNav.classList.toggle('activeMobileNav');
})

const mobileNav2 = document.querySelector('.mobileNav');
const navLinks = document.querySelectorAll('.nav-list-item a');

/* Current Page Nav Functionality */
navLinks.
forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
})

/* Change CTA Text */
function changeHeaderCTA() {
    if (window.innerWidth > 450) {
        document.querySelector('.nav-buttons .primary-cta').innerHTML = "Get Started →"
    }
};

changeHeaderCTA();
