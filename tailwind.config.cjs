/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Rubik, sans serif'
      }
    },
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      green: {
        500: '#15C196',
        400: '#6CD9BE'
      },
      gray: {
         100: '#BBB9BA',
         200: '#86878B',
         300: '#48484B',
         400: '#1C1C1E ',
      },
      'd-blue': {
        300: '#0F131E ',
        400: '#14141B ',
        500: '#14161C ', 
     }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 22,
      '2xl': 26
    }
  },
  plugins: [],
}
