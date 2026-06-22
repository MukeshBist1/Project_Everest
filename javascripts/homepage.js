// Remove spaceBetween quotes; change 480 breakpoint to centeredSlides: true
const swiper = new Swiper('.swiper', {
  freeMode: false,
  slidesPerView: 1.2,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 10, 
  pagination: { el: '.swiper-pagination' },
  navigation: {
    nextEl: '.swiper_next_button',
    prevEl: '.swiper_prev_button',
  },
  breakpoints: {
    1024: { slidesPerView: 2, centeredSlides: false },
    768: { slidesPerView: 2.5, centeredSlides: false },
    480: { slidesPerView: 2, centeredSlides: false, paceBetween: 20, } 
  }
});