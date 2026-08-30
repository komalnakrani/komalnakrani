import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const targetDir = '/Applications/ServBay/www/komal-data';

function connectVercelProjects() {
  const dirs = fs.readdirSync(targetDir).filter((f) => {
    return fs.statSync(path.join(targetDir, f)).isDirectory();
  });

  console.log(`Connecting ${dirs.length} GitHub repositories directly to Vercel...`);

  let connectedCount = 0;

  dirs.forEach((dirName) => {
    const repoPath = path.join(targetDir, dirName);
    console.log(`Connecting ${dirName} to Vercel via GitHub...`);

    try {
      execSync('npx vercel link --yes', { cwd: repoPath, stdio: 'pipe' });
      execSync('npx vercel --prod --yes', { cwd: repoPath, stdio: 'pipe' });
      console.log(`✅ Connected & deployed ${dirName} on Vercel.`);
      connectedCount++;
    } catch (err) {
      console.log(`Notice for ${dirName}: ${err.message || 'Connected or already initialized.'}`);
    }
  });

  console.log(`\n🎉 Connected ${connectedCount} GitHub theme repositories to Vercel!`);
}

connectVercelProjects();
