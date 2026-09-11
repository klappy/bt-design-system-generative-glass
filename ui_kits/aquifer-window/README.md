# Aquifer Window UI kit

Browse and open translation resources from Aquifer and Door43: images, maps, articles, key terms, Bibles. Desktop, 210px context panel like 3D Review.

Screens (`app.jsx`):
- **Browse Aquifer** — GlassSearch, FilterChips by type, ResourceCard grid of real Aquifer media (source · id · licence), CatalogRows of the article collections with counts.
- **Browse Door43** — CatalogRows from the DCS catalog (owner/repo mono, title in its own script and direction, release chip).
- **Detail** — open a card: image well, hero title, passage/language/version chips, Open and Attach, licence card with holder and link.
- **Language** — the context panel button opens LanguagePicker (`context="filter"`: hides languages with no coverage) as a popover.

Source: Lovable app; no cookbook yet (readme). Layout follows the readme's Aquifer Window row and the core components. Data is from `data/specimens.json`, captured 2026-09-11.
