const swiperHero = new Swiper('.swiper-hero', {
  // Swiper configuration options
  slidesPerView: 1, // Number of slides per view
  spaceBetween: 10, // Space between slides
  loop: true, // Loop through slides
  pagination: {
    el: '.swiper-pagination', // Pagination element
    clickable: true, // Allow clickable pagination bullets
  },
  effect: 'coverflow',
  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  // },
})

const swiperTestimonial = new Swiper('.swiper-testimonial', {
  // Swiper configuration options
  slidesPerView: 1, // Number of slides per view
  spaceBetween: 10, // Space between slides
  loop: true, // Loop through slides
  pagination: {
    el: '.swiper-pagination', // Pagination element
    clickable: true, // Allow clickable pagination bullets
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
})
