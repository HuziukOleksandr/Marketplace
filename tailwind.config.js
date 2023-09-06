/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.html",  
    "./src/**/*.vue",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serrat': ['Montserrat','sans'],
        'space': ['SpaceMono', 'sans']
      },
      colors: {
        'bg-color': '#2B2B2B', 
        'bg-secondary': '#3B3B3B', 
        'btn-bg-color': '#A259FF',
        'white': '#FFFFFF',
        'grey': '#858584',
        'green': '#00AC4F',
        'timer-bg': '#3B3B3B80'
      },
      scale: {
        '102': '1.02'
      }
    },
    screens: {
      'sm': {'min': '300px','max': '767px'},
      'md': {'min': '768px', 'max': '1279px'},
      'lg': {'min': '1280px'}
    }
  },
  plugins: [],
}

