import type { InitialOptionsTsJest } from 'ts-jest'

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.spec.ts'],
  setupFiles: ['dotenv/config'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary'],
  testEnvironment: 'jest-environment-node',
  watchPathIgnorePatterns: ['dist', 'node_modules'],
}

export default config
