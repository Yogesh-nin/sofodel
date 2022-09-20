/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gold': ' #E1B21B',
        'light-gold': '#eec22f',
        'intellectual-grey': '#231F20',
        'grey': '#EAEAEA' 
      }
    }
  },
  plugins: [
  ],
}