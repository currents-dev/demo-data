import { expect } from "@playwright/test";
import { test } from "../test.ts";

test.describe("Footer Component @coverage", () => {
  const shouldRun = Math.random() >= 0.5;

  test("should display the current year", async ({ page }) => {
    if (!shouldRun) {
      test.skip();
      return;
    }

    await page.goto("http://localhost:3000");

    // Check if year is displayed
    await expect(page.locator("time")).toBeVisible();
    await expect(page.locator("time")).toHaveText("© 2025");
  });

  test("should validate social links", async ({ page }) => {
    if (!shouldRun) {
      test.skip();
      return;
    }

    await page.goto("http://localhost:3000");

    // Check if social links are valid
    const socialLinks = page.locator("a[target='_blank']");
    const hrefs = await socialLinks.evaluateAll((elements) =>
      elements.map((el) => el.getAttribute("href"))
    );

    // Verify each href is a valid URL
    for (const href of hrefs) {
      expect(() => new URL(href!)).not.toThrow();
    }
  });
});
