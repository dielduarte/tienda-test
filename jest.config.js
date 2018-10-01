module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/node_modules/', '/config/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/config/setupTests.js'],
  collectCoverageFrom: [
    '<rootDir>/components/**/**.js',
    '!<rootDir>/components/**/{index,mdx}.js'
  ]
};
