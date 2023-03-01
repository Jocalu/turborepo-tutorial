const sharedConfig = require('./jest-common')

module.exports = {
  ...sharedConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
    '^.+\\.js$': 'esbuild-jest'
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null
}
