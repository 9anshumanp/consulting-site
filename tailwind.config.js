/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#a5b4fc",
          DEFAULT: "#6366f1",
          dark: "#4338ca"
        }
      }
    },
  },
  plugins: [],
}
