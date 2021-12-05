const { defaults } = require("jest-config");

module.exports = {
  // A list of paths to directories that Jest should use to search for files in
  // https://jestjs.io/docs/configuration#roots-arraystring
  roots: ["<rootDir>/src/"],

  // The test environment that will be used for testing, jsdom for browser environment
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: "jsdom",

  // Array of file extensions your modules use
  // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
  moduleFileExtensions: [...defaults.moduleFileExtensions, "vue"],

  // Jest transformations
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
    "^.+\\.vue$": "@vue/vue3-jest", // Transform Vue files using vue3-jest
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Code coverage config
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,vue}",
    "!**/__mocks__/**",
    "!**/node_modules/**",
    "!**/*.d.ts",
  ],

  // Important: order matters, specific rules should be defined first
  // https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle static assets
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle TypeScript path aliases
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};