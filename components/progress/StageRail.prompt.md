Display-only progress for a guided, linear process: `StageRail` for the overall steps, `BeadStrip` for the parts of the current run.

```jsx
<StageRail stages={steps} current={2} progress={4/25}/>
<BeadStrip before={1} after={2} label="Part 4 of 25 · talk after part 7" items={[
  {kind:'plain'},{kind:'scripture'},{kind:'term',more:true},
  {kind:'media',state:'current'},{kind:'plain',state:'upcoming'},{kind:'stop',state:'upcoming'}]}/>
```

Kind is shape + colour (circle plain, rounded square scripture, diamond term, triangle media, wide rectangle video, bar stop, double bar end); state is fill (solid heard, outline ahead, ringed and larger for "you are here"). Never make segments or beads tappable, and always give the strip a words label — beads support the caption, they never replace it.
