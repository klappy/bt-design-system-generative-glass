# TICKET — dish-3-kits

Meal: 2026-09-11-generative-glass-ds-compile, dish 3 of 4. Depends: dish 2.
Station: Claude design host. Owner: captain accountable. Promise: one to two sessions from fire. driver-seat: exempt

## Order
Three thin UI kits and two templates composed only from bundle components. Kits guide the apps; they do not grow the core.

## Declared product
1. ui_kits/3d-review/ — desktop shell, survey flow (welcome, one question per screen, band pills), viewer route.
2. ui_kits/fia/ — passage with key terms, resource stack, offline state. Scoped from fia-app-cookbook when readable; otherwise stub with the block recorded.
3. ui_kits/aquifer-window/ — search + filter chips, CatalogRow browse (Aquifer and Door43), resource detail with licence.
4. templates/: bt-passage-screen and bt-desktop-shell replace glass-app-screen and glass-night-screen.

## Boundaries
No new flows invented; each kit is the docs page's specimens arranged as screens. Content from gg/data/specimens.json only.

## Done-means
- Each kit index.html is a click-through mounting only bundle components.
- A reviewer can name, per kit, which core blocks it uses and which it owns.

## Amendment 2026-09-11T18:45Z
Three kits were authored by the design-system compiler seat during import (d0014), from readme text, labelled proposals. This ticket now reads: pull those kits into the repo by PR, pass them against the real apps (3D Review glass mockup in 3d-review-cookbook; Aquifer Window live at aquifer-window.klappy.dev; FIA when the cookbook is readable), convert to templates/ per compiler guidance. Still 1-ordered until claimed.

## Pass note 2026-09-11T17:55Z
Captain fixed glossary-over-tab-bar occlusion in the FIA kit inside the DS project (d0019). When the kits land in the repo, lift that fix into core: stacking order for floating layers vs GlassTabBar, and edge-flip for KeyTermPopover. Also: kits fail inside the bundle (d0018).

## Claim
Fired 2026-09-11T18:10Z by the docs seat: kits + templates pushed to the DS repo as PR (https://github.com/klappy/bt-design-system-generative-glass/pull/4) on behalf of the read-only compiler seat. Pass happens on that PR.

## Merged 2026-09-11T18:42Z
PR #4 merged (b963cbe). Kits are in the repo and served at bible-glass.klappy.dev/ui_kits/*. Pass against real apps still open (d0018 bundle boot; layouts are proposals).
