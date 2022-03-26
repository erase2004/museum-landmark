import '@/css/main.css'

(function () {
  'use strict'

  const $body = document.querySelector('body')

  // Disable animations/transitions until everything's loaded.
  $body.classList.add('is-loading')

  window.addEventListener('load', function () {
    window.setTimeout(function () {
      $body.classList.remove('is-loading')
    }, 100)
  });

  // Slideshow Background.
  (function () {
    // Settings.
    const settings = {

      // Images (in the format of 'url': 'alignment').
      images: {
        'images/49.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        'images/50.jpg': {
          position: 'right 0% top 0%',
          direction: 'left'
        },
        'images/51.jpg': {
          position: 'right 0% top 20%',
          direction: 'left'
        },
        'images/46.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        'images/47.jpg': {
          position: 'right 20% top 0%',
          direction: 'left'
        },
        'images/48.jpg': {
          position: 'left 50% top 0%',
          direction: 'right'
        },
        'images/43.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        'images/44.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        'images/45.jpg': {
          position: 'left 50% top 0%',
          direction: 'right'
        },
        'images/40.gif': {
          position: 'left 50% top 0%',
          direction: 'right'
        },
        'images/41.jpg': {
          position: '50% 10%',
          direction: 'left'
        },
        'images/42.jpg': {
          position: 'right 50% top 10%',
          direction: 'left'
        },
        'images/37.jpg': {
          position: 'right 70% top 20%',
          direction: 'right'
        },
        'images/38.jpg': {
          position: '40% 10%',
          direction: 'left'
        },
        'images/39.jpg': {
          position: 'right 20% top 10%',
          direction: 'left'
        },
        'images/31.jpg': {
          position: 'right 70% top 10%',
          direction: 'right'
        },
        'images/32.jpg': {
          position: '10% 50%',
          direction: 'left'
        },
        'images/33.jpg': {
          position: 'left 0% top 0%',
          direction: 'right'
        },
        'images/28.jpg': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        'images/29.jpg': {
          position: '0% 60%',
          direction: 'left'
        },
        'images/30.png': {
          position: 'left 0% top 0%',
          direction: 'right'
        },
        'images/25.png': {
          position: '0% 40%',
          direction: 'left'
        },
        'images/26.jpg': {
          position: '0% 25%',
          direction: 'left'
        },
        'images/27.jpg': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        'images/22.jpg': {
          position: 'left 70% top 0%',
          direction: 'left'
        },
        'images/23.jpg': {
          position: 'right 70% top 0%',
          direction: 'right'
        },
        'images/24.jpg': {
          position: '70% 10%',
          direction: 'left'
        },
        'images/19.jpg': {
          position: '50% 5%',
          direction: 'left'
        },
        'images/20.jpg': {
          position: 'right 70% top 10%',
          direction: 'right'
        },
        'images/21.png': {
          position: 'right 80% top 40%',
          direction: 'right'
        },
        'images/16.jpg': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        'images/17.jpg': {
          position: '70% 25%',
          direction: 'left'
        },
        'images/18.jpg': {
          position: '50% 30%',
          direction: 'left'
        },
        'images/13.png': {
          position: '70% 20%',
          direction: 'left'
        },
        'images/14.png': {
          position: '50% 10%',
          direction: 'left'
        },
        'images/15.png': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        'images/10.jpg': {
          position: '50% 10%',
          direction: 'left'
        },
        'images/11.jpg': {
          position: '60% 15%',
          direction: 'left'
        },
        'images/12.jpg': {
          position: '70% 10%',
          direction: 'left'
        },
        'images/07.jpg': {
          position: 'right 80% top 10%',
          direction: 'right'
        },
        'images/08.jpg': {
          position: 'right 60% top 15%',
          direction: 'right'
        },
        'images/09.jpg': {
          position: '70% 30%',
          direction: 'left'
        },
        'images/04.png': {
          position: '60% 10%',
          direction: 'left'
        },
        'images/05.jpg': {
          position: 'right 35% top 40%',
          direction: 'right'
        },
        'images/06.jpg': {
          position: '40% 15%',
          direction: 'left'
        },
        'images/01.jpg': {
          position: '50% 10%',
          direction: 'left'
        },
        'images/02.gif': {
          position: 'top',
          direction: 'left'
        },
        'images/03.jpg': {
          position: '80% 25%',
          direction: 'left'
        }
      },

      // Delay.
      delay: 7000
    }

    // Vars.
    let pos = 0
    let lastPos = 0
    let nextPos = 1
    const preload = 3
    const $bgs = []
    let $bg

    // Create BG wrapper, BGs.
    const $wrapper = document.createElement('div')
    $wrapper.id = 'bg'
    $body.appendChild($wrapper)

    for (const k in settings.images) {
      // Create BG.
      $bg = document.createElement('div')
      if (pos < preload) {
        $bg.style.backgroundImage = 'url("' + k + '")'
      }
      $bg.style.backgroundPosition = settings.images[k].position
      $bg.classList.add(settings.images[k].direction)
      $bg.draggable = true
      $bg.setAttribute('data-src', 'url("' + k + '")')
      $wrapper.appendChild($bg)

      // Add it to array.
      $bgs.push($bg)

      pos++
    }

    pos = 0

    // Main loop.
    $bgs[pos].classList.add('visible')
    $bgs[pos].classList.add('top')

    // Bail if we only have a single BG or the client doesn't support transitions.
    if ($bgs.length === 1) { return }

    window.setInterval(function () {
      lastPos = pos
      pos = nextPos
      nextPos = (nextPos + 1) % $bgs.length

      // Wrap to beginning if necessary.
      if (pos >= $bgs.length) { pos = 0 }

      // Swap top images.
      $bgs[lastPos].classList.remove('top')
      $bgs[pos].classList.add('visible')
      $bgs[pos].classList.add('top')
      $bgs[nextPos].style.backgroundImage = $bgs[nextPos].getAttribute('data-src')

      // Hide last image after a short delay.
      window.setTimeout(function () {
        $bgs[lastPos].classList.remove('visible')
      }, settings.delay / 2)
    }, settings.delay)
  })()
})()
