Single-line frosted input — the only text field in the system.

```jsx
<GlassInput placeholder="Type a message" value={q} onChange={e=>setQ(e.target.value)} />
```

Focus adds a soft white glow rather than a hard ring. Pair with a `GlassIconButton` mic outside the field, never inside it.
