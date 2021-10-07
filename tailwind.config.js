module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        menu: '#f4f7f6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
