/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        brightred: '#F25F3A',
        darkred: '#242D52',
        grayblue: '#9095A7',
        darkblue: '#1D1E25',
        royalblue: '#242d52',
        normalgray: '#a9aaaf',
        palered: '#ffc4b8',
        lightgray: '#FAFAFA',
        silver: '#d9d9d9',
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'icon-close': "url('./assets/icon-close.svg')",
        'icon-menu': "url('./assets/icon-menu.svg')",
        'illustration': "url('./assets/illustration-intro.svg')",
        'logo': "url('./assets/logo.svg')",
        'avatar-ali': "url('./assets/avatar-ali.png')",
        'avatar-anisha': "url('./assets/avatar-anisha.png')",
        'avatar-richard': "url('./assets/avatar-richard.png')",
        'avatar-shanai': "url('./assets/avatar-shanai.png')",
        'bg-desktop': "url('./assets/bg-desktop.svg')",
        'bg-mobile': "url('./assets/bg-mobile.svg')",
        'bg-tablet': "url('./assets/bg-tablet.svg')"
      },
    },
  },
}

