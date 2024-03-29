/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/hooks/**/*.{jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      title: ['kallisto', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter'],
  },
}
