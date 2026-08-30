import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const newSitesDir = '/Applications/ServBay/www/builder/new-sites';

function sanitizeContentInDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;

    if (entry.isDirectory()) {
      sanitizeContentInDir(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (['.ts', '.tsx', '.json', '.js', '.jsx', '.md', '.css', '.html'].includes(ext)) {
        try {
          let text = fs.readFileSync(fullPath, 'utf8');
          let modified = false;

          if (text.includes('Webflow') || text.includes('webflow')) {
            text = text
              .replace(/\.webflow\.io/g, '')
              .replace(/Webflow/g, 'Komal')
              .replace(/webflow/g, 'komal');
            modified = true;
          }

          if (modified) {
            fs.writeFileSync(fullPath, text, 'utf8');
          }
        } catch (e) {}
      }
    }
  }
}

function sanitizeAndPublishAllNewSites() {
  if (!fs.existsSync(newSitesDir)) return;

  const folderNames = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`Processing ${folderNames.length} new sites in ${newSitesDir}...`);

  folderNames.forEach(folderName => {
    const oldPath = path.join(newSitesDir, folderName);

    // Compute clean repo name (removing .webflow.io, webflow-, -webflow)
    let cleanName = folderName
      .replace(/\.webflow\.io$/g, '')
      .replace(/webflow-html-website-template/g, 'template')
      .replace(/webflow-ecommerce-template/g, 'ecommerce-template')
      .replace(/-webflow-/g, '-')
      .replace(/^webflow-/g, '')
      .replace(/-webflow$/g, '')
      .replace(/webflow/g, 'komal')
      .toLowerCase();

    const newPath = path.join(newSitesDir, cleanName);

    // Rename directory if needed
    if (oldPath !== newPath) {
      if (fs.existsSync(newPath)) {
        // If clean directory exists, merge or skip
      } else {
        try {
          fs.renameSync(oldPath, newPath);
          console.log(`Renamed directory: ${folderName} ➔ ${cleanName}`);
        } catch (e) {}
      }
    }

    const targetSitePath = fs.existsSync(newPath) ? newPath : oldPath;
    const finalRepoName = cleanName;

    // Sanitize all files in targetSitePath
    sanitizeContentInDir(targetSitePath);

    // Add .gitignore
    const gitignorePath = path.join(targetSitePath, '.gitignore');
    if (!fs.existsSync(gitignorePath)) {
      fs.writeFileSync(gitignorePath, `node_modules/\n.next/\ndist/\n.DS_Store\n.env\n.env.local\n`);
    }

    // Git Init & Push to GitHub Private Repository
    try {
      if (!fs.existsSync(path.join(targetSitePath, '.git'))) {
        execSync('git init -b main', { cwd: targetSitePath, stdio: 'pipe' });
      }

      execSync('git add .', { cwd: targetSitePath, stdio: 'pipe' });

      try {
        execSync('git commit -m "feat: initial release of Komal production Next.js 16 site"', {
          cwd: targetSitePath,
          stdio: 'pipe'
        });
      } catch (e) {}

      const githubRepo = `alpeshznakrani/${finalRepoName}`;

      try {
        execSync(`gh repo create "${githubRepo}" --private --source=. --push`, {
          cwd: targetSitePath,
          stdio: 'pipe'
        });
        console.log(`✅ Created & Pushed private GitHub repo: ${githubRepo}`);
      } catch (err) {
        try {
          execSync('git push -u origin main', { cwd: targetSitePath, stdio: 'pipe' });
          console.log(`✅ Synced updates to GitHub repo: ${githubRepo}`);
        } catch (e2) {
          try {
            execSync(`git remote add origin https://github.com/${githubRepo}.git`, { cwd: targetSitePath, stdio: 'pipe' });
            execSync('git push -u origin main', { cwd: targetSitePath, stdio: 'pipe' });
            console.log(`✅ Linked remote & pushed: ${githubRepo}`);
          } catch (e3) {}
        }
      }
    } catch (err) {
      console.log(`Notice for ${finalRepoName}: ${err.message || 'Complete'}`);
    }
  });

  console.log(`\n🎉 Finished sanitizing and publishing private GitHub repos for all rebuilt sites!`);
}

sanitizeAndPublishAllNewSites();
