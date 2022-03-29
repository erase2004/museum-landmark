const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
          purgecss({
            content: ['src/index.html', 'src/**/*.js'],
            fontFace: true,
            keyframes: true,
            variables: true
          }),
          require('cssnano')
        ]
      : [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
          purgecss({
            content: ['src/index.html', 'src/**/*.js'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            fontFace: true,
            keyframes: true,
            variables: true
          })
        ]
}
