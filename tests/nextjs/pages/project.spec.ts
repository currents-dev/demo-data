import { expect } from "@playwright/test";
import { test } from "../../test.ts";

test.describe("Projects Page @coverage", () => {
  test("should handle navigation", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.waitForLoadState("networkidle");

    // Test navigation
    await page.click('a[href="/projects"]');
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/.*projects/);
  });

  test("should handle toggle interactions", async ({ page }) => {
    await page.goto("http://localhost:3000/projects");
    await page.waitForLoadState("networkidle");

    // Initial state
    const toggle = page.locator("#toggle");
    await expect(toggle).toBeVisible();
    await expect(toggle.locator("span")).toHaveText("OFF");

    // Toggle ON
    await toggle.locator("button:has-text('Toggle')").click();
    await expect(toggle.locator("span")).toHaveText("ON");

    // Toggle OFF
    await toggle.locator("button:has-text('Toggle')").click();
    await expect(toggle.locator("span")).toHaveText("OFF");
  });
});
