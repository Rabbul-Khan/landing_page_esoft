/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#111B47',
        'text-light': '#505F98',
        'text-dark': '#37447E',
      },
    },
  },
  plugins: [],
};
