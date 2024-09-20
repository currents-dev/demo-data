const simpleGit = require("simple-git");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const commits = require("./commits.json");
const authors = require("./authors.json");
const git = simpleGit();

async function updateGitHistory() {
  try {
    const commit = commits[new Date().getDay()];
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    await git.addConfig("user.email", randomAuthor.email, false, "local");
    await git.addConfig("user.name", randomAuthor.name, false, "local");

    // Get the current HEAD commit hash
    const headCommit = await git.revparse(["HEAD"]);

    // Force git rev-parse to return our desired branch name
    const gitDir = await git.revparse(["--git-dir"]);
    const headFile = path.join(gitDir, "HEAD");
    fs.writeFileSync(headFile, `ref: refs/heads/${commit.branch}\n`);

    // Modify the commit message
    const newCommitHash = execSync(
      `git commit-tree ${headCommit}^{tree} -p ${headCommit} -m "${commit.msg}"`
    )
      .toString()
      .trim();

    // Update the branch to point to the new commit
    fs.writeFileSync(
      path.join(gitDir, `refs/heads/${commit.branch}`),
      newCommitHash + "\n"
    );

    // Verify the branch name and commit message
    const currentBranch = execSync("git rev-parse --abbrev-ref HEAD")
      .toString()
      .trim();
    const currentMessage = execSync("git log -1 --pretty=%B").toString().trim();

    console.log(`Current branch according to git rev-parse: ${currentBranch}`);
    console.log(`Current commit message: ${currentMessage}`);

    if (currentBranch !== commit.branch || currentMessage !== commit.msg) {
      throw new Error(
        `Mismatch: expected branch "${commit.branch}" and message "${commit.msg}", got branch "${currentBranch}" and message "${currentMessage}"`
      );
    }

    console.log(
      `Updated git history with branch: ${commit.branch} and commit message: ${commit.msg}`
    );
  } catch (err) {
    console.error("Failed to execute git commands:", err);
    process.exit(1);
  }
}

updateGitHistory();
