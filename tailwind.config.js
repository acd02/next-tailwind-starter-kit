const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/pagesContent/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'important'],
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
  ],
}
