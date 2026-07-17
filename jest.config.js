export default {
  verbose: true,
  testMatch: ['**/*.spec.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  setupFilesAfterEnv: ['<rootDir>/spec/utils/setup.js'],
  transform: {
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(vue)$': '@vue/vue3-jest',
    '.*\\.(yml)$': '<rootDir>/spec/utils/rawTransform.js'
  },
  moduleFileExtensions: ['js', 'vue', 'yml'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)\\?inline$': '<rootDir>/spec/utils/inlineStyleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/spec/utils/styleMock.js',
    '^(.+\\.yml)\\?raw$': '$1'
  }
};
