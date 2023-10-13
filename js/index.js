const swiper = new Swiper('.swiper-container', {
  // Swiper configuration options
  slidesPerView: 1, // Number of slides per view
  spaceBetween: 10, // Space between slides
  loop: true, // Loop through slides
  pagination: {
    el: '.swiper-pagination', // Pagination element
    clickable: true, // Allow clickable pagination bullets
  },
  navigation: {
    nextEl: '.swiper-button-next', // Next slide button
    prevEl: '.swiper-button-prev', // Previous slide button
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

contactMenu.addEventListener('click', () => {
  toggleNavbar()
})
