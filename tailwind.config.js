module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#D51E72',
      },
      fontFamily: {
        primary: ['PrimaryFont', 'sans-serif'],
        secondary: ['SecondaryFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
