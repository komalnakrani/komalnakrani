import fs from 'node:fs';
import path from 'node:path';

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
      console.log(`✅ [Cloudflare Domain Bound] ${domainName} ➔ Pages Project "${projectName}"`);
    } else {
      console.log(`Notice for ${domainName}: ${data.errors?.[0]?.message || 'Already bound'}`);
    }
  } catch (e) {
    console.error(`Error binding ${domainName}:`, e.message);
  }
}

async function bindAllSites() {
  console.log('Binding main domain komalnakrani.com & www.komalnakrani.com to Pages project "komalnakrani"...');
  await bindCustomDomain('komalnakrani', 'komalnakrani.com');
  await bindCustomDomain('komalnakrani', 'www.komalnakrani.com');

  if (!fs.existsSync(newSitesDir)) return;
  const siteFolders = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`Binding custom subdomains (*.komalnakrani.com) for ${siteFolders.length} theme projects...`);

  for (const siteFolder of siteFolders) {
    let projectName = siteFolder
      .replace(/\.webflow\.io$/g, '')
      .replace(/webflow-html-website-template/g, 'template')
      .replace(/webflow-ecommerce-template/g, 'ecommerce')
      .replace(/-webflow-/g, '-')
      .replace(/^webflow-/g, '')
      .replace(/-webflow$/g, '')
      .replace(/webflow/g, 'komal')
      .toLowerCase();

    const customSubdomain = `${projectName}.komalnakrani.com`;
    await bindCustomDomain(projectName, customSubdomain);
  }

  console.log('\n🎉 Finished binding custom domains across all Cloudflare Pages projects!');
}

bindAllSites();
