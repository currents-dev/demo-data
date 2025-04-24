import { CurrentsConfig, currentsReporter } from "@currents/playwright";
import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
dotenv.config();

const currentsConfig: CurrentsConfig = {
  recordKey: process.env.CURRENTS_RECORD_KEY!,
  projectId: process.env.CURRENTS_PROJECT_ID!,
  coverage: {
    projects: true,
  },
};

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
  reporter: [currentsReporter(currentsConfig)],
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
    {
      name: "nextjs",
      use: { ...devices["Desktop Chrome"] },
      testDir: "./tests/nextjs",
    },
  ],
  outputDir: "test-results/",
});
