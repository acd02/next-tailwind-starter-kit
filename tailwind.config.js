module.exports = {
  content: [
    './src/components/**/*.ts',
    './src/components/**/*.tsx',
    './src/charts/**/*.tsx',
    './src/pages/**/*.ts',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'down-arrow': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      },
    },
  },
}
