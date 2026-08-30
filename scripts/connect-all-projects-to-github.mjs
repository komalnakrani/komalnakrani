import fs from 'node:fs';
import path from 'node:path';

const accountId = '8106631d4187b3ef6d06ff8bc897a3e0';
const token = 'cfoat_Sf2ozvwhWbrGl9swe-NXOfp-dhFFr3qX6fM0EC3Tr34.-Ay534a5VoHY1WViSNgFxxHkYKdDhLuQ2EV9SuBJ-bg';
const owner = 'alpeshznakrani';
const newSitesDir = '/Applications/ServBay/www/builder/new-sites';

async function connectProjectToGitHub(projectName, repoName) {
  // 1. Delete direct-upload project if exists
  try {
    await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
  } catch (e) {}

  // 2. Create GitHub connected project
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: projectName,
        production_branch: 'main',
        build_config: {
          build_command: 'npm run build',
          destination_dir: 'out',
          root_dir: ''
        },
        source: {
          type: 'github',
          config: {
            owner,
            repo_name: repoName,
            production_branch: 'main',
            deployments_enabled: true,
            production_deployments_enabled: true
          }
        }
      })
    });
    const data = await res.json();
    if (data.success) {
      console.log(`✅ [GitHub Connected] Pages project "${projectName}" ➔ https://github.com/${owner}/${repoName}`);
    } else {
      console.log(`Notice for "${projectName}":`, data.errors?.[0]?.message || 'Already connected');
    }

    // 3. Bind custom subdomain [projectName].komalnakrani.com
    const domainUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects/${projectName}/domains`;
    await fetch(domainUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: `${projectName}.komalnakrani.com` })
    });
  } catch (err) {
    console.error(`Error connecting ${projectName}:`, err.message);
  }
}

async function runAutoConnect() {
  if (!fs.existsSync(newSitesDir)) return;

  const siteFolders = fs.readdirSync(newSitesDir).filter(f => fs.statSync(path.join(newSitesDir, f)).isDirectory());

  console.log(`Connecting ${siteFolders.length} Cloudflare Pages projects to GitHub repos under ${owner}...`);

  let count = 0;
  for (const folder of siteFolders) {
    let repoName = folder
      .replace(/\.webflow\.io$/g, '')
      .replace(/webflow-html-website-template/g, 'template')
      .replace(/webflow-ecommerce-template/g, 'ecommerce')
      .replace(/-webflow-/g, '-')
      .replace(/^webflow-/g, '')
      .replace(/-webflow$/g, '')
      .replace(/webflow/g, 'komal')
      .toLowerCase();

    let projectName = repoName;

    await connectProjectToGitHub(projectName, repoName);
    count++;
  }

  console.log(`\n🎉 Successfully connected ${count} Cloudflare Pages projects to their respective GitHub repos!`);
}

runAutoConnect();
