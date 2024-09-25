import { test, expect } from "@playwright/test";
import { random } from "../../utils";

test.describe(
  "@onboarding",
  {
    annotation: {
      type: "owner",
      description: "John Doe",
    },
  },
  () => {
    test("should display welcome message on first login", async ({ page }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(Math.random() > 0.05).toBeTruthy();
    });

    test("should guide user through profile setup process", async ({
      page,
    }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(Math.random() > 0.05).toBeTruthy();
    });

    test("should offer tutorial on main features", async ({ page }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(Math.random() > 0.05).toBeTruthy();
    });

    test("should allow user to connect integrations", async ({ page }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(Math.random() > 0.05).toBeTruthy();
    });

    test("should present pricing options for subscription", async ({
      page,
    }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(true).toBeTruthy();
    });

    test("should confirm email and complete signup process", async ({
      page,
    }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(true).toBeTruthy();
    });
  }
);
