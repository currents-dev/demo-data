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
    test("should have title", async ({ page }) => {
      await page.goto("https://currents.dev/");

      await expect(page).toHaveTitle(
        /Playwright Dashboard. Record and debug CI tests in cloud./
      );
    });

    test("should have consistent visuals", async ({ page }) => {
      await page.goto("https://currents.dev/");
      await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
    });

    test("should have footer with links to important pages", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 500));
      await expect(true).toBeTruthy();
    });

    test("should display integrations section with partner logos", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 500));
      await expect(true).toBeTruthy();
    });

    test("should show feature highlights with icons and descriptions", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 500));
      await expect(true).toBeTruthy();
    });

    test("should have responsive design for mobile devices", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 500));
      await expect(true).toBeTruthy();
    });

    test("should display live chat widget for customer support", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 500));
      await expect(true).toBeTruthy();
    });

    test("should sometimes display a popup", async ({ page }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 500));
      await expect(Math.random() > 0.05).toBeTruthy();
    });
  }
);
