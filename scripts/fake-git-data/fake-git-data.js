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
  } catch (err) {
    console.error("Failed to execute git commands:", err);
  }
}

createCommitAndCheckoutBranch();
