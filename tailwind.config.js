/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1c1917',   // Deep Stone Charcoal
          secondary: '#78716c', // Mid-tone Slate
          accent: '#b45309',    // Rich Amber Gold
          light: '#f5f5f4',     // Soft Warm Off-White
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
