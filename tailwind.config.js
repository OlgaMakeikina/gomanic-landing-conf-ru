/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEFEFE',
        secondary: '#F5E4E6', 
        accent: '#3B3B3A',
        light: '#fdfffe',
        dark: '#3b3b39',
        brand: '#444f55'
      },
      fontFamily: {
        'druk': ['Druk Wide Cyr', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
