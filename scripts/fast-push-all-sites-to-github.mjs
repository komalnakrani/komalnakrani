import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const newSitesDir = '/Applications/ServBay/www/builder/new-sites';
const owner = 'alpeshznakrani';

async function pushSiteToGitHub(siteFolder) {
  const sitePath = path.join(newSitesDir, siteFolder);

  let cleanName = siteFolder
    .replace(/\.webflow\.io$/g, '')
    .replace(/webflow-html-website-template/g, 'template')
    .replace(/webflow-ecommerce-template/g, 'ecommerce')
    .replace(/-webflow-/g, '-')
    .replace(/^webflow-/g, '')
    .replace(/-webflow$/g, '')
    .replace(/webflow/g, 'komal')
    .toLowerCase();

  // Clean lock files
  try {
    const lockFile = path.join(sitePath, '.git', 'index.lock');
    if (fs.existsSync(lockFile)) fs.unlinkSync(lockFile);
  } catch (e) {}

  // 1. Check or create private GitHub repo
  try {
    execSync(`gh repo view "${owner}/${cleanName}"`, { stdio: 'pipe' });
  } catch (err) {
    try {
      execSync(`gh repo create "${owner}/${cleanName}" --private --confirm`, { stdio: 'pipe' });
      console.log(`✨ Created private GitHub repo: ${owner}/${cleanName}`);
    } catch (e) {}
  }

  // 2. Initialize git if needed and set remote
  try {
    if (!fs.existsSync(path.join(sitePath, '.git'))) {
      execSync('git init -b main', { cwd: sitePath, stdio: 'pipe' });
    }

    try {
      execSync(`git remote add origin https://github.com/${owner}/${cleanName}.git`, { cwd: sitePath, stdio: 'pipe' });
    } catch (e) {
      execSync(`git remote set-url origin https://github.com/${owner}/${cleanName}.git`, { cwd: sitePath, stdio: 'pipe' });
    }

    execSync('git add .', { cwd: sitePath, stdio: 'pipe' });
    try {
      execSync('git commit -m "feat: initial release Next.js 16 App Router theme"', { cwd: sitePath, stdio: 'pipe' });
    } catch (e) {}

    execSync('git push -u origin main --force', { cwd: sitePath, stdio: 'pipe' });
    console.log(`✅ [Pushed GitHub] ${owner}/${cleanName}`);
  } catch (e) {
    console.error(`Error pushing ${cleanName}:`, e.message);
  }
}

async function fastPushAll() {
  if (!fs.existsSync(newSitesDir)) return;

  const siteFolders = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`Pushing all ${siteFolders.length} Next.js 16 sites to GitHub (${owner})...`);

  for (let i = 0; i < siteFolders.length; i += 10) {
    const batch = siteFolders.slice(i, i + 10);
    await Promise.all(batch.map(folder => pushSiteToGitHub(folder)));
    console.log(`🚀 Progress: [${Math.min(i + 10, siteFolders.length)} / ${siteFolders.length}] sites processed.`);
  }

  console.log(`\n🎉 All ${siteFolders.length} Next.js 16 sites pushed to private GitHub repos under ${owner}!`);
}

fastPushAll();
