import '@/css/main.css'
import 'flowbite'
import siteList from '@/js/siteList';

(function () {
  'use strict'

  function setMobileMenuToggle () {
    // set the target element that will be collapsed or expanded (eg. navbar menu)
    const targetEl = document.querySelector('#mobile-menu')

    // optionally set a trigger element (eg. a button, hamburger icon)
    const triggerEl = document.querySelector('[data-collapse-toggle="mobile-menu"]')

    // optional options with default values and callback functions
    const options = {
      triggerEl: triggerEl
    }

    return new window.Collapse(targetEl, options)
  }

  function setMobileAccordions () {
    const accordionItems = Object.keys(siteList).map(year => ({
      id: `accordion-${year}`,
      triggerEl: document.querySelector(`[data-accordion-target="#accordion-collapse-body-${year}"]`),
      targetEl: document.querySelector(`#accordion-collapse-body-${year}`),
      active: false
    }))

    const options = {
      alwaysOpen: false,
      activeClasses: 'bg-gray-800 text-white',
      inactiveClasses: 'text-gray-400',
      onOpen: (item) => {
        const { triggerEl } = item
        triggerEl.querySelector('[data-accordion-icon]').classList.toggle('rotate-180')
      },
      onClose: (item) => {
        const { triggerEl } = item
        triggerEl.querySelector('[data-accordion-icon]').classList.toggle('rotate-180')
      },
      onToggle: (item) => {

      }
    }

    return new window.Accordion(accordionItems, options)
  }

  const $body = document.querySelector('body')

  // Disable animations/transitions until everything's loaded.
  $body.classList.add('is-loading')

  window.addEventListener('load', function () {
    setMobileMenuToggle()
    setMobileAccordions()

    window.setTimeout(function () {
      $body.classList.remove('is-loading')
    }, 100)
  })

  // ref: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/#aa-method-1-trigger-the-image-load-using-javascript-events
  document.addEventListener('DOMContentLoaded', function () {
    const lazyloadImages = document.querySelectorAll('img.lazy-image')
    let lazyloadThrottleTimeout

    function lazyload () {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout)
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        const scrollTop = window.pageYOffset
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop) && img.src === '') {
            img.src = img.dataset.src
            img.classList.remove('lazy-image')
          }
        })
        if (lazyloadImages.length === 0) {
          document.removeEventListener('scroll', lazyload)
          window.removeEventListener('resize', lazyload)
          window.removeEventListener('orientationChange', lazyload)
        }
      }, 20)
    }

    document.addEventListener('scroll', lazyload)
    window.addEventListener('resize', lazyload)
    window.addEventListener('orientationChange', lazyload)
  })
})()
