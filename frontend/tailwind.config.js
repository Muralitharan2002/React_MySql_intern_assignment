/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}", './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
    colors: {
      'light-blue': '#DDEAFC',
      'medium-blue': '#1A73E8'
    }
  },
  plugins: [],
}