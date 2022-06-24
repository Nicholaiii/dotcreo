var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');

hamburger.addEventListener('click', function() {
  mobileNav.classList.toggle('activeMobileNav');
})


