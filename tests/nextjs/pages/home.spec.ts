import { expect } from "@playwright/test";
import { test } from "../../test.ts";

test.describe("Home Page @coverage", () => {
  test("should display header", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(page.locator("h1")).toHaveText("Portfolio template!");
  });
});
