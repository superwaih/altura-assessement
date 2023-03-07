/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-color": "#B7E82A",
        "bgColor": "#131313",
        
      }
    },
  },
  plugins: [],
}