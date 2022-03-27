const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    purgecss({
      content: ['src/index.html', 'src/**/*.js'],
      fontFace: true,
      keyframes: true,
      variables: true
    }),
    require('cssnano')
  ]
}
