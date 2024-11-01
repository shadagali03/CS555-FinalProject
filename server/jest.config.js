export default {
  // jest.config.js
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/api/tests/setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
