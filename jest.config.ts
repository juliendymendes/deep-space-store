import type { Config } from "jest";

const config: Config = {
  clearMocks: false,

  collectCoverage: true,

  collectCoverageFrom: ["src/**"],

  coverageDirectory: "tests/coverage",

  coverageProvider: "v8",

  testEnvironment: "jsdom",
};

export default config;
