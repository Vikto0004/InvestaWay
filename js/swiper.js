const swiperTestimonial = new Swiper(".swiperTestimonial", {
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
