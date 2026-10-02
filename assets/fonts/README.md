# assets/fonts

SF Pro Display / Text binaries are withheld from this repository (Apple licence; CoS door ruling 2026-09-04). `tokens/fonts.css` falls back to the system stack when they are absent. Scripture faces (Noto Serif family, SIL OFL 1.1) are self-hosted here: `noto/<family>/` and `noto-serif-tc/`, woff2 only, weights 400/500, each with its `OFL.txt`. Source: npm `@fontsource/*` 5.3.0, wired by `tokens/fonts-noto.css` and `tokens/fonts-noto-tc.css`. Keep `noto-serif-tc/` (Han, ~6 MB) out of any app's offline precache; it loads lazily by unicode-range.
