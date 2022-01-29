const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

const ignores = [
  '/node_modules/',
  '/__fixtures__/',
  '/fixtures/',
  '/__tests__/helpers/',
  '/__tests__/utils/',
  '__mocks__',
  '__stubs__',
]

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  testMatch: ['<rootDir>/src/**/__tests__/*.spec.(js|ts|tsx)'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|svg)$':
      '<rootDir>/jest/moduleMapper/fileMock.ts',
  },
  testPathIgnorePatterns: [...ignores],
  collectCoverageFrom: ['src/**/*.+(js|jsx|ts|tsx)'],
  coveragePathIgnorePatterns: [
    ...ignores,
    'jest/',
    '<rootDir>/src/pages/',
    'src/(umd|cjs|esm)-entry.js$',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setupAfterEnv.ts'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
