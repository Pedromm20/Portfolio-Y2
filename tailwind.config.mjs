// tailwind.config.js
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro mediante la clase 'dark'
  content: ["./src/pages/**/*.{html,js,astro}", "./src/components/**/*.{html,js,astro}"],
  theme: {
    extend: {
      backgroundImage: {
        'light-pattern': "url('/background-white.jpg')",
        'dark-pattern': "url('/background-black.jpg')",
      },
    },
  },
  plugins: [],
};
