# TICKET — dish-2-components

Meal: 2026-09-11-generative-glass-ds-compile, dish 2 of 4. Depends: dish 1.
Station: Claude design host. Owner: captain accountable. Promise: one to two sessions from fire. driver-seat: exempt

## Order
Convert every BT component in the docs page into bundle components (.jsx + .d.ts + .prompt.md) with one @dsCard card per group; remove travel components; rebuild the docs page on the bundle.

## Inventory (the docs page is the inventory; nothing added)
Keep as core: GlassSurface, GlassButton, GlassChip, GlassIconButton, GlassInput, Icon, DotRing, Filament, Avatar, AuroraField, StatusBar.
Add: ScripturePassage, KeyTermPopover, SyncBadge, ReviewThread, ProgressGrid, SurveyQuestion, ResourceCard, ResourceStack, CatalogRow, LanguagePicker, GlassTabBar, GlassSheet, GlassField, GlassSelect, GlassToggle, GlassSegmented, GlassSearch, FilterChips, DesktopShell, ProjectConstellation (+ gg-world-outline).
Remove: FlightCard, RouteArc, WeatherPill, SuggestionPill, CategoryTile, DestinationCard, SpotHero, RouteList, MapCanvas, NightActionBar.

## Declared product
1. components/<group>/<Name>.jsx|.d.ts|.prompt.md for every Add item; @startingPoint on ScripturePassage, SurveyQuestion, LanguagePicker.
2. One @dsCard card per group.
3. Generative Glass Docs.dc.html mounting from the bundle namespace.

## Done-means
- check_design_system lists every Add component under the namespace.
- Docs page renders the same before and after (captain glance).
- No travel component remains in the manifest.

## Claim
Fired 2026-09-11T16:50Z by the design host after captain glance on dish 1 ("looks as good as I can discern").
