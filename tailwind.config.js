/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode : "selector",

  content: ['./Public/*.html'],
  theme: {

    fontFamily: {
      'kalameh-thin': 'kalamehThin',
      'kalameh-regular': 'kalamehRegular',
      'kalameh-bold': 'kalamehBold',
      'kalameh-black': 'kalamehBlack'
    },

    screens : {
      xs:'500px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px'
    },

    extend: {

      container : {
        center : true,
        padding : {
          DEFAULT : '1rem',
          lg : '0.800rem'
        }
      },

      colors: {
        brown: {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832'
        }
      },

      borderRadius: {
        '4xl': '2rem'
      },

      boxShadow: {
        primary: '0px 1px 10px rgba(161 , 161 , 170 , 0.8)'
      },

      spacing : {
        "30" : "7.5rem"
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ]
}
