/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      "3xl": "0 0 40px rgba(0,0,0,0.5)",
    },
    extend: {},
  },
  plugins: [],
};
