/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      'soulmaze': ['MADE-Soulmaze'],
      'soulmaze-outline': ['MADE-Soulmaze-Outline']
    },
    colors: {
      'apex-green': '#00F3B3',
      'apex-purple': '#9261f8'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
