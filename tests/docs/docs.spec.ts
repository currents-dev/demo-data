import { test, expect } from "@playwright/test";

test.describe(
  "@docs",
  {
    annotation: {
      type: "owner",
      description: "@agency",
    },
  },
  () => {
    test("should have consistent visuals", async ({ page }) => {
      await page.goto("https://currents.dev/");
      await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
    });
  }
);
