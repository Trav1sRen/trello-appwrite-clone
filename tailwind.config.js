const { nextui } = require('@nextui-org/theme');
const { typewindTransforms } = require('typewind/transform');

/** @type {import('tailwindcss').Config} */
const config = {
  content: {
    files: [
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    transform: typewindTransforms,
  },
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};

module.exports = config;
