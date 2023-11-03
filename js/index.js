const menuToggle = document.getElementById('menu-toggle')
const navList = document.getElementById('nav-list')
const navClose = document.getElementById('nav-close')
const navOverlay = document.getElementById('nav-overlay')
const navDynamic = document.getElementById('nav-dynamic')
const contactMenu = document.getElementById('contact-menu')
const topBtn = document.getElementById('top-btn')

function toggleSideNavbar() {
  navList.classList.toggle('show')
  if (navOverlay !== null) {
    navOverlay.classList.toggle('hidden')
  }
}

function handleSideNavbar() {
  if (menuToggle !== null) {
    menuToggle.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (navClose !== null) {
    navClose.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (navOverlay !== null) {
    navOverlay.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (contactMenu !== null) {
    contactMenu.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function handleDynamicNavbar() {
  // Index page: navbar after services section
  if (document.getElementById('services') !== null) {
    const servicesEl = document.getElementById('services')
    // Go below services section
    if (window.scrollY > servicesEl.offsetTop + servicesEl.offsetHeight) {
      if (navDynamic.classList.contains('show')) return
      navDynamic.classList.add('show')
    }
    // Go above services section
    else {
      if (navDynamic.classList.contains('show')) {
        navDynamic.classList.remove('show')
      }
    }
  }
}

function switchActiveLinkInDynamicNavbar() {
  if (document.getElementById('testimonials') !== null) {
    const testimonialsEl = document.getElementById('testimonials')
    const contactMenuEl = navDynamic.querySelector('#contact-menu')
    const homeMenuEl = navDynamic.querySelector('#home-menu')

    // Go below testimonials section
    if (
      window.scrollY >
      testimonialsEl.offsetTop + testimonialsEl.offsetHeight
    ) {
      if (homeMenuEl.classList.contains('font-bold')) {
        homeMenuEl.classList.remove('font-bold')
        homeMenuEl.classList.add('text-gray-400')
      }
      if (contactMenuEl.classList.contains('font-bold')) return
      contactMenuEl.classList.add('font-bold')
      contactMenuEl.classList.remove('text-gray-400')
    }
    // Go above testimonials section
    else {
      if (contactMenuEl.classList.contains('font-bold')) {
        contactMenuEl.classList.remove('font-bold')
        contactMenuEl.classList.add('text-gray-400')
      }
      if (homeMenuEl.classList.contains('font-bold')) return
      homeMenuEl.classList.add('font-bold')
      homeMenuEl.classList.remove('text-gray-400')
    }
  }
}

function handleGoToTopBtn() {
  // Index page: top button after hero section
  if (document.getElementById('hero') !== null) {
    const heroEl = document.getElementById('hero')
    // Go below hero section
    if (window.scrollY > heroEl.offsetTop + heroEl.offsetHeight) {
      if (topBtn.classList.contains('show')) return
      topBtn.classList.add('show')
    }
    // Go above hero section
    else {
      if (topBtn.classList.contains('show')) {
        topBtn.classList.remove('show')
      }
    }
  }
  // About page
  if (document.getElementById('about-second-img') !== null) {
    const imgEl = document.getElementById('about-second-img')
    // Go half below blog section
    if (window.scrollY > imgEl.clientHeight + imgEl.offsetHeight) {
      if (topBtn.classList.contains('show')) return
      topBtn.classList.add('show')
    } else {
      if (topBtn.classList.contains('show')) {
        topBtn.classList.remove('show')
      }
    }
  }

  // Blog page
  if (document.getElementById('blog') !== null) {
    const blogEl = document.getElementById('blog')
    // Go half below blog section
    if (window.scrollY > blogEl.clientHeight / 2) {
      if (topBtn.classList.contains('show')) return
      topBtn.classList.add('show')
    } else {
      if (topBtn.classList.contains('show')) {
        topBtn.classList.remove('show')
      }
    }
  }
}

function initAllEventListeners() {
  // Go to top button
  if (topBtn !== null) {
    topBtn.addEventListener('click', goToTop)
  }
  // Scroll
  window.addEventListener('scroll', () => {
    handleGoToTopBtn()
    handleDynamicNavbar()
    switchActiveLinkInDynamicNavbar()
  })
  // SideNavbar
  handleSideNavbar()
}

initAllEventListeners()
