import fs from 'fs';
import fetch from 'node-fetch';

const cfg = JSON.parse(fs.readFileSync('config.json'));
const outPath = 'data/data.json';

async function getRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    if (!res.ok) throw new Error('GitHub API error ' + res.status);
    const data = await res.json();
    // sort by updated_at desc
    data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return data.map(r => ({ name: r.name, html_url: r.html_url, description: r.description, language: r.language }));
}

async function getLinkedInAbout(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) return null;
        const text = await res.text();
        // naive extraction: find 'About' section text between known markers
        const aboutMatch = text.match(/About[\s\S]{0,800}/i);
        // fallback simple: try to find meta description
        const metaMatch = text.match(/<meta name=\"description\" content=\"([^\"]+)\"/i);
        if (metaMatch) return metaMatch[1];
        return null;
    } catch (e) { console.error('linkedin fetch error', e); return null }
}

(async() => {
    try {
        const repos = await getRepos(cfg.github_username);
        const about = await getLinkedInAbout(cfg.linkedin_url) || cfg.role;
        const out = { about, repos };
        fs.mkdirSync('data', { recursive: true });
        fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
        console.log('Wrote', outPath);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();