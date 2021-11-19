const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgesEl = document.querySelector('header .badges')
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500) {
    gsap.to(badgesEl, .6, {
      opacity: 0,
      display: 'none'
    })
  }
  else {
    gsap.to(badgesEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))

const fadeInEls = document.querySelectorAll('.visual .fade-in')
fadeInEls.forEach( function (fadeInEl, index) {
  gsap.to(fadeInEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7
  })
})

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  loop: true,
  autoplay: true
})