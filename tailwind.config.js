/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'Herobackground': "url('/src/assets/images/HeroSection.gif')",
        'Aboutbg': "url('/src/assets/images/aboutbg.png')",
        'world': "url('/src/assets/images/giphy.webp')",
      },
      colors:{
        "neonblue":"#00FFFF"
      }

    },
  },
  plugins: [],
}