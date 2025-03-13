/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: [
          'Inter', sans-serif
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
