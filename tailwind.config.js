/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "primary-green": "#3E721D",
        "primary-yellow": "#E6CA66",
        "primary-black": "#333333",
        "primary-red": "#E04F35",
        "primary-red-darker": "#C03226",
      },
      fontFamily: {
        "playfair": ["Playfair Display", "serif"],
        "montserrat": ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}

