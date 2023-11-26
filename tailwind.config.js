/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'hero-img': "url('/src/assets/bgfood.jpg')",
        'category-img': "url('/src/assets/spices-tomatoes-near-spaghetti-garlic_23-2147849739.png')",
        'granit': "url('/src/assets/black-marble-patterned-texture-background-marble-thailand-abstract-natural-marble-black-white-design.png')",
        'food': "url('/src/assets/vegetables-set-left-black-slate.png')"
      },
      fontFamily: {
        'butter-food': 'butter',
        fredoka: "'Fredoka', sans-serif",
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}

