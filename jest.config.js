module.exports = {
  verbose: true,
  testMatch: ['**/*.spec.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue3-jest'
  },
  moduleFileExtensions: ['js', 'vue'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/spec/utils/styleMock.js'
  }
};
