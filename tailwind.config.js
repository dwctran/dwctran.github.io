module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#101126',
        'selected-text': '#28D8CC',
        'theme': '#28D8CC',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'card': '#252630',
        'hover-card': '#14141A',
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif'],
        'raleway': ["'Raleway'", 'sans-serif'],
        'dela': ["'Dela Gothic One'", 'cursive'],
        'yesteryear': ["'Yesteryear'", 'cursive'],
      },
      boxShadow: {
        'custom': '8px 8px 0 0 rgba(40,216,204,1)',
        'custom_2': '8px 0px 0 0 rgba(40,216,204,1)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      padding: ['hover'],
      transform: ['hover', 'focus'],
      textColor: ['active', 'group-focus'],
      dropShadow: ['hover', 'focus'],
      fontWeight: ['hover', 'focus', 'active'],
      textColor: ['visited'],
      backgroundColor: ['active', 'hover'],
      borderRadius: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
    },
  },
}
