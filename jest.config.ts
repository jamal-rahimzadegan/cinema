import type { Config } from "@jest/types";
const { defaults } = require("jest-config");

// Sync object
const config: Config.InitialOptions = {
	silent: true,
	moduleDirectories: ["node_modules", "src"],
	moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./src/__tests__/setupTests.tsx"],
};

export default config;
