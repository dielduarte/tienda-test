module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/node_modules/', '/config/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/config/setupTests.js'],
  collectCoverageFrom: [
    '<rootDir>/components/**/**.js',
    '<rootDir>/store/reducer.js',
    '<rootDir>/utils/**/**.js',
    '<rootDir>/containers/**/**.js',
    '!<rootDir>/containers/**/{index,mdx}.js',
    '!<rootDir>/containers/layouts/**.js',
    '!<rootDir>/components/**/{index,mdx}.js'
  ]
};
