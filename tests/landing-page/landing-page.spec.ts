import { test, expect } from "@playwright/test";
import { random } from "../../utils";

test.describe(
  "@landing-page",
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
