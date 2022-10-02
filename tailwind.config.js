/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      textLight: '#333',
      textDark: '#e9e8ea',
      white: '#fff',
      black: '#161414',
    },
  },
  plugins: [],
};
