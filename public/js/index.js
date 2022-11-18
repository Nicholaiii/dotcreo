var swiper = new Swiper(".swiperIndexReviews", {
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


/* Change Secondary CTAs */
function changeSecondaryCTA() {
  if (window.innerWidth >= 600) {
      document.querySelector('.section4-column2').append(document.querySelector('.section4 button.secondary-cta'));
      document.querySelector('.section4 button.secondary-cta').style.textAlign = "left";
      document.querySelector('.section3-column1').append(document.querySelector('.section3 a.secondary-cta'));
      document.querySelector('.section3 a.secondary-cta').style.marginTop = "var(--spacing2)";
  }
};

changeSecondaryCTA();
