import { mkdirSync, cpSync, rmSync, existsSync } from 'node:fs';
import {
  homePage,
  experiencePage,
  projectsPage,
  publicationsPage,
  certificationsPage,
  contactPage,
} from './pages';

// Configuration
// Set BASE_PATH for GitHub Pages project sites (e.g., "/repo-name")
// Leave empty for user/org sites (username.github.io) or custom domains
const BASE_PATH = process.env.BASE_PATH || '';

const DIST = './dist';

// Clean and create dist directory
if (existsSync(DIST)) {
  rmSync(DIST, { recursive: true });
}
mkdirSync(DIST, { recursive: true });

// Generate static HTML pages
const pages: Record<string, string> = {
  'index.html': homePage(BASE_PATH, true),
  'experience.html': experiencePage(BASE_PATH, true),
  'projects.html': projectsPage(BASE_PATH, true),
  'publications.html': publicationsPage(BASE_PATH, true),
  'certifications.html': certificationsPage(BASE_PATH, true),
  'contact.html': contactPage(BASE_PATH, true),
};

for (const [filename, html] of Object.entries(pages)) {
  await Bun.write(`${DIST}/${filename}`, html);
  console.log(`  Generated ${filename}`);
}

// Copy static assets
mkdirSync(`${DIST}/css`, { recursive: true });
mkdirSync(`${DIST}/js`, { recursive: true });
mkdirSync(`${DIST}/images`, { recursive: true });

cpSync('./public/css', `${DIST}/css`, { recursive: true });
cpSync('./public/js', `${DIST}/js`, { recursive: true });
if (existsSync('./public/images')) {
  cpSync('./public/images', `${DIST}/images`, { recursive: true });
}

console.log('  Copied static assets (css, js, images)');

// Generate API JSON files (for anyone who wants to consume the data)
mkdirSync(`${DIST}/api`, { recursive: true });
const bioData = (await import('./data/bio.json')).default;
await Bun.write(`${DIST}/api/bio.json`, JSON.stringify(bioData, null, 2));
await Bun.write(`${DIST}/api/experience.json`, JSON.stringify(bioData.experience, null, 2));
await Bun.write(`${DIST}/api/projects.json`, JSON.stringify(bioData.projects, null, 2));
await Bun.write(`${DIST}/api/skills.json`, JSON.stringify(bioData.skills, null, 2));
await Bun.write(`${DIST}/api/publications.json`, JSON.stringify(bioData.publications, null, 2));
await Bun.write(`${DIST}/api/certifications.json`, JSON.stringify(bioData.certifications, null, 2));
console.log('  Generated API JSON files');

// Create .nojekyll file (tells GitHub Pages to skip Jekyll processing)
await Bun.write(`${DIST}/.nojekyll`, '');

// Create 404.html (copy of index for SPA-like behavior)
await Bun.write(`${DIST}/404.html`, homePage(BASE_PATH, true));
console.log('  Generated 404.html');

console.log(`\nBuild complete! Output in ${DIST}/`);
console.log(`\nTo preview locally:`);
console.log(`  cd dist && bunx serve`);
console.log(`\nTo deploy to GitHub Pages:`);
console.log(`  1. Push the dist/ contents to the gh-pages branch, or`);
console.log(`  2. Configure GitHub Pages to deploy from the dist/ folder`);
if (BASE_PATH) {
  console.log(`\nBase path set to: ${BASE_PATH}`);
}
