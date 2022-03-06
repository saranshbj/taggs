module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins'],
        inter: ['inter']
       },
       screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'}, 
        'ml': {'max': '1100px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
        'es': {'max': '525px'}, 
      },
      colors: {
        'color1': '#F3F4F6',
        'color2': '#4F46E5'
      }
    },
  },
  plugins: [],
}
