/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./asets/cool-background.svg')",
        'footer-texture': "url('./asets/cool-background.png')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('preline/plugin')],
}

