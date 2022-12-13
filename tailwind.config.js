/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      hasan:'#1C2B35'
    }   
  },
  plugins: [],
}
