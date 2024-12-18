const config = {
  testMatch: ['**/test/**/*.test.[jt]s?(x)'],

  setupFiles: ['fake-indexeddb/auto'],

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};

module.exports = config;
