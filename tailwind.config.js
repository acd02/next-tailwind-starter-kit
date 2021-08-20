const colors = require('./tailwind/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/pagesContent/**/*.tsx',
  ],
  theme: {
    colors,
  },
}
