# Deploy — push only

This repo is served as static assets by the Cloudflare Worker **bible-glass** at **https://bible-glass.klappy.dev**. There is no Worker script; the only build step is `npm run build` → `scripts/stamp.mjs`, which writes `version.json` from `package.json` (the one version, HYGIENE 19); `wrangler.jsonc` points `assets.directory` at the repo root and `.assetsignore` trims what is uploaded.

**No seat deploys.** Cloudflare Workers Builds is connected to this repository (wired by API on 2026-09-11, kitchen HYGIENE 10a/12a, mcp-server-build-convention §10; script tag `23393ac8124344bb90a067853a17ba7a`, triggers `713a90d1…` main / `49acdcd9…` branches):

- **main** → `npm run build` then `npx wrangler deploy` → production at bible-glass.klappy.dev
- **any other branch** → `npm run build` then `npx wrangler versions upload` → preview at `<branch-slug>-bible-glass.klappy.workers.dev`; production untouched

"Deployed" in a PR means a build UUID and its outcome (`GET /accounts/{id}/builds/workers/{tag}/builds`), not a shell log. Running `wrangler deploy` from any machine is 86'd.

## What is committed that a compiler produces
`_ds_bundle.js` and `_ds_manifest.json` are compiled by the Claude design design-system project from `components/**/*.jsx` and committed here so the kits and consumers load them from one URL. Regenerate by syncing that project and pushing; never hand-edit.

## Consume
```html
<link rel="stylesheet" href="https://bible-glass.klappy.dev/styles.css">
<script src="https://bible-glass.klappy.dev/_ds_bundle.js"></script>
```
The bundle exposes `window.GenerativeGlassDesignSystem_1a4c8e` (React 18 required on the page).

## Version
`GET https://bible-glass.klappy.dev/version.json` → `{ version, namespace, components, commit, branch, built_at }`. See `CONTRACT.md` for what the number means to the apps and `APPS.md` for who is on which.
