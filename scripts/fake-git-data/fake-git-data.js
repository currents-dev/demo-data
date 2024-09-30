const simpleGit = require("simple-git");
const commits = require("./commits.json");
const authors = require("./authors.json");
const fs = require("fs");
const path = require("path");
const git = simpleGit();

async function createCommitAndCheckoutBranch() {
  try {
    const commit = commits[daysIntoYear(new Date())];
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    // Git operations
    await git.addConfig("user.email", randomAuthor.email, false, "local");
    await git.addConfig("user.name", randomAuthor.name, false, "local");

    await git.checkout(["-B", commit.branch]);
    await git.commit(commit.msg, { "--allow-empty": null });

    const newSha = await git.revparse(["HEAD"]);

    // Create or update GitHub Actions event file
    const eventFilePath =
      process.env.GITHUB_EVENT_PATH ||
      path.join(__dirname, "github_event.json");
    const eventData = {
      pull_request: {
        head: {
          ref: commit.branch,
          sha: newSha,
        },
        base: {
          ref: "main",
          sha: await git.revparse(["HEAD"]).catch(() => ""),
        },
        issue_url: `https://api.github.com/repos/owner/repo/issues/${Math.floor(
          Math.random() * 1000
        )}`,
        html_url: `https://github.com/owner/repo/pull/${Math.floor(
          Math.random() * 1000
        )}`,
        title: commit.msg,
      },
      sender: {
        avatar_url: `https://avatars.githubusercontent.com/u/${Math.floor(
          Math.random() * 10000
        )}`,
        html_url: `https://github.com/${randomAuthor.name.replace(" ", "")}`,
      },
    };

    fs.writeFileSync(eventFilePath, JSON.stringify(eventData, null, 2));

    // Set environment variables
    process.env.GITHUB_SHA = newSha;
    process.env.GH_BRANCH = commit.branch;
    process.env.GITHUB_REF = `refs/heads/${commit.branch}`;
    process.env.GITHUB_EVENT_PATH = eventFilePath;
    process.env.GITHUB_ACTIONS = "true";

    console.log(`Branch created/updated: ${commit.branch}`);
    console.log(`New commit SHA: ${newSha}`);
    console.log(`GitHub event file created at: ${eventFilePath}`);
  } catch (err) {
    console.error("Failed to execute operations:", err);
  }
}

function daysIntoYear(date) {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

createCommitAndCheckoutBranch();
