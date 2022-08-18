/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './html/**/*.{html,js}',
    './index.html',
    './explore.html',
  ],
  theme: {
    screens:{
      xsm: '380px',
      xm: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1340px',
    },
    container: {
      center: true,
      padding: {
        xsm: '0',
      xm: '0',
      sm: '0',
      md: '2rem',
      lg: '2rem',
      xl: '2rem',
      '2xl': '2rem',  
      },
    
    },
    extend: {
      
    },
  },
  plugins: [
    // require('flowbite/plugin')
],
 
}
