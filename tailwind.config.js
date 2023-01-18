/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lavander: '#644cfc',
        tangerine: '#fca249',
        rose: '#ff9398',
        'grey-500': '#121212',
        'grey-400': '#242424',
        'grey-300': '#4b4f58',
        'grey-200': '#9ca0ab',
        'grey-100': '#d3d5d9',
        'grey-50': '#f7f7f7',
      },
    },
  },
  plugins: [],
};
