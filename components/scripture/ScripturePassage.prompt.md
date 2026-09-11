The scripture reading surface shared by every BT app: quoted text from a named resource, never paraphrased.

```jsx
<ScripturePassage reference="Ruth 2:1–4" version="BSB" source="Aquifer · BereanStandardBible" sync="ok"
  verses={[{n:1,text:'Now Naomi had a relative…'},{n:2,text:'And Ruth the Moabitess said…'}]}
  keyTerms={[{label:'Boaz',source:'Aquifer Open Study Notes · 25802',definition:'Boaz was a relative of Elimelech…'}]}/>
<ScripturePassage reference="راعوث ٢:١–٢" version="AVD" script="arabic" dir="rtl" lang="ar" verses={…}/>
```

Set `script` from the passage's script, not the UI locale. RTL flips the passage block; header and chips stay LTR. Always on fill 3 or higher (the component does this).
