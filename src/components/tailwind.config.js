/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1c1917',   // Deep Stone Charcoal for structural typography/backgrounds
          secondary: '#78716c', // Mid-tone Slate for supporting text/borders
          accent: '#b45309',    // Rich Amber/Gold accenting premium features & CTA details
          light: '#f5f5f4',     // Soft Off-White for section backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],          // Clean layout readability
        serif: ['Playfair Display', 'serif'],   // Elegant editorial headings for custom home portfolios
      }
    },
  },
  plugins: [],
}
