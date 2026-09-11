The coordinator's home: projects as drifting orbs clustered where their region is.

```jsx
<ProjectConstellation value={sel} onChange={setSel} zoom={z} onZoom={setZ} map
  regions={[{name:'South Asia',lon:80,lat:21},{name:'East Africa',lon:37,lat:-2}]}
  projects={[{id:'river',title:'River project',region:'South Asia',books:6,stage:'translate',recency:.85,reported:true,dx:-9,dy:-8}]}/>
```

Include `world-outline.js` and the pinned d3 + topojson-client tags in the page head for the outline; without them orbs fall back to an equirectangular placement and no outline draws. Keep it simple: no pan, no tiles.
