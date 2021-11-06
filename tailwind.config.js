const colors = require('./tailwind/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/components/**/*.ts',
    './src/components/**/*.tsx',
    './src/pages/**/*.ts',
    './src/pages/**/*.tsx',
    './src/pagesContent/**/*.ts',
    './src/pagesContent/**/*.tsx',
  ],
  theme: {
    colors,
  },
}
