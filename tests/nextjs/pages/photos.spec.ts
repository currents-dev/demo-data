import { expect } from "@playwright/test";
import { test } from "../../test.ts";

test.describe("Photos Page @coverage", () => {
  test("should handle navigation", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.waitForLoadState("networkidle");

    // Test navigation
    await page.click('a[href="/photos"]');
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/.*photos/);
  });

  test("should handle counter interactions", async ({ page }) => {
    await page.goto("http://localhost:3000/photos");
    await page.waitForLoadState("networkidle");

    // Initial state
    const counter = page.locator("#counter");
    await expect(counter).toBeVisible();
    await expect(counter.locator("span")).toHaveText("0");

    // Increment
    await counter.locator("button:has-text('+')").click();
    await expect(counter.locator("span")).toHaveText("1");

    // Decrement
    await counter.locator("button:has-text('-')").click();
    await expect(counter.locator("span")).toHaveText("0");
  });
});
