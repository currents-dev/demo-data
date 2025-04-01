import { expect } from "@playwright/test";
import { test } from "../../test.ts";

test.describe("Photos Page @coverage", () => {
  test("should display the correct text", async ({ page }) => {
    await page.goto("http://localhost:3000/photos");

    await expect(page.locator("h1")).toHaveText("Photos");
  });
});
