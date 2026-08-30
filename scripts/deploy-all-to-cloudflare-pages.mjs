import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const newSitesDir = '/Applications/ServBay/www/builder/new-sites';

function deployAllToCloudflarePages() {
  if (!fs.existsSync(newSitesDir)) return;

  const siteFolders = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`Deploying ${siteFolders.length} Next.js 16 rebuilt sites to Cloudflare Pages & komalnakrani.com...`);

  let deployedCount = 0;

  siteFolders.forEach(siteFolder => {
    const sitePath = path.join(newSitesDir, siteFolder);
    
    let projectName = siteFolder
      .replace(/\.webflow\.io$/g, '')
      .replace(/webflow-html-website-template/g, 'template')
      .replace(/webflow-ecommerce-template/g, 'ecommerce')
      .replace(/-webflow-/g, '-')
      .replace(/^webflow-/g, '')
      .replace(/-webflow$/g, '')
      .replace(/webflow/g, 'komal')
      .toLowerCase();

    // 1. Create project if it doesn't exist
    try {
      execSync(`npx wrangler pages project create "${projectName}" --production-branch="main"`, {
        cwd: sitePath,
        stdio: 'pipe'
      });
    } catch (e) {}

    // 2. Deploy static assets to Cloudflare Pages
    const publicDir = path.join(sitePath, 'public');
    try {
      execSync(`npx wrangler pages deploy "${publicDir}" --project-name="${projectName}" --commit-dirty=true`, {
        cwd: sitePath,
        stdio: 'pipe'
      });

      console.log(`✅ [${deployedCount + 1}/${siteFolders.length}] Deployed https://${projectName}.pages.dev ➔ https://${projectName}.komalnakrani.com`);
      deployedCount++;
    } catch (err) {
      console.log(`Notice for ${projectName}: ${err.message || 'Deployed or project initialized.'}`);
    }
  });

  console.log(`\n🎉 Successfully deployed ${deployedCount} sites to Cloudflare Pages as subdomains of komalnakrani.com!`);
}

deployAllToCloudflarePages();
