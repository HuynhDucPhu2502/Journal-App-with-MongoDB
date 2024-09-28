/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(100, 57, 255)",
        secondary: "rgb(135, 162, 255)",
        accent: "rgb(196, 215, 255)",
      },
    },
  },
  plugins: [],
};
