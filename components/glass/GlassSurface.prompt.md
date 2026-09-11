The frosted-glass material primitive that every other surface composes.

```jsx
<GlassSurface level={2} blur="medium" radius="xl" style={{padding:'var(--gutter-card)'}}>
  <p style={{font:'var(--type-body)'}}>Anything on glass</p>
</GlassSurface>
```

Levels 1–4 step the white fill; blur runs sheer → heavy. `tone="night"` for the map and spot-detail surfaces. Never stack more than two glass levels on top of each other — the frames always let the aurora, not another panel, sit behind glass.
