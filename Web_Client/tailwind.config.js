/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'figma-green': '#EDEDE5',
        'figma-blue': '#1A1A3B',
        'figma-yellow': '#E1FF01',
        'discord': '#7289da',
      },
    },
  },
  plugins: [],
}