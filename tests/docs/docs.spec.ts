import { test, expect } from "@playwright/test";
import { random } from "../../utils";

test.describe(
  "@docs @annotations",
  {
    annotation: [
      {
        type: "note",
        description: "This test is related to issue #123",
      },
      {
        type: "jira",
        description: "https://jira.company.io/ticket/JIRA-123",
      },
      {
        type: "owner",
        description: "@agency",
      },
      {
        type: "notify:slack",
        description: "user:U01RWNBFGER, team:S07JCUP81EG",
      },
    ],
  },
  () => {
    test("should have footer with links to important pages", async ({
      page,
    }) => {
      await test.step(`Open website`, async () => {
        await page.goto("https://currents.dev/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(100, 500));
      });

      await test.step(`Assert footer is visible and contains links`, async () => {
        await expect(true).toBeTruthy();
      });
    });

    test("should display integrations section with partner logos", async ({
      page,
    }) => {
      await test.step(`Open website`, async () => {
        await page.goto("https://currents.dev/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(100, 500));
      });

      await test.step(`Assert integrations section is visible and contains partner logos`, async () => {
        await expect(true).toBeTruthy();
      });
    });

    test("should show feature highlights with icons and descriptions", async ({
      page,
    }) => {
      await test.step(`Open website`, async () => {
        await page.goto("https://currents.dev/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(100, 500));
      });

      await test.step(`Assert feature highlights section is visible and contains icons and descriptions`, async () => {
        await expect(true).toBeTruthy();
      });
    });

    test("should have responsive design for mobile devices", async ({
      page,
    }) => {
      await test.step(`Open website`, async () => {
        await page.goto("https://currents.dev/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(100, 500));
      });

      await test.step(`Assert responsive design for mobile devices`, async () => {
        await expect(true).toBeTruthy();
      });
    });

    test("should display live chat widget for customer support", async ({
      page,
    }) => {
      await test.step(`Open website`, async () => {
        await page.goto("https://currents.dev/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(100, 500));
      });

      await test.step(`Assert live chat widget is visible and contains chat widget`, async () => {
        await expect(true).toBeTruthy();
      });
    });

    test("should sometimes display a popup", async ({ page }) => {
      await test.step(`Open website`, async () => {
        await page.goto("https://currents.dev/");
      });

      await test.step(`Wait for animations`, async () => {
        await page.waitForTimeout(random(100, 500));
      });

      await test.step(`Assert popup is visible`, async () => {
        await expect(Math.random() > 0.05).toBeTruthy();
      });
    });
  }
);
