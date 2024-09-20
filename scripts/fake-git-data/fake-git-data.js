const simpleGit = require("simple-git");
const commits = require("./commits.json");
const authors = require("./authors.json");
const git = simpleGit();

async function createCommitAndCheckoutBranch() {
  try {
    const commit = commits[new Date().getDay()];
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    await git.addConfig("user.email", randomAuthor.email, false, "local");
    await git.addConfig("user.name", randomAuthor.name, false, "local");

    await git.checkout(["-B", commit.branch]);
    await git.commit(commit.msg, { "--allow-empty": null });

    // Set environment variables to override GitHub Actions values
    process.env.GITHUB_SHA = await git.revparse(["HEAD"]);
    process.env.GH_BRANCH = commit.branch;
    process.env.GITHUB_REF = `refs/heads/${commit.branch}`;
  } catch (err) {
    console.error("Failed to execute git commands:", err);
  }
}

createCommitAndCheckoutBranch();
