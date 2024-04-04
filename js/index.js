const menuToggle = document.getElementById('menu-toggle')
const navList = document.getElementById('nav-list')
const navClose = document.getElementById('nav-close')
const navOverlay = document.getElementById('nav-overlay')
const contactMenu = document.getElementById('contact-menu')
const topBtn = document.getElementById('top-btn')
const practiceAreasMenu = document.getElementById('practice-areas-menu')

function toggleSideNavbar() {
  navList.classList.toggle('show')
  if (navOverlay !== null) {
    if (document.body.clientWidth > 1024) return
    navOverlay.classList.toggle('hidden')
    practiceAreasMenu.querySelector('ul').classList.add('hidden')
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

function togglePracticeAreasMenu() {
  practiceAreasMenu.addEventListener('click', (e) => {
    const menu = e.target
    menu.querySelector('ul')?.classList.toggle('hidden')
  })
}

function initAllEventListeners() {
  // Go to top button
  if (topBtn !== null) {
    topBtn.addEventListener('click', goToTop)
  }
  // Scroll
  window.addEventListener('scroll', () => {
    handleGoToTopBtn()
  })
  // SideNavbar
  handleSideNavbar()
  // Toggle practice areas menu
  togglePracticeAreasMenu()
}

initAllEventListeners()
