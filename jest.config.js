const path = require('path')
const { pathsToModuleNameMapper } = require('ts-jest')

const { compilerOptions } = require('./tsconfig')

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'node',
  rootDir: path.resolve(__dirname),
  coverageProvider: 'babel',
  testMatch: ['<rootDir>/__tests__/**/?(*.)(spec|test).[jt]s'],
  setupFiles: ['<rootDir>/__tests__/setupTests.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  collectCoverageFrom: [
    './src/**/*.[jt]s',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/dist/**',
    '!**/build/**'
  ]
}
