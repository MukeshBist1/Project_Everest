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
const swiper_thumb_button = document.querySelectorAll(".swiper_thumb .swiper-slide button");

function button_position() {
  const swiper_thumb_image = document.querySelector(".swiper_thumb .swiper-slide .slider_bgImage");
  const swiper_thumb_overlay = document.querySelectorAll(".swiper_thumb .swiper-slide .overlay");
  const imageHeight = swiper_thumb_image.getBoundingClientRect().height;
  swiper_thumb_button.forEach((button) => {
    button.style.top = `${(imageHeight) / 2}px`
  })
  swiper_thumb_overlay.forEach((overlay) => {
    overlay.style.height = `${imageHeight}px`
  })
}
button_position();
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(button_position, 5); // run after 100ms idle
});
// yt_video_swiper
const yt_video_swiper = new Swiper(".yt_video_swiper", {
  navigation: {
    prevEl: ".yt_video_swiper_prev",
    nextEl: ".yt_video_swiper_next",
  },
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: swiper_thumb,
  }
});

const yt_video_swiper_cover = document.querySelector(".yt_video_swiper_cover")
const yt_video_swiper_closeBtn = document.querySelector(".yt_video_swiper_closeBtn")

function stopAllVideos() {
  const iframes = document.querySelectorAll(".yt_video_swiper iframe");
  iframes.forEach((iframe) => {
    iframe.removeAttribute("src"); // fully unload, don't just edit the param
  });
}

function loadSlide(activeSlide, autoplay = true) {
  const iframe = activeSlide.querySelector("iframe");
  if (iframe) {
    const baseSrc = iframe.dataset.src;
    iframe.setAttribute("src", autoplay ? `${baseSrc}?autoplay=1` : baseSrc);
  }
}

yt_video_swiper.on("slideChange", () => {
  stopAllVideos();
  const activeSlide = yt_video_swiper.slides[yt_video_swiper.activeIndex];
  loadSlide(activeSlide);
});

swiper_thumb_button.forEach((button, index) => {
  button.addEventListener("click", () => {
    yt_video_swiper_cover.style.display = "block";
    stopAllVideos();
    const activeSlide = yt_video_swiper.slides[index];
    loadSlide(activeSlide);
  });
});

yt_video_swiper_closeBtn.addEventListener("click", () => {
  yt_video_swiper_cover.style.display = "none";
  stopAllVideos(); // now actually unloads the player, not just pauses it
});