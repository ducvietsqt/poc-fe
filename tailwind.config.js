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
      gray: {
        9: '#262626',
        7: '#8C8C8C'
      },
      red: colors.red,
      purple: "#7737FF",
      violet: "#eae0ff"
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled', 'hover'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
