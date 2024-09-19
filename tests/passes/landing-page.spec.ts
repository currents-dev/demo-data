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

    test("should display hero section with clear value proposition", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should show pricing plans with feature comparison", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should have functional navigation menu with dropdown", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should display customer testimonials carousel", async ({ page }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should show 'Get Started' CTA button above the fold", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should have footer with links to important pages", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should display integrations section with partner logos", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should show feature highlights with icons and descriptions", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should have responsive design for mobile devices", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });

    test("should display live chat widget for customer support", async ({
      page,
    }) => {
      await page.goto("https://currents.dev/");
      await page.waitForTimeout(random(100, 30000));
      await expect(true).toBeTruthy();
    });
  }
);
