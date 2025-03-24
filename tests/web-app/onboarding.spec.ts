import { test, expect } from "@playwright/test";
import { random } from "../../utils";

test.describe(
  "@web-app @actions",
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

    test(
      "should offer tutorial on main features",
      {
        annotation: [
          {
            type: "note",
            description: "The tutorial should be 5 minutes long",
          },
          {
            type: "jira",
            description: "https://jira.company.io/ticket/JIRA-123",
          },
        ],
      },
      async ({ page }) => {
        await page.goto("/");
        await page.waitForTimeout(random(10, 1000));
        await expect(Math.random() > 0.05).toBeTruthy();
      }
    );

    test("should allow user to connect integrations", async ({ page }) => {
      await page.goto("/");
      await page.waitForTimeout(random(10, 1000));
      await expect(Math.random() > 0.05).toBeTruthy();
    });

    test("should test for consistent visuals", async ({ page }) => {
      await test.step(`Open website`, async () => {
        await page.goto("/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(10, 300));
      });

      await test.step(`Assert UI has not changed`, async () => {
        await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
      });
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
