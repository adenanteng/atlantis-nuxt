const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: colors.blue,
      transparent: 'transparent',
      current: 'currentColor',
      neutral: colors.neutral,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      lime: colors.lime,
      cyan: colors.cyan,
      teal: colors.teal,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      amber: colors.amber,
      red: colors.red
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'glass': "url('/img/glass.png')",
      },
    },
  },
  plugins: [],
}

