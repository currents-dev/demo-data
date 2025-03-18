import { test, expect } from "@playwright/test";

test.describe(
  "@landing-page",
  {
    annotation: {
      type: "owner",
      description: "@agency",
    },
  },
  () => {
    test("should have consistent visuals @visual-testing", async ({ page }) => {
      await page.goto("https://currents.dev/");
      await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
    });

    test(
      "should have a live chat widget",
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
            description: "@web-team, @devops",
          },
          {
            type: "notify:slack",
            description: "user:U01RWNBFGER, team:S07JCUP81EG",
          },
        ],
      },
      () => {
        expect(true).toBe(true);
      }
    );
  }
);
