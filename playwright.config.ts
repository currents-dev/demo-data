import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  retries: 3,
  use: {
    baseURL: "https://currents.dev",
    trace: "on",
    video: "on",
    screenshot: "on",
  },
  projects: [
    {
      name: "web-app",
      use: { ...devices["Desktop Chrome"] },
      testDir: "./tests/web-app",
    },
    {
      name: "docs",
      use: { ...devices["Desktop Chrome"] },
      testDir: "./tests/docs",
    },
    {
      name: "landing-page",
      use: { ...devices["Desktop Chrome"] },
      testDir: "./tests/landing-page",
    },
  ],
});
