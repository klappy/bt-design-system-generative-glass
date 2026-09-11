{
const NS=window.GG_NS();const {GlassSurface,GlassButton,GlassChip,GlassIconButton,Icon,ScripturePassage,KeyTermPopover,SyncBadge,ResourceStack,ResourceCard,ProgressGrid,GlassTabBar,GlassSheet,GlassSegmented,StatusBar,GlassSearch,FilterChips}=NS;const D=window.GG_DATA;const M=D.media;
const OV={font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)'};
const VERS={BSB:{verses:D.ruthBSB,script:'latin',dir:'ltr',lang:'en',source:'Aquifer · BereanStandardBible'},AVD:{verses:D.ruthAVD,script:'arabic',dir:'rtl',lang:'ar',source:'Aquifer · ArabicVanDyckBible'},IRV:{verses:D.ruthIRV,script:'devanagari',dir:'ltr',lang:'hi',source:'Aquifer · IndianRevisedVersion'}};
const STEPS=['Familiarization','Internalization','Articulation'];

function Passage({openTerm,sync}){const [v,setV]=React.useState('BSB');const p=VERS[v];return <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr)',gap:10}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>Ruth · Narrative</div><div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>Ruth 2:1–4</div></div><GlassIconButton label="Listen" size={44}><Icon name="headphones" size={19}/></GlassIconButton></div>
  <GlassSegmented size="sm" options={['BSB','AVD','IRV']} value={v} onChange={setV}/>
  <ScripturePassage reference="Ruth 2:1–4" version={v} source={p.source} script={p.script} dir={p.dir} lang={p.lang} verses={p.verses} sync={sync} style={{minWidth:0}} keyTerms={D.keyTerms.map(k=>({...k,onOpen:()=>openTerm(k)}))}/>
  <div style={OV}>Attached resources</div>
  <ResourceStack height={150} items={[{title:'Historical: Ruth',image:M.ruthMap},{title:'barley field',image:M.barley},{title:'Bethlehem',image:M.bethlehem}]}/>
</div>}

function Understand(){const [s,setS]=React.useState(0);const Q=[['Who is in the story, and where are they?','Naomi, Ruth, Boaz, the harvesters. Bethlehem, in the barley harvest.'],['Tell the passage back in your own words.','Record yourself, then listen with the passage closed.'],['How would people here say “The LORD be with you”?','Try two or three ways aloud before you write one.']];return <div style={{display:'grid',gap:10}}>
  <div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>Understand</div>
  <GlassSegmented size="sm" options={STEPS.map((x,i)=>({value:String(i),label:x.slice(0,3)}))} value={String(s)} onChange={x=>setS(+x)}/>
  <GlassSurface level={3} radius="xl" style={{padding:18,display:'grid',gap:10}}><div style={OV}>{STEPS[s]} · {s+1} of 3</div><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',textWrap:'pretty'}}>{Q[s][0]}</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>{Q[s][1]}</div><div style={{display:'flex',gap:8}}><GlassButton size="sm" leading={<Icon name="mic" size={14}/>}>Record</GlassButton><GlassButton variant="dark" size="sm" trailing={<Icon name="chevronRight" size={14}/>} onClick={()=>setS((s+1)%3)}>Next</GlassButton></div></GlassSurface>
  <KeyTermPopover label="Redeem" source="Aquifer Open Study Notes · 25812" definition="Boaz was a relative of Elimelech, so he could be a family redeemer for the widows Ruth and Naomi." openLabel="Open note"/>
</div>}

function Resources(){const [q,setQ]=React.useState('');const [f,setF]=React.useState(['Map']);const items=D.resources.filter(r=>(!f.length||f.includes(r.type))&&r.title.toLowerCase().includes(q.toLowerCase()));return <div style={{display:'grid',gap:10}}>
  <div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>Resources</div>
  <GlassSearch value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Ruth resources"/>
  <FilterChips options={['Map','Image','Study notes','Key terms']} value={f} onChange={setF}/>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>{items.map(r=><ResourceCard key={r.title} type={r.type} title={r.title} meta={r.meta} image={M[r.image]}/>)}</div>
  {!items.length&&<div style={{font:'var(--type-body)',color:'var(--text-muted)',padding:18,textAlign:'center'}}>Nothing matches yet.</div>}
</div>}

function Progress(){return <div style={{display:'grid',gap:10}}><div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>Progress</div><ProgressGrid books={D.progress}/><GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:6}}><div style={OV}>Next</div><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>Ruth 3, Familiarization</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Miriam, Ruth 2 is ready for the community read-aloud.</div></GlassSurface></div>}

function App(){const [tab,setTab]=React.useState('passage');const [term,setTerm]=React.useState(null);const [sync,setSync]=React.useState('offline');const [dark,setDark]=React.useState(false);
  React.useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':''},[dark]);
  const screen=<div style={{height:'100%',overflowY:'auto',scrollbarWidth:'none',padding:'0 0 110px',display:'grid',gridTemplateColumns:'minmax(0,1fr)',gap:14,alignContent:'start'}}>
    <div style={{display:'flex',justifyContent:'flex-end',gap:8}}><GlassIconButton label="Sync" size={36} onClick={()=>setSync(sync==='offline'?'syncing':sync==='syncing'?'ok':'offline')}><Icon name="cloudOff" size={15}/></GlassIconButton><GlassIconButton label="Theme" size={36} onClick={()=>setDark(!dark)}><Icon name={dark?'sun':'moon'} size={15}/></GlassIconButton></div>
    {tab==='passage'?<Passage openTerm={setTerm} sync={sync}/>:tab==='understand'?<Understand/>:tab==='resources'?<Resources/>:<Progress/>}
  </div>;
  return <div style={{width:390,height:844,margin:'0 auto',position:'relative',background:'var(--aurora-field)',overflow:'hidden',display:'flex',flexDirection:'column'}}>
    <StatusBar/>
    <GlassSheet style={{flex:1,minHeight:0}} open={!!term} title={term?.label} description={term?.source} behind={screen} actions={<><GlassButton variant="dark" size="sm" full onClick={()=>setTerm(null)}>Close</GlassButton><GlassButton size="sm" full trailing={<Icon name="arrowUpRight" size={13}/>}>Open in Aquifer</GlassButton></>}>{term&&<div style={{font:'var(--type-body)',color:'var(--text-body)'}}>{term.definition}</div>}</GlassSheet>
    <div style={{position:'absolute',left:0,right:0,bottom:24,display:'grid',placeItems:'center',pointerEvents:'none',transition:'opacity var(--dur-slow) var(--ease-damp), transform var(--dur-slow) var(--ease-damp)',opacity:term?0:1,transform:term?'translateY(120px)':'none'}}><div style={{pointerEvents:term?'none':'auto'}}><GlassTabBar value={tab} onChange={setTab} items={[{id:'passage',label:'Passage',icon:'book'},{id:'understand',label:'Understand',icon:'sparkle'},{id:'resources',label:'Resources',icon:'bookmark'},{id:'progress',label:'Progress',icon:'check'}]}/></div></div>
  </div>}
window.FiaApp=App;if(!window.GG_EMBED&&document.getElementById('root'))ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

}
