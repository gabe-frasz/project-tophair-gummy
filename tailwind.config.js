/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Unbounded, cursive",
      },
      colors: {
        base: {
          50: "#F1F1F1",
          100: "#D9D9D9",
          200: "#2A1A3F",
        },
      },
    },
  },
  plugins: [],
};
