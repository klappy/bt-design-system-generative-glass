The coordinator's desktop frame (3D Review; reusable by Aquifer Window on desktop).

```jsx
<DesktopShell crumb="River project" title="River assessment" phases={['Prepare','Collect','Understand','Improve']} phase={phase} onPhase={setPhase}
  groups={[{label:'River project',items:[{label:'River assessment',meta:'Prepare',active:true},{label:'Earlier assessment',meta:'Understand'}]},{label:'Hill project',empty:'No assessments yet'}]}>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>…report cards…</div>
</DesktopShell>
```
