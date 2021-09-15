const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      rose: "#FF1F82",
      green: colors.green,
      gray: colors.gray,
      red: colors.red,
      gold: "#f7b02e",
    },
    extend: {
      transitionDelay: {
        '5000': '5000ms',
        '3000': '3000ms',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled', 'hover'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
