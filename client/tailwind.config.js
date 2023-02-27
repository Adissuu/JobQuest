/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black': {
          100: '#282828'
        },
        'white': '#F1F1F1',
        'green': {
          500: '#54B375'
        },
        'orange': {
          500 : '#FFBA7B'
        },
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
