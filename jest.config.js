module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '**/src/**/*.test.[jt]s?(x)',
  ],
  transformIgnorePatterns: [],
  collectCoverage: true,
};
