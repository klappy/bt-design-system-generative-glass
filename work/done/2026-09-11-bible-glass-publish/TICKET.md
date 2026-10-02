# TICKET — bible-glass.klappy.dev: publish the design system as a static Worker

Class: **fast food** — ordered and cooked in one session by captain instruction ("bible-glass.klappy.dev… gh setup to be githooks and autodeployed on branch pushes").
Meal: 2026-09-11-generative-glass-ds-compile (follows dish 4).
Repo in bounds: klappy/bt-design-system-generative-glass only. Cloudflare account b03e6ea2… via CF Extras (12a).
driver-seat: exempt (fast-food)

## Order
Serve the repo as static assets from a Cloudflare Worker at **https://bible-glass.klappy.dev**: readme, cards, tokens, compiled bundle, kits as live demos. Deploy is push (10a): Workers Builds wired by API from this seat (mcp-server-build-convention §10), two triggers, `versions upload` on non-main.

## Declared product
1. `wrangler.jsonc` — name `bible-glass`, `assets.directory: "."`, custom domain route bible-glass.klappy.dev, `workers_dev: true` (branch previews)
2. `package.json` — wrangler devDependency only; no build step
3. `.assetsignore` — keeps node_modules, .github, .gitignore, .thumbnail, .assetsignore out of the asset upload
4. `index.html` — landing: wordmark, links to readme, guidelines cards, component cards, kits, bundle URLs
5. `_ds_bundle.js` + `_ds_manifest.json` committed (the kits load the bundle; the compiler regenerates both on sync)
6. Workers Builds: repo connection + "Deploy default branch" (`npx wrangler deploy`, main) + "Deploy non-production branches" (`npx wrangler versions upload`, *, excludes main)
7. `DEPLOY.md` — what deploys, where previews land, that no seat deploys
8. kitchen journal rows

## Done-means
- Push to main → Workers Build UUID with outcome success → `GET https://bible-glass.klappy.dev/styles.css` 200 and `/_ds_bundle.js` 200.
- Push to a branch → build with `versions upload`, preview on `<branch>-bible-glass.klappy.workers.dev`, production unchanged.
- `ui_kits/fia/index.html` renders at the custom domain.

## Boundaries
No `wrangler deploy` from any seat. No CF token in repo. No secrets. Fonts stay withheld. The Worker has no code, only assets; if a script is ever needed it is a separate ticket.

## Known
- First build must run before a script tag exists; triggers attach to the tag. Order: files on main → connection → first build → triggers (or `POST /builds/workers` if it accepts a new script).
- Branch previews for asset-only Workers are expected to work (no Durable Objects).
