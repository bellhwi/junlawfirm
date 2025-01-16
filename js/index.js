document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle')
  const navList = document.getElementById('nav-list')
  const navClose = document.getElementById('nav-close')
  const navOverlay = document.getElementById('nav-overlay')
  const contactMenu = document.getElementById('contact-menu')
  const topBtn = document.getElementById('top-btn')
  const practiceAreasMenu = document.getElementById('practice-areas-menu')
  const currentYear = document.getElementById('currentYear')
  const getCurrentYear = new Date().getFullYear()

  const toggleSideNavbar = () => {
    navList.classList.toggle('show')
    if (navOverlay !== null && document.body.clientWidth <= 1024) {
      navOverlay.classList.toggle('hidden')
      practiceAreasMenu.querySelector('ul').classList.add('hidden')
    }
  }

  const handleSideNavbar = () => {
    if (menuToggle) menuToggle.addEventListener('click', toggleSideNavbar)
    if (navClose) navClose.addEventListener('click', toggleSideNavbar)
    if (navOverlay) navOverlay.addEventListener('click', toggleSideNavbar)
    if (contactMenu) contactMenu.addEventListener('click', toggleSideNavbar)
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleGoToTopBtn = () => {
    const heroEl = document.getElementById('hero')
    const imgEl = document.getElementById('about-second-img')
    const blogEl = document.getElementById('blog')

    const shouldShowTopBtn = (element, offset = 0) => {
      return window.scrollY > element.offsetTop + element.offsetHeight + offset
    }

    if (heroEl && shouldShowTopBtn(heroEl)) topBtn.classList.add('show')
    else if (imgEl && shouldShowTopBtn(imgEl, imgEl.clientHeight))
      topBtn.classList.add('show')
    else if (blogEl && shouldShowTopBtn(blogEl, blogEl.clientHeight / 2))
      topBtn.classList.add('show')
    else topBtn.classList.remove('show')
  }

  const togglePracticeAreasMenu = () => {
    practiceAreasMenu.addEventListener('click', (e) => {
      const menu = e.target
      menu.querySelector('ul')?.classList.toggle('hidden')
    })
  }

  const preventRightClick = () => {
    document.addEventListener('contextmenu', (e) => e.preventDefault(), false)
  }

  const preventCopy = () => {
    document.addEventListener('copy', (e) => e.preventDefault())
  }

  const initAllEventListeners = () => {
    if (topBtn) topBtn.addEventListener('click', goToTop)
    window.addEventListener('scroll', handleGoToTopBtn)
    handleSideNavbar()
    togglePracticeAreasMenu()
    preventRightClick()
    // Uncomment the line below to prevent copy
    // preventCopy()
  }

  const handlePopupModal = () => {
    const modal = document.getElementById('popupModal')
    if (!modal) return

    if (sessionStorage.getItem('popupShown') !== 'true') {
      modal.style.display = 'flex'
    } else {
      modal.style.display = 'none'
    }

    document
      .getElementById('closeModalButton')
      .addEventListener('click', () => {
        closeModal(modal)
      })
  }

  const closeModal = (modal) => {
    modal.style.display = 'none'
    sessionStorage.setItem('popupShown', 'true')
  }

  initAllEventListeners()
  if (currentYear) currentYear.innerText = getCurrentYear
  handlePopupModal()
})
