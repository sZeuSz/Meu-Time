module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom", "jest-canvas-mock"],
  transform: {
    "\\.(svg|jpg|png|webp)$": "<rootDir>/node_modules/jest-transform-stub",
  },
  setupFiles: ["matchmedia-polyfill"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
