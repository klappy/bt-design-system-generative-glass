# TICKET — Generative Glass as a core design system for three apps

Class: **planned** — plan here, cook in sessions.
Project: design project "Generative Glass System Design".
Consumers: klappy/fia-app-cookbook (FIA App), klappy/aquifer-study-bible-cookbook (Bible Aquifer Window), klappy/3d-review-cookbook (3D Review).
Station: Claude design host executes; captain rules on scope and repo home.
Owner: captain accountable.
Promise: core boundary written and ratified within two sessions; per-app layers follow as their own tickets.
Depends: 2026-09-11-generative-glass-aquifer-content (2-cooking) for real specimens, not for the boundary.
driver-seat: exempt (design host, no code deploy)

## Order
Turn the Generative Glass docs into a **core** design system that guides and supports three Bible Translation apps, and define the thin per-app layer each one owns. The core does not grow to fit every app; it holds what all three share.

## Found state (2026-09-11)
- aquifer-study-bible-cookbook/design-system/ carries a hand-copied snapshot of the *travel* Generative Glass (PROVENANCE.md, 2026-09-04): travel components, travel ui_kit, 390pt frame-measured tokens. Already drifted from the BT reframe.
- 3d-review-cookbook/design/2026-09-09-glass-feedback/glass.css is a separate hand-rolled glass stylesheet, byte-pinned to PR4.
- fia-app-cookbook returns 409 (no commits reachable on main from the design host). FIA layer cannot be scoped until the cookbook is readable.
- The design project (Claude design) holds the live source: Generative Glass Docs.dc.html + gg/ (tokens, ds-bundle.js, styles.css, SF Pro binaries).
- SF Pro binaries are licence-held (CoS door); core must fall back to the system stack when absent.

## Declared product
1. CORE.md — the boundary: what is core (glass material, aurora, color families, type roles incl. scripture faces per script, spacing, radius, motion, icons, voice, generative rules, primitives, the shared BT components) and what is explicitly not (app flows, app-specific content components, app navigation, app data).
2. Generative Glass Docs.dc.html — reorganised so core sits first and one "Apps" section shows each app's layer: which core blocks it uses, which it adds, one specimen screen each.
3. layers/FIA.md, layers/AQUIFER-WINDOW.md, layers/3D-REVIEW.md — one page each: blocks used, blocks owned, open questions, pointer to the cookbook.
4. A retirement note for aquifer-study-bible-cookbook/design-system/ (drifted travel copy) proposing replacement by pointer to the core home.
5. Journal rows per session.

## Done-means
- A reader can open CORE.md and, for any component in the docs page, say whether it is core or app-owned.
- A reader can open the docs page Apps section and observe three app layers, each listing core blocks used and app blocks owned, with no travel imagery.
- A reader can diff aquifer-study-bible-cookbook/design-system/ against the core and observe the retirement note names every drifted file class.
- FIA layer either scoped from fia-app-cookbook or marked blocked with the 409 recorded.

## Boundaries
No new components invented to justify the split; if an app needs a block only it uses, it stays in the app layer. No app flows designed here. No repo created here: repo home for the core is a captain ruling and a separate ticket (noted as follow-on). SF Pro binaries are not copied anywhere public.

## Failure modes
- Core inflates: every app block argued into core. Counter: the ≥2-of-3 rule, written into CORE.md.
- fia-app-cookbook stays unreadable: FIA layer ships as a stub with the block recorded.
- Snapshot drift continues: retirement note not acted on. Counter: the follow-on repo ticket.

## Follow-on (not this ticket)
- Create a standalone GitHub repo for the core so it is not floating in a design project; cookbooks point at it. Captain orders after this ticket plates.
