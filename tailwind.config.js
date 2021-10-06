const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px',
      ...screens,
    },
    extend: {
      zIndex: {
        '-1': '-1',
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        900: 900,
        910: 910,
        920: 920,
        930: 930,
        940: 940,
        950: 950,
        960: 960,
        970: 970,
        980: 980,
        990: 990,
        auto: 'auto',
      },
    },
  },
  variants: {
    extend: {},
  },
}
