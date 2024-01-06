/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#28a774',
        primaryBlue: '#219ebc',
        primaryPink: '#BB86FC',
        dark: {
          100: '#121212',
          200: '#161616',
          300: '#1F1F1F',
          400: '#201f1fe8',
          500: '#2e2e2e'
        }
      }
    },
  },
  plugins: [],
}

