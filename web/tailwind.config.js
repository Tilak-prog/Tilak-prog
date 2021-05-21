const colors = require('tailwindcss/colors');

module.exports = {
  purge: false, // or 'media' or 'class'
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      width: {
        '4/7': '76%',   
        '4/13': '1600%',
        '5/13': '36%', 
        '5/14' : '63%', // recent announcement 
        '11/13' : '98%',
        '5/15' : '45%',
        },
      colors: {
        textColor: {
          dark: '#111',
          default: '#444',
          medium: '#666',
          light: '#888',
        },
        textColorSet: {
          dark: '#292929',
          active: '#dfeaeb',
          medium: '#5A797E',
          light: '#94b5ba',
        },
        primary: { default: '#0E61AA', light: '', medium: '#415B96', broadcast: '#415B96' },
        blue: {
          150: '#0E61AA',
          160: '#F2F5F9',
          170: '#415B96',
          180: '#EAEFF8',
          190: '#2C374D',//sidebar focused items
          200: '#7B88A2' //sidebar unfocused items 
        },
        pink: {
          170: '#FAF3EF',
        },
        red: {
          150: '#CD4845',
        },
        black: {
          150: '#A3A9B7',
          160: '#2D2F3D',
        },
        
      },
    },
  },
  
  variants: {
    extend: {},
  },
};
