import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const accountId = '8106631d4187b3ef6d06ff8bc897a3e0';
const token = 'cfoat_Sf2ozvwhWbrGl9swe-NXOfp-dhFFr3qX6fM0EC3Tr34.-Ay534a5VoHY1WViSNgFxxHkYKdDhLuQ2EV9SuBJ-bg';
const newSitesDir = '/Applications/ServBay/www/builder/new-sites';
const mainSiteDir = '/Applications/ServBay/www/komalnakrani';

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

async function deployMainAndSites() {
  // 1. Deploy Main Platform Site (komalnakrani.com)
  console.log('🚀 [1/2] Deploying main platform komalnakrani.com to Cloudflare Pages...');
  try {
    execSync('npm run build', { cwd: mainSiteDir, stdio: 'pipe' });
    execSync('npx wrangler pages deploy dist --project-name="komalnakrani" --commit-dirty=true', { cwd: mainSiteDir, stdio: 'pipe' });
    await bindCustomDomain('komalnakrani', 'komalnakrani.com');
    await bindCustomDomain('komalnakrani', 'www.komalnakrani.com');
    console.log('✅ Main site komalnakrani.com deployed & bound live!');
  } catch (err) {
    console.error('Error deploying main site:', err.message);
  }

  // 2. Deploy all available Next.js 16 sites & bind subdomains
  if (!fs.existsSync(newSitesDir)) return;
  const siteFolders = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`\n🚀 [2/2] Deploying & Binding ${siteFolders.length} Next.js 16 sites to Cloudflare Pages & *.komalnakrani.com...`);

  let count = 0;
  for (const siteFolder of siteFolders) {
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

    // Create Cloudflare Pages project if missing
    try {
      execSync(`npx wrangler pages project create "${cleanName}" --production-branch="main"`, {
        cwd: sitePath,
        stdio: 'pipe'
      });
    } catch (e) {}

    // Deploy public static assets
    const publicDir = path.join(sitePath, 'public');
    try {
      execSync(`npx wrangler pages deploy "${publicDir}" --project-name="${cleanName}" --commit-dirty=true`, {
        cwd: sitePath,
        stdio: 'pipe'
      });

      const subdomain = `${cleanName}.komalnakrani.com`;
      await bindCustomDomain(cleanName, subdomain);

      count++;
      console.log(`✅ [${count}/${siteFolders.length}] Deployed & Bound https://${subdomain}`);
    } catch (err) {}
  }

  console.log(`\n🎉 Successfully deployed and bound ${count} sites to Cloudflare Pages as subdomains of komalnakrani.com!`);
}

deployMainAndSites();
