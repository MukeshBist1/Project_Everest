const swiper = new Swiper('.feature_trips_swiper', {
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


// ------------------------------------------video carousel here --------------------------------------
// swiper-thumb
const swiper_thumb = new Swiper(".swiper_thumb", {
  navigation: {
    prevEl: ".swiper_thumb_prev",
    nextEl: ".swiper_thumb_next",
  },
  spaceBetween: 10,
  slidesPerView: 1.1,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },

});

function button_position() {
  const swiper_thumb_image = document.querySelector(".swiper_thumb .swiper-slide .slider_bgImage");
  const swiper_thumb_overlay = document.querySelectorAll(".swiper_thumb .swiper-slide .overlay");
  const imageHeight = swiper_thumb_image.getBoundingClientRect().height;
  const swiper_thumb_button = document.querySelectorAll(".swiper_thumb .swiper-slide button");
  swiper_thumb_button.forEach((button) => {
    button.style.top = `${(imageHeight) / 2}px`
  })
  swiper_thumb_overlay.forEach((overlay)=>{
    overlay.style.height=`${imageHeight}px`
  })
}
button_position();
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(button_position, 5); // run after 100ms idle
});
