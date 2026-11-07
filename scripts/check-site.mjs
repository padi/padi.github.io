// Checks the built site in dist/: run `npm run build` first, then `npm run check:site`.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const redirects = JSON.parse(readFileSync(new URL('../src/data/redirects.json', import.meta.url), 'utf8'));
const problems = [];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

const resolves = (path) => {
  const clean = decodeURI(path.split(/[?#]/)[0]);
  const target = join(dist, clean);
  return (existsSync(target) && statSync(target).isFile()) || existsSync(join(target, 'index.html'));
};

const pages = walk(dist).filter((file) => file.endsWith('.html') && !file.includes('/pagefind/'));

// Every internal link and asset points at something that was built.
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"/][^"]*|\/)"/g)) {
    if (!resolves(url)) problems.push(`${relative(dist, file)} links to missing ${url}`);
  }
  for (const [, id] of html.matchAll(/href="\/about\/#([\w-]+)"/g)) {
    const about = readFileSync(join(dist, 'about/index.html'), 'utf8');
    if (!about.includes(`id="${id}"`)) problems.push(`${relative(dist, file)} links to missing #${id} on About`);
  }
}

// Every old URL still lands on a real page.
for (const [from, to] of Object.entries(redirects)) {
  if (!resolves(from)) problems.push(`old URL ${from} has no redirect page`);
  if (!resolves(to)) problems.push(`old URL ${from} redirects to missing ${to}`);
}

// Drafts stay out, and the published count is what we expect.
const notes = readdirSync(join(dist, 'notes')).filter((name) => statSync(join(dist, 'notes', name)).isDirectory());
const sources = readdirSync(new URL('../src/content/notes/', import.meta.url));
for (const source of sources) {
  const text = readFileSync(new URL(`../src/content/notes/${source}`, import.meta.url), 'utf8');
  const isDraft = /^draft: true$/m.test(text.split(/^---$/m)[1] ?? '');
  const built = notes.includes(source.replace(/\.md$/, ''));
  if (isDraft && built) problems.push(`draft ${source} was published`);
  if (!isDraft && !built) problems.push(`note ${source} was not published`);
}

// Sitemap lists real pages only, never redirects.
const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
const listed = [...sitemap.matchAll(/<loc>https:\/\/padi\.github\.io([^<]*)<\/loc>/g)].map((match) => match[1]);
for (const path of listed) {
  if (path in redirects) problems.push(`sitemap lists redirect ${path}`);
  if (!resolves(path)) problems.push(`sitemap lists missing ${path}`);
}

const placeholders = pages.filter((file) => readFileSync(file, 'utf8').includes('class="ph"')).map((file) => relative(dist, file));

console.log(`${pages.length} pages, ${notes.length} notes, ${Object.keys(redirects).length} old URLs, ${listed.length} sitemap entries`);
if (placeholders.length) console.log(`Placeholders still to fill: ${placeholders.join(', ')}`);
if (problems.length) {
  console.error(`\n${problems.length} problems:\n${problems.join('\n')}`);
  process.exit(1);
}
console.log('No problems found.');
