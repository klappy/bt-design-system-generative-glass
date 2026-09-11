# Generative Glass — Design System for Bible Translation apps

Generative Glass is the shared visual language behind **3D Review**, the **FIA companion** and the **Aquifer Window**, and the apps that follow. Surfaces are translucent frosted glass over a slow pastel aurora; edges are hairlines of light; depth is diffuse. The aurora and the glass are parametric: they respond to the passage, its script, and where a project is in its process. Scripture stays legible; everything around it is quiet.

This is the **core**. It holds what all three apps share and no more. Each app owns a thin layer on top (see *Core vs app*).

## Sources

- **This repository** — `https://github.com/klappy/bt-design-system-generative-glass` (main). The design system is authored there; this project mirrors it and adds `ui_kits/`. Explore the repo for history, decisions and the latest cards.
- **Bible Aquifer MCP** — `https://aquifer.klappy.dev/mcp` (klappy/aquifer-mcp). 57 open-licence resources: Bibles in 15+ languages, Aquifer Open Study Notes, Open Bible Dictionary, FIA guide/maps/images/key terms, unfoldingWord Translation Notes/Words/Questions, UBS images and lexica, Biblica maps. Every specimen in this system was fetched live on 2026-09-11 and is traceable by `resource_code/language/content_id` in `data/specimens.json`.
- **Door43 MCP** — `https://door43.klappy.dev/mcp` (klappy/door43-mcp), reading the DCS catalog at git.door43.org. Catalog rows (owner/repo, subject, release, language direction) come from `GET /catalog/search?stage=prod`.
- **klappy/3d-review-cookbook** (private) — the 3D Review domain: Prepare/Collect/Understand/Improve, four perspectives (Translator, Community, Church, Consultant), decisions DEC-0001 bands over scores, DEC-0003 jar-fill, DEC-0004 dual report levels.
- **klappy/aquifer-study-bible-cookbook** — open study-notes system; carries a retired travel-era copy of this system under `design-system/` (to be replaced by a pointer).
- **Captain decision forms, 2026-09-11** — LanguagePicker behaviour (contexts, coverage states, ranking), recorded in the kitchen journal.
- **Lineage** — reconstructed from a 30-frame liquid-glass motion piece (travel concept, 2026-09-04), then re-aimed at Bible Translation on 2026-09-10. Values measured at 390pt are close, not exact.

There is no logo. Where a mark would go, set "Generative Glass" or the app's name in `--font-core` medium at −0.045em.

## The products

| App | What it is | Owns |
| --- | --- | --- |
| **3D Review** | Short role-specific surveys from teams, communities, churches and consultants on the health of a translation process. Desktop-first for coordinators, phone for participants. | Survey flow, report cards, desktop shell arrangement, assessment timeline |
| **FIA** | Companion for Familiarization, Internalization, Articulation: understanding a passage before drafting. Phone-first, offline-capable. | Passage-centred screens, resource stack, offline states |
| **Aquifer Window** | Browse and open translation resources from Aquifer and Door43: images, maps, articles, key terms, Bibles. Lovable app; no cookbook yet. | Search and catalog browse, resource detail with licence |

## Core vs app

The core holds, and nothing else:

- **Material**: glass ladders (fill, blur), edges, shadows, aurora, dark theme, the floating-layer rule.
- **Type**: UI roles in SF Pro; one scripture reading face per script; direction rules.
- **Colour**: ink, paper, aurora, three accents, night.
- **Spacing, radius, motion, icons, voice.**
- **Generative rules**: testament → hue, genre → layout, script → blur, stage → sheen, verses → fill, depth → radius.
- **Shared components** — anything two or more of the three apps use: ScripturePassage, KeyTermPopover, SyncBadge, ReviewThread, ProgressGrid, ResourceCard, ResourceStack, CatalogRow, LanguagePicker, GlassTabBar, GlassSheet, form fields, GlassSearch, DesktopShell, ProjectConstellation, plus the glass primitives.

A block only one app needs stays in that app's layer, even when it is glass. The test is **two of three**. SurveyQuestion is the one exception held in core today because its band-pill pattern is the reference for "bands, not scores" everywhere.

## Content fundamentals

**Voice.** Calm, second person, short. The app speaks to one named person and never about itself. No "I", no assistant persona. *"Miriam, Ruth 2 is ready for the community read-aloud."*

**Bands, not scores.** Process health is a band with a jar-fill mark (Not yet · A little · Mostly · Fully; Growing), never a number or a grade. *"Quality band: Growing. Detailed view available."* not *"Score: 67/100 (C+)"*.

**Questions, not verdicts.** The app asks and shows; it never grades a team. *"Here to take the survey?"* not *"Welcome! Click here to begin your survey!"*. *"Repeat when it is appropriate."* not *"Re-run every 90 days."*

**Scripture is quoted, never paraphrased.** Every passage names its resource (BSB, ULT, AVD, IRV, SBLGNT…) and, where the source states it, its licence. Verse numbers are overline ink, superscript. Nothing is rewritten for tone.

**Languages are named by their own name first.** *हिन्दी · Hindi · hi*. A language with no resources says so and stays selectable in project contexts.

**Casing.** Sentence case. Overlines (perspective, stage, resource type) are uppercase 9px at 0.14em: TRANSLATOR · COMMUNITY · CHURCH · CONSULTANT; UNDERSTAND · TRANSLATE · REVISE AND CHECK.

**Length.** Titles two lines at most. Supporting copy one sentence. Labels are the shortest true thing: *Open*, *Assessments*, *Up to date*, *Offline · saved on device*.

No emoji. No exclamation marks. No product names in copy. Times are 24-hour.

## Visual foundations

### Colour
Four families plus night. **Ink** (`--ink-900…200`) for text, cool near-black navy, never pure black on light. **Paper** (`--paper-000…400`) is the studio behind the glass. **Aurora** (`--aurora-lavender / peach / sky / lemon / blush / mint`) lives behind glass and bleeds through; it is never a fill, border or text colour, with one exception: process stage tints (sky Understand, peach Translate, lavender Revise and check, mint Done) on 6px progress cells and orb interiors. **Accents**: exactly three — `--accent-blue` (links, seat badge), `--accent-red` (avatar ring, active pin), `--accent-teal` (sync ok). Status is carried by aurora tint and shape, never by a fourth accent. Saturation arrives only through Aquifer imagery.

### Type
UI in **SF Pro** (Display for titles and numerals, Text for reading sizes), weights 400–700. Scale: hero 28/1.16 medium −0.02em; card title 19/1.24 semibold −0.015em; time 17 semibold Display; body 15; label 13 medium; caption 12; micro 10; overline 9 semibold uppercase +0.14em.

**Scripture** is the one exception: 17/1.6 regular, tracking 0, in a reading face drawn for its script — `--font-scripture-latin` (Noto Serif), `-hebrew` (Noto Serif Hebrew), `-greek`, `-arabic` (Noto Naskh Arabic), `-devanagari`, `-gujarati`, `-han`. RTL scripts flip the passage block only (`dir="rtl"` on the passage); the header, chips and UI stay LTR. Scripture always sits on fill 3 or higher.

### Glass
Four fill steps (`--glass-fill-1` .28 → `-4` .78 white) and five blur steps (8 → 64px), always with `saturate(160%)`. Every glass surface carries a 0.5px white hairline, an inset top light (`--inner-top`) and a faint diagonal sheen (`--refraction`). Blur only where a surface floats over content it does not own. Never more than two glass levels stacked.

**Floating-layer rule (2026-09-11).** Popovers, sheets, menus and pickers use `--material-floating`: fill-4 glass composited onto `--surface-solid`. Pure translucent glass is for in-flow cards only. In dark theme the fill ladder stays white and drops to .05–.20 so the aurora still reads through; the floating rule is what keeps text legible.

### Depth, corners, layout
Shadows are multi-layer and near-neutral (`--shadow-rest / -card / -float`); dark theme swaps navy for black. Nothing has a sharp corner: keys 6, tiles 14, wells 22, cards 28, sheets 34, everything interactive a pill. 18px screen gutter, 18px card padding, 10px stack gap, 8px inline gap. Desktop shell: 210px context panel, 24px content padding, cards on `auto-fit minmax(180px,1fr)`.

### Dark theme
`data-theme="dark"` on `<html>` or any subtree re-points every semantic alias. Base palettes never change. Selected/inverse controls become white with ink text; anything drawn on them uses `--text-on-inverse`, never a white literal.

### Motion
Organic and viscous. `--ease-liquid` default, `--ease-swell` for entries, `--ease-damp` for sheets and keyboards, `--ease-flow` for drawing. 140ms micro to 1100ms morph. Three beats: what leaves softens, what connects draws, what arrives rises. Resolving a review thread softens it (opacity .62, saturate .8) instead of hiding it.

### Generative rules
The aurora is seeded by scripture: testament sets the hue family, genre sets the blob layout. The glass is parametric: passage length sets fill, script sets blur (Latin/Greek medium, Hebrew/Arabic/Devanagari strong), process stage tints the sheen, nesting depth steps the radius. Every output snaps to a ladder step.

### Imagery
Only real resources: Aquifer maps (Biblica, FIA), UBS and FIA photographs, always with source, id and licence in the card meta. No stock, no generated art, no illustration. Maps and photos sit in 22px wells or full-bleed under a protection gradient.

### States
Hover lifts 1px and brightens; press scales .972; focus is a diffuse glow (`--glow-focus`), never a ring. Sync has three states: up to date (teal dot), syncing (breathing dot), offline · saved on device (dashed dot). Coverage has three: available (filled chip), AI-translatable (chip + AI tag), none (dashed hairline chip).

## Iconography
Stroke-only, 1.7px, round caps and joins, 24px grid, monochrome. **Lucide** (MIT) outlines inlined in `components/icons/Icon.jsx`. BT apps need in addition: book, headphones, users, check, cloud-off, globe, languages. Emoji never. Unicode as icon only for the middle dot separator.

## Index

| Path | What |
| --- | --- |
| `styles.css` | Root entry, `@import` list only |
| `tokens/` | fonts (UI + scripture faces) · colors · typography · spacing · radius · elevation · glass (incl. `--material-floating`) · motion · theme-dark |
| `guidelines/` | Foundation cards: Colors, Type, Glass, Spacing, Motion, Voice, Brand |
| `data/specimens.json` | Real Aquifer and Door43 captures with ids and licences |
| `world-outline.js` | `<gg-world-outline>` Natural Earth hairline outline for ProjectConstellation |
| `assets/fonts/` | SF Pro binaries (licence-held; not for public repos) |
| `components/glass/` | GlassSurface, GlassButton, GlassIconButton, GlassInput, GlassChip, DotRing, Filament, Avatar, AuroraField, StatusBar |
| `components/icons/` | Icon (Lucide; + book, headphones, users, check, cloudOff, globe, languages, x) |
| `components/scripture/` | ScripturePassage, KeyTermPopover, SyncBadge |
| `components/review/` · `progress/` · `survey/` | ReviewThread · ProgressGrid · SurveyQuestion |
| `components/resources/` | ResourceCard, ResourceStack, CatalogRow |
| `components/language/` | LanguagePicker |
| `components/navigation/` | GlassTabBar, GlassSheet, DesktopShell |
| `components/forms/` | GlassField, GlassSelect, GlassToggle, GlassSegmented, GlassSearch, FilterChips |
| `components/constellation/` | ProjectConstellation (+ `world-outline.js`) |
| `ui_kits/` | 3d-review (coordinator desktop + participant phone), fia (phone companion), aquifer-window (resource browser). Each has `index.html`, `app.jsx`, `README.md`; `ui_kits/shared/kit-base.js` holds the specimen data and boots from `_ds_bundle.js` (falling back to `components-loader.js`) |
| `templates/` | Design Component templates consuming projects can start from: three-d-review, fia, aquifer-window (each mounts its `ui_kits/` app; `templates/shared/kit-loader.js`) |
| `SKILL.md` | Agent-Skills entry point |

### Components
Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage). Templates (under `templates/`) replace the earlier starting-point tags.

**Intentional additions.** `Icon` (glyph wrapper) and `AuroraField` (the backdrop as a material) carry over from the first system. `SyncBadge` and `KeyTermPopover` were split out of ScripturePassage because ResourceCard and the Aquifer Window reuse them.

**Retired.** FlightCard, RouteArc, WeatherPill, SuggestionPill, CategoryTile, DestinationCard, SpotHero, RouteList, MapCanvas, NightActionBar (travel concept).

## Open questions
1. Confidence ladder for resources (draft → checked → published, iterations; AI as one rung). Metadata exists on some projects; the coverage mark is designed to grow into it.
2. Hebrew Bible text: not in Aquifer; source is Door43 unfoldingWord/hbo_uhb.
3. FIA app cookbook not yet readable; the FIA layer is scoped from the FIA resources in Aquifer until it is.
4. A real mark, if one is wanted.
