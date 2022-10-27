/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      arima: [ 'Bubblegum Sans', 'cursive'],
      quicksand: ['Quicksand', 'sans-serif'],
      Raleway: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        'redfont': '#fc7b54',
        'bluebg':'rgba(128, 16, 197, 0.75)',
        'bluebgg':'rgba(4, 9, 30, 0.7)',
        'red':'#e84b3a',
        'yellow':'#ffc000',
        'orange':'#fc7f0c',
        'purple':'#92278f',
        'blue':'#14b7f1',
        'pink':'#ee257c',
        'green':'#8dc63f',
        'onekind':'RGBA(146,39,143,.8)',
        'onekindyellow':'RGBA(255,192,0,.97)'
      },
    },
  },
  plugins: [],
}
