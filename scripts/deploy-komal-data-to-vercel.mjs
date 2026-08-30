import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const targetDir = '/Applications/ServBay/www/komal-data';

function deployThemesToVercel() {
  const dirs = fs.readdirSync(targetDir).filter((f) => {
    return fs.statSync(path.join(targetDir, f)).isDirectory();
  });

  console.log(`Starting Vercel deployment for ${dirs.length} theme repositories...`);

  let deployedCount = 0;

  dirs.forEach((dirName) => {
    const repoPath = path.join(targetDir, dirName);
    console.log(`Deploying ${dirName} to Vercel...`);

    try {
      execSync('npx vercel --prod --yes', {
        cwd: repoPath,
        stdio: 'pipe'
      });
      console.log(`✅ Successfully deployed ${dirName} to Vercel.`);
      deployedCount++;
    } catch (err) {
      console.log(`Notice for ${dirName}: ${err.message || 'Deployment completed or skipped.'}`);
    }
  });

  console.log(`\n🎉 Deployed ${deployedCount} theme projects to Vercel!`);
}

deployThemesToVercel();
