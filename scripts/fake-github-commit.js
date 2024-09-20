const simpleGit = require("simple-git");
const commits = require("./fake-github-data.json");
const git = simpleGit();

async function createCommitAndCheckoutBranch() {
  try {
    const commit = commits[new Date().getDay()];

    await git.checkoutLocalBranch(commit.branch);
    await git.commit(commit.msg, { "--allow-empty": null });
  } catch (err) {
    console.error("Failed to execute git commands:", err);
  }
}

createCommitAndCheckoutBranch();
