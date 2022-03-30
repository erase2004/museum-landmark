module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        'circle-bumping': {
          '0%': {
            top: '60px',
            height: '5px',
            'border-radius': '50px 50px 25px 25px',
            transform: 'scale(1.7)'
          },
          '40%': {
            height: '20px',
            'border-radius': '50%',
            transform: 'scale(1)'
          },
          '100%': {
            top: '0%'
          }
        },
        'shadow-transform': {
          '0%': {
            transform: 'scale(1.5)'
          },
          '40%': {
            transform: 'scale(1.5)',
            opacity: 0.7
          },
          '100%': {
            transform: 'scale(0.2)',
            opacity: 0.4
          }
        }
      },
      animation: {
        'circle-bumping': 'circle-bumping 0.5s alternate infinite ease',
        'shadow-transform': 'shadow-transfrom 0.5s alternate infinite ease'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
