/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#223240',
        'secondary': '#3B8C66',
        'accent': '#347355',
        'highlight': '#60BF81',
        'light-highlight': '#93D94E',
      },
    },
  },
  plugins: [],
};
