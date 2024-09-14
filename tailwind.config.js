/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "navbar-color": "#E8F1FF",
        "brown-sugar": "#6B6464",
        "hover-color": "#bed5fa",
        "hover-submenu-color": "#c7bbbb",
        "plus-color": "#277333",
        "green-plus-color": "#008D05",
        "dought-green-color": "#96BB96",
        "dought-org-color": "#D06517",
        "dought-sky-color": "#71E6FF",
        "dought-purple-color": "#8E8CED",
        "sky": "#71E6FF",
        "purple": "#8E8CED",
        "green-alert": "#16B943",
        "primary-color": "#0077FF"
      },
      fontFamily: {
        Anuphan: ["Anuphan", "sans-serif"]
      }
    },
  },
  plugins: [],
}

