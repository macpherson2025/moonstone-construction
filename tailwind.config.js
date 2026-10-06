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
          primary: '#1c1917',   // Deep Stone Charcoal for structural layouts & typography
          secondary: '#78716c', // Mid-tone Slate for subheadings & borders
          accent: '#b45309',    // Rich Amber Gold for primary call-to-actions & details
          light: '#f5f5f4',     // Soft Warm Off-White for clean alternating rows
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
