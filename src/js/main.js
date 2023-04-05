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

  function mediaLoadedHandle () {
    this.closest('a.media-item').classList.remove('loading')
    this.classList.remove('loading')
  }

  function getLazyLoadImages () {
    return document.querySelectorAll('a.media-item picture > img')
  }

  function getLazyLoadVideos () {
    return document.querySelectorAll('a.media-item video')
  }

  function checkImageLoadStatus () {
    const lazyloadImages = getLazyLoadImages()
    const amountOfImages = lazyloadImages.length

    for (let index = 0; index < amountOfImages; index += 1) {
      const img = lazyloadImages[index]

      if (img.complete && img.naturalHeight !== 0) {
        mediaLoadedHandle.call(img)
      }
    }
  }

  function checkVideoLoadStatus () {
    const lazyloadVideos = getLazyLoadVideos()
    const amountOfVideos = lazyloadVideos.length

    for (let index = 0; index < amountOfVideos; index += 1) {
      const video = lazyloadVideos[index]

      /** HAVE_ENOUGH_DATA, ref: https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLMediaElement/readyState */
      if (video.readyState === 4) {
        mediaLoadedHandle.call(video)
      }
    }
  }

  window.addEventListener('load', function () {
    setMobileMenuToggle()
    setMobileAccordions()
    checkImageLoadStatus()
    checkVideoLoadStatus()
  })

  // ref: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/#aa-method-1-trigger-the-image-load-using-javascript-events
  document.addEventListener('DOMContentLoaded', function () {
    let lazyloadThrottleTimeout

    // images
    const lazyloadImages = getLazyLoadImages()
    const amountOfImages = lazyloadImages.length
    let imageIndex = 0

    for (;imageIndex < amountOfImages; imageIndex += 1) {
      const img = lazyloadImages[imageIndex]
      if (img.src === '') {
        break
      }
    }

    lazyloadImages.forEach((element) => {
      element.addEventListener('load', mediaLoadedHandle)
    })

    // videos
    const lazyloadVideos = getLazyLoadVideos()
    const amountOfVideos = lazyloadVideos.length
    let videoIndex = 0

    for (;videoIndex < amountOfVideos; videoIndex += 1) {
      const video = lazyloadVideos[videoIndex]
      if (video.classList.contains('loading')) {
        break
      }
    }

    lazyloadVideos.forEach((element) => {
      element.addEventListener('canplaythrough', mediaLoadedHandle)
    })

    function lazyload () {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout)
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        if ((amountOfImages === 0 || imageIndex >= amountOfImages) && (amountOfVideos === 0 || videoIndex >= amountOfVideos)) {
          document.removeEventListener('scroll', lazyload)
          window.removeEventListener('resize', lazyload)
          window.removeEventListener('orientationChange', lazyload)
          return
        }

        const scrollTop = window.scrollY
        // images
        for (;imageIndex < amountOfImages; imageIndex += 1) {
          const img = lazyloadImages[imageIndex]

          if (img.closest('a.media-item').offsetTop < (window.innerHeight + scrollTop + 700) && img.src === '') {
            img.previousElementSibling.srcset = img.previousElementSibling.dataset.srcset
            img.src = img.dataset.src
          } else {
            break
          }
        }

        // videos
        for (;videoIndex < amountOfVideos; videoIndex += 1) {
          const video = lazyloadVideos[videoIndex]

          if (video.closest('a.media-item').offsetTop < (window.innerHeight + scrollTop + 700) && video.classList.contains('loading')) {
            video.querySelectorAll('source').forEach(element => {
              element.src = element.dataset.src
            })
            video.classList.remove('loading')
            setTimeout(() => video.load(), 0)
          } else {
            break
          }
        }
      }, 20)
    }

    document.addEventListener('scroll', lazyload)
    window.addEventListener('resize', lazyload)
    window.addEventListener('orientationChange', lazyload)

    lazyload()
  })
})()
