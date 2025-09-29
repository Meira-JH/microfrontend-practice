import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    coverageProvider: "v8",
    clearMocks: true,
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "babel-jest",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      "^consent_app/ConsentManager$": "<rootDir>/src/__mocks__/ConsentManagerMock.tsx",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
  };
};
