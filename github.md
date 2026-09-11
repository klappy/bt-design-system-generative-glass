repo: klappy/bt-design-system-generative-glass
branch: main

## Last sync
date: 2026-09-11T18:03:27Z

### Updated in this project
- Pulled 11 components that gained `boxSizing:'border-box'` upstream (GlassField, GlassSearch, GlassSelect, LanguagePicker, DesktopShell, GlassSheet, ProgressGrid, CatalogRow, ReviewThread, ScripturePassage, SurveyQuestion)
- Kept local readme.md (adds `ui_kits/` and `templates/` index rows not yet upstream)
- Local-only, awaiting push upstream: `ui_kits/`, `templates/`, namespace fix in `components/**/*.card.html`, `@startingPoint` removed from three `.d.ts`

## Sync history
- 2026-09-11T17:28:04Z — initial import of the full repo; added UI kits and templates

## Screen map
| Screen | Repo files |
| --- | --- |
| `ui_kits/3d-review/index.html`, `templates/three-d-review/` | components/navigation/DesktopShell.jsx, components/survey/SurveyQuestion.jsx, components/progress/ProgressGrid.jsx, components/review/ReviewThread.jsx, components/constellation/ProjectConstellation.jsx, components/forms/* |
| `ui_kits/fia/index.html`, `templates/fia/` | components/scripture/*, components/resources/ResourceStack.jsx, components/resources/ResourceCard.jsx, components/navigation/GlassTabBar.jsx, components/navigation/GlassSheet.jsx, components/glass/StatusBar.jsx, data/specimens.json |
| `ui_kits/aquifer-window/index.html`, `templates/aquifer-window/` | components/resources/CatalogRow.jsx, components/resources/ResourceCard.jsx, components/language/LanguagePicker.jsx, components/forms/GlassSearch.jsx, components/forms/FilterChips.jsx, data/specimens.json |
| `guidelines/*.card.html`, `components/**/*.card.html`, `tokens/*` | same paths in the repo |
