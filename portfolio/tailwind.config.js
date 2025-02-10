/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vitePurple: '#646CFF',
        viteYellow: '#FFB800',
      },
      backgroundImage: {
        'vite-gradient': 'linear-gradient(45deg, #646CFF, #FFB800)',
      },
    },
  },
  plugins: [],
}