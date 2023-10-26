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
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
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

const menuToggle = document.getElementById('menu-toggle')
const navList = document.getElementById('nav-list')
const navClose = document.getElementById('nav-close')
const navOverlay = document.getElementById('nav-overlay')
const contactMenu = document.getElementById('contact-menu')

function toggleNavbar() {
  navList.classList.toggle('show')
  navOverlay.classList.toggle('hidden')
}

menuToggle.addEventListener('click', () => {
  toggleNavbar()
})

navClose.addEventListener('click', () => {
  toggleNavbar()
})

navOverlay.addEventListener('click', () => {
  toggleNavbar()
})

if (contactMenu !== null) {
  contactMenu.addEventListener('click', () => {
    toggleNavbar()
  })
}
