module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/i18n/languages.js',
    'src/hooks/useTheme.js',
    'src/content/articles/index.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'lcov'],
  coverageThreshold: {
    global: { branches: 70, functions: 80, lines: 80, statements: 80 },
  },
  moduleNameMapper: {
    '\\.(css|jpg|jpeg|png|svg)$': '<rootDir>/src/test/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  testEnvironment: 'jsdom',
}
