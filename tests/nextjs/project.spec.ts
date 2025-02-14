import { expect } from "@playwright/test";
import { test } from "../test.ts";

test.describe("Projects Page", () => {
  test("should display the correct text", async ({ page }) => {
    await page.goto("http://localhost:3000/projects");

    await expect(page.locator("h1")).toHaveText("Projects");

    await expect(
      page.locator("xpath=//html/body/main/section/div/a[1]/div/h2")
    ).toHaveText("Mithril AI");
  });
});
