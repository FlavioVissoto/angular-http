module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: './coverage',
  setupFilesAdterEnv: ['<rootDir>/setup-jest.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'test-config', 'interfaces', '.module.ts', '.router.ts', '.html', 'enum'],
  testPathIgonePatterns: ['<rootDir>/node_modules', '<rootDir>/dist/', '<rootDir>/src/test.ts', '<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      function: 90,
      lines: 90,
    },
    './**/*.ts': {
      statements: 90,
      branches: 90,
      function: 90,
      lines: 90,
    },
  },
};
