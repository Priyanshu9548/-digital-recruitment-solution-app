/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        active: '#B480AA',     // Define color for active link
        inactive: '#000000',   // Define color for inactive link
      },
    },
  },
  plugins: [],
}
