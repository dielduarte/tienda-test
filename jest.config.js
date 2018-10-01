module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/node_modules/', '/config/enzyme.js'],
  setupFiles: ['<rootDir>/config/enzyme.js']
};
