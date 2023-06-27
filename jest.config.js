/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  testRegex: "(/tests/.*|\\.test)\\.ts$",
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  transform: { "^.+\\.ts?$": "ts-jest" },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
