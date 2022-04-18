import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'
import imageminGif2webp from 'imagemin-gif2webp'

imagemin(['src/assets/images/*.{jpg,jpeg,png}'], {
  destination: 'src/assets/images',
  plugins: [
    imageminWebp({ quality: 60 })
  ]
})

imagemin(['src/assets/images/*.gif'], {
  destination: 'src/assets/images',
  plugins: [
    imageminGif2webp({
      lossy: true,
      quality: 50
    })
  ]
})
