import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const targetDir = '/Applications/ServBay/www/komal-data';

function publishRepos() {
  const dirs = fs.readdirSync(targetDir).filter((f) => {
    return fs.statSync(path.join(targetDir, f)).isDirectory();
  });

  console.log(`Found ${dirs.length} theme directories in ${targetDir}. Starting private GitHub repository creation...`);

  let published = 0;

  dirs.forEach((dirName) => {
    const repoPath = path.join(targetDir, dirName);
    const gitignorePath = path.join(repoPath, '.gitignore');

    if (!fs.existsSync(gitignorePath)) {
      fs.writeFileSync(gitignorePath, `node_modules/\n.astro/\ndist/\n.next/\n.DS_Store\n.env\n.env.local\n`);
    }

    try {
      // Check if git is initialized
      if (!fs.existsSync(path.join(repoPath, '.git'))) {
        execSync('git init -b main', { cwd: repoPath, stdio: 'pipe' });
        execSync('git add .', { cwd: repoPath, stdio: 'pipe' });
        execSync(`git commit -m "Initial release of ${dirName}"`, { cwd: repoPath, stdio: 'pipe' });
      }

      // Create private GitHub repository via gh CLI
      const repoName = `alpeshznakrani/${dirName}`;
      console.log(`Publishing private repo: ${repoName}...`);

      execSync(`gh repo create "${repoName}" --private --source=. --push`, {
        cwd: repoPath,
        stdio: 'pipe'
      });

      console.log(`✅ Successfully published ${repoName} to GitHub (Private).`);
      published++;
    } catch (err) {
      console.log(`Notice for ${dirName}: ${err.message || 'Repo may already exist or pushed.'}`);
    }
  });

  console.log(`\n🎉 Finished publishing ${published} private repositories to GitHub!`);
}

publishRepos();
