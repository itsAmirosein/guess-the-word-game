/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxHeight: {
      '1/2': '50%',
      '3/4': '75%',
    },
    boxShadow: {
      "3xl": "0 0 40px rgba(0,0,0,0.5)",
    },
    extend: {},
  },
  plugins: [],
};
