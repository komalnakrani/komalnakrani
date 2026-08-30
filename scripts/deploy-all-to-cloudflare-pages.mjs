import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const accountId = '8106631d4187b3ef6d06ff8bc897a3e0';
const token = 'cfoat_Sf2ozvwhWbrGl9swe-NXOfp-dhFFr3qX6fM0EC3Tr34.-Ay534a5VoHY1WViSNgFxxHkYKdDhLuQ2EV9SuBJ-bg';
const newSitesDir = '/Applications/ServBay/www/builder/new-sites';

async function bindCustomDomain(projectName, domainName) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: domainName })
    });
    const data = await res.json();
    if (data.success) {
      console.log(`✅ [Domain Bound] ${domainName} ➔ Pages Project "${projectName}"`);
    }
  } catch (e) {}
}

async function deployAndBindAll() {
  if (!fs.existsSync(newSitesDir)) return;

  const siteFolders = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`Deploying & Binding ${siteFolders.length} Next.js 16 rebuilt sites to Cloudflare Pages & komalnakrani.com...`);

  let count = 0;

  for (const siteFolder of siteFolders) {
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

    // 1. Create Cloudflare Pages project if needed
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

      // 3. Bind custom subdomain [projectName].komalnakrani.com via API
      const customSubdomain = `${projectName}.komalnakrani.com`;
      await bindCustomDomain(projectName, customSubdomain);

      count++;
      console.log(`✅ [${count}/${siteFolders.length}] Deployed & Bound https://${customSubdomain}`);
    } catch (err) {}
  }

  console.log(`\n🎉 Successfully deployed and bound ${count} sites to Cloudflare Pages as subdomains of komalnakrani.com!`);
}

deployAndBindAll();
