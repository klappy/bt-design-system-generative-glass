# FIA UI kit

Phone-first companion for Familiarization, Internalization, Articulation: understanding a passage before drafting. 390pt, offline-capable.

Screens (`app.jsx`, switched by GlassTabBar):
- **Passage** — Ruth 2:1–4 with a version segmented (BSB · AVD · IRV) that swaps the reading face and direction (Latin, Arabic RTL, Devanagari); key-term chips open a GlassSheet on `--material-floating`; ResourceStack of the attached map and photos.
- **Understand** — the three FIA steps as a segmented control, one prompt per step, Record affordance, a KeyTermPopover.
- **Resources** — GlassSearch + FilterChips over ResourceCards (Aquifer maps and images with source · id · licence).
- **Progress** — ProgressGrid, next-step card in the app's voice.

The SyncBadge top-left cycles offline → syncing → up to date on tap; the moon toggles `data-theme="dark"`.

Source: the FIA app cookbook is not yet readable (readme, open question 3). Screens are scoped from the FIA resources in Aquifer and the core components; treat structure as a proposal until the cookbook is available.
