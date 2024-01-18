/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        ziongreen: '#9BA78B',
        buttonface: '#D9D9D9'
      },
      fontFamily:{
        title: ['Eagle Lake'],
        body: ['Darker Grotesque']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

