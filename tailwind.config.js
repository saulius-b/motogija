/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'desktopVersion': "url('./svg_icons/desktop.jpeg')",
      },
      fontSize: {
        'xxs': '0.6rem',
      },
    },
  },
  plugins: [],
}
