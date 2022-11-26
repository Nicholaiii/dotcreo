/* Open Booking Modal */
const openModals = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal-bg');

for (let i = 0; i < openModals.length; i++) {
    openModals[i].addEventListener("click", function() {
        modal.classList.add("modal-bg-active");
    });
}

closeModal.addEventListener("click", function() {
    modal.classList.remove("modal-bg-active");
});

/* Blog Swiper */
var swiper = new Swiper(".swiperBlog", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Cookie Banner
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-container i");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("onDisplay");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("onDisplay");
  }
}, 2000);

/* Header Marquee */
const marqueeItems = gsap.utils.toArray(".marquee-item");
const revolveTime = 4;

function marqueeAnim() {
  const scroll = gsap.timeline()
  .to(marqueeItems,  {y:'-=30', duration:1})
  .to(marqueeItems[0], {y:'+=90', duration:0})
  
  marqueeItems.push( marqueeItems.shift() );
  
  gsap.delayedCall(revolveTime, marqueeAnim);
}

gsap.delayedCall(revolveTime, marqueeAnim);

// Navbar Appear on Scroll
const mobileNav1 = document.querySelector('.mobileNav');
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (!mobileNav1.classList.contains('activeMobileNav') && currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (!mobileNav1.classList.contains('activeMobileNav') && currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		!mobileNav1.classList.contains('activeMobileNav') && 
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});
