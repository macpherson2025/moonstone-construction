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
          primary: '#2d312e',   // Muted Charcoal/Olive mix for grounding text & frames
          secondary: '#6b706c', // Understated Mossy-Slate for supporting subheadings
          accent: '#8f9779',    // Soft Sage Green for subtle, organic call-to-actions
          light: '#f4f3ef',     // Gentle Warm Chalk/Alabaster for backgrounds
          sand: '#dfdbd4',      // Soft Neutral Sand tone for dividers and borders
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
