/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'IBM': ['IBM Plex Sans', 'ui-sans-serif','system-ui'],
      },
      colors:{
        'bgModal': 'rgb(0,0,0,0.7)'
      }
    },
  },
  plugins: [],
}

