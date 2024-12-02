const config = {
  testMatch: ["**/tests/**/*.test.[jt]s?(x)"],
  setupFiles: ["fake-indexeddb/auto"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.(png|jpe?g|gif|svg|ico)$": "<rootDir>/tests/__mocks__/fileMock.js",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/scripts/**/*.js",
    "!src/scripts/index.js",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
};

module.exports = config;
