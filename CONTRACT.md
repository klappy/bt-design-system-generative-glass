# The visual design contract

The version in `package.json` is the contract between Generative Glass and the apps that wear it: 3D Review, FIA, Aquifer Window. It is the only place the number lives (kitchen HYGIENE 19). `scripts/stamp.mjs` writes it into `version.json` at build; the landing page, the bundle URL and every consumer read it from there.

## Semver, as it applies to a design system

| Bump | What changed | App action |
| --- | --- | --- |
| **MAJOR** | A token removed or renamed; a component prop removed or its meaning changed; a foundation rule reversed (e.g. bands→scores would be one) | App must re-pass its screens before adopting |
| **MINOR** | New token, new component, new prop with a default, new card, new kit screen | App adopts when it wants the addition; nothing breaks |
| **PATCH** | Value changes inside a ladder, copy in cards, bug fixes (like border-box on padded roots), specimen refreshes | App adopts freely |

The namespace `GenerativeGlassDesignSystem_1a4c8e` is part of the MAJOR surface.

## How an app pins

An app declares the contract it was passed against, in its own manifest, one line:

```json
"bibleGlass": "1.0"
```

and loads the system from the published URL:

```html
<link rel="stylesheet" href="https://bible-glass.klappy.dev/styles.css">
<script src="https://bible-glass.klappy.dev/_ds_bundle.js"></script>
```

At boot it reads `https://bible-glass.klappy.dev/version.json` and compares:

- same MAJOR.MINOR → matched, nothing to show
- newer MINOR → "design system 1.2 available; app passed on 1.0" in the app's own diagnostics, not to users
- different MAJOR → the app keeps rendering, logs the mismatch, and the kitchen gets a ticket to re-pass

Pinning to an exact historical build is by git tag: every release is tagged `v<version>` on `main`; `https://github.com/klappy/bt-design-system-generative-glass/tree/v1.0.0`. Serving old versions from the domain is out of scope until an app needs it.

## Tracking usage

`APPS.md` lists each app, the contract version it last passed against, and the date. It is updated by the app's pass, not by this repo's release. A release that moves MAJOR opens a rail ticket per app listed.

## Releasing

1. Bump `package.json` version in a PR with the change (one line, one commit).
2. Merge → main build stamps `version.json` and deploys.
3. Tag `v<version>` on the merge commit.
4. If MAJOR: order a re-pass ticket per app in `APPS.md`.
