// Writes version.json from package.json at build time (HYGIENE 19: one version, one place).
// Runs in Workers Builds before wrangler; never edit version.json by hand.
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const manifest = JSON.parse(readFileSync('_ds_manifest.json', 'utf8'));
const sh = c => { try { return execSync(c, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { return null; } };
const out = {
  name: pkg.name,
  version: pkg.version,
  namespace: manifest.namespace,
  components: (manifest.components || []).length,
  commit: process.env.WORKERS_CI_COMMIT_SHA || sh('git rev-parse HEAD'),
  branch: process.env.WORKERS_CI_BRANCH || sh('git rev-parse --abbrev-ref HEAD'),
  built_at: new Date().toISOString(),
  bundle: '/_ds_bundle.js',
  styles: '/styles.css',
  contract: '/CONTRACT.md'
};
writeFileSync('version.json', JSON.stringify(out, null, 2) + '\n');
console.log('stamped', out.version, out.commit?.slice(0, 7));
