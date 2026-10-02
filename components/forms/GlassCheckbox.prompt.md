Checkbox row for multi-select lists (choose several of many). Use GlassToggle for an on/off setting, GlassSegmented for one-of-few, FilterChips for filters. The whole row is the hit target (≥44px); `checked="mixed"` for a select-all row. Without a `label`, pass `aria-label`.

```jsx
<GlassCheckbox label="Mark 1:14–20" checked={sel.has(id)} onChange={on => toggle(id, on)}/>
<GlassCheckbox label="Select all" checked={some ? 'mixed' : all} onChange={setAll}/>
```
