Thin progress arc around a round primary — elapsed time while playing, or the countdown before the next item auto-plays.

```jsx
<DotRing size={120} rings={5} dots={24}>
  <CountdownRing size={96} value={0.62} duration={2} running>
    <span className="disc"><Icon name="pause"/></span>{/* 72 px, GlassIconButton tone="dark" tokens; no nested <button> */}
  </CountdownRing>
</DotRing>
```

One arc, one colour (`--accent-blue` on a `--glass-fill-4` track), starting at 12 o'clock. Never a spinner; never the only carrier of time — pair it with a verb label ("Next part in 2 s · tap to wait"). Under `prefers-reduced-motion` the arc does not sweep; it shows the value it is given.
