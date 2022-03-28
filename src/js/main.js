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
        '49.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        '50.jpg': {
          position: 'right 0% top 0%',
          direction: 'left'
        },
        '51.jpg': {
          position: 'right 0% top 20%',
          direction: 'left'
        },
        '46.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        '47.jpg': {
          position: 'right 20% top 0%',
          direction: 'left'
        },
        '48.jpg': {
          position: 'left 50% top 0%',
          direction: 'right'
        },
        '43.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        '44.jpg': {
          position: 'left 50% top 0%',
          direction: 'left'
        },
        '45.jpg': {
          position: 'left 50% top 0%',
          direction: 'right'
        },
        '40.gif': {
          position: 'left 50% top 0%',
          direction: 'right'
        },
        '41.jpg': {
          position: '50% 10%',
          direction: 'left'
        },
        '42.jpg': {
          position: 'right 50% top 10%',
          direction: 'left'
        },
        '37.jpg': {
          position: 'right 70% top 20%',
          direction: 'right'
        },
        '38.jpg': {
          position: '40% 10%',
          direction: 'left'
        },
        '39.jpg': {
          position: 'right 20% top 10%',
          direction: 'left'
        },
        '31.jpg': {
          position: 'right 70% top 10%',
          direction: 'right'
        },
        '32.jpg': {
          position: '10% 50%',
          direction: 'left'
        },
        '33.jpg': {
          position: 'left 0% top 0%',
          direction: 'right'
        },
        '28.jpg': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        '29.jpg': {
          position: '0% 60%',
          direction: 'left'
        },
        '30.png': {
          position: 'left 0% top 0%',
          direction: 'right'
        },
        '25.png': {
          position: '0% 40%',
          direction: 'left'
        },
        '26.jpg': {
          position: '0% 25%',
          direction: 'left'
        },
        '27.jpg': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        '22.jpg': {
          position: 'left 70% top 0%',
          direction: 'left'
        },
        '23.jpg': {
          position: 'right 70% top 0%',
          direction: 'right'
        },
        '24.jpg': {
          position: '70% 10%',
          direction: 'left'
        },
        '19.jpg': {
          position: '50% 5%',
          direction: 'left'
        },
        '20.jpg': {
          position: 'right 70% top 10%',
          direction: 'right'
        },
        '21.png': {
          position: 'right 80% top 40%',
          direction: 'right'
        },
        '16.jpg': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        '17.jpg': {
          position: '70% 25%',
          direction: 'left'
        },
        '18.jpg': {
          position: '50% 30%',
          direction: 'left'
        },
        '13.png': {
          position: '70% 20%',
          direction: 'left'
        },
        '14.png': {
          position: '50% 10%',
          direction: 'left'
        },
        '15.png': {
          position: 'right 70% top 15%',
          direction: 'right'
        },
        '10.jpg': {
          position: '50% 10%',
          direction: 'left'
        },
        '11.jpg': {
          position: '60% 15%',
          direction: 'left'
        },
        '12.jpg': {
          position: '70% 10%',
          direction: 'left'
        },
        '07.jpg': {
          position: 'right 80% top 10%',
          direction: 'right'
        },
        '08.jpg': {
          position: 'right 60% top 15%',
          direction: 'right'
        },
        '09.jpg': {
          position: '70% 30%',
          direction: 'left'
        },
        '04.png': {
          position: '60% 10%',
          direction: 'left'
        },
        '05.jpg': {
          position: 'right 35% top 40%',
          direction: 'right'
        },
        '06.jpg': {
          position: '40% 15%',
          direction: 'left'
        },
        '01.jpg': {
          position: '50% 10%',
          direction: 'left'
        },
        '02.gif': {
          position: 'top',
          direction: 'left'
        },
        '03.jpg': {
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

    for (const image in settings.images) {
      // Create BG.
      $bg = document.createElement('div')

      if (pos < preload) {
        $bg.style.backgroundImage = `url(${require('@/assets/images/' + image)})`
      }
      $bg.style.backgroundPosition = settings.images[image].position
      $bg.classList.add(settings.images[image].direction)
      $bg.draggable = true
      $bg.setAttribute('data-src', `url(${require('@/assets/images/' + image)})`)
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
