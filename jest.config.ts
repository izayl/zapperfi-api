/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary'],
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['dist', 'node_modules'],
}
