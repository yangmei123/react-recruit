// tailwind.config.js
module.exports = {
  purge: {
    // mode: 'all',
    // preserveHtmlElements: false,
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '1/2screen': '50vh'
      },
      zIndex: {
        '5': '5'
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['group-hover'],
      textColor: ['group-hover'],
      borderWidth: ['group-hover']
    },
  },
  plugins: [],
}