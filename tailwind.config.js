module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        titleRed: "#AF3333",
        headerText: "#FAEEEE",
        backgroundGray: "#C8C4C4",
      }
    },
  },
  plugins: [],
}
