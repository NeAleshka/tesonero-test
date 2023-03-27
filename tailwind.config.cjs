/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        navShadow:'0px 8px 16px rgba(0, 195, 104, 0.4)',
        mobileFeedback:'0px 8px 16px rgba(0, 195, 104, 0.24)',
      },
      backgroundImage:{
        'hero-pattern': "url('/src/assets/pattern.svg')",
        'right-pattern': "url('/src/assets/patternright.svg')",
      },
    },
  },
  plugins: [],
}
