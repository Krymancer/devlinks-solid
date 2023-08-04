/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
      fontFamily: {
        sans: ['"InstrumentSans"', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#333333',
        gray: '#595959',
        'light-gray': '#F1F1F1',
        boders: '#D9D9D9',
        purple: '#6500FF',
        'light-purple': '#EFEBFF',
        'purple-hover': '#BEADFF',
        white: '#FFFFFF',
        red: '#FF3939',
        transparent: 'transparent',
      },
      fontSize: {
        sm: ['12px', {lineHeight: '150%'}],
        base: ['16px', {lineHeight: '150%'}],
        lg: ['24px', {lineHeight: '150%'}],
        xl: ['32px', {lineHeight: '150%'}],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      }
  },
  plugins: [],
}

