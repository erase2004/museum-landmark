import imagemin from 'imagemin'
import imageminWebp from 'imagemin-webp'

imagemin(['src/assets/images/*.{jpg,jpeg,png}'], {
  destination: 'src/assets/images',
  plugins: [
    imageminWebp({ quality: 60 })
  ]
})
