{
const NS=window.GG_NS();const {GlassSurface,GlassButton,GlassChip,GlassIconButton,Icon,ResourceCard,CatalogRow,LanguagePicker,GlassSearch,FilterChips,GlassSegmented,GlassSelect,SyncBadge,Avatar}=NS;const D=window.GG_DATA;const M=D.media;
const OV={font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)'};
const LANG=Object.fromEntries(D.languages.map(l=>[l.code,l]));

function Detail({item,onBack}){const src=D.resources.find(r=>r.title===item.title)||item;return <div style={{display:'grid',gap:14}}>
  <div><GlassButton variant="quiet" size="sm" leading={<Icon name="chevronLeft" size={14}/>} onClick={onBack}>Back to results</GlassButton></div>
  <div style={{display:'grid',gridTemplateColumns:'minmax(0,1.4fr) minmax(260px,1fr)',gap:14,alignItems:'start'}}>
    <GlassSurface level={2} radius="xl" style={{padding:8}}><div style={{borderRadius:'var(--r-lg)',overflow:'hidden',background:'var(--paper-100)',aspectRatio:'4/3'}}><img src={M[src.image]} alt={src.title} style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}}/></div></GlassSurface>
    <div style={{display:'grid',gap:12}}>
      <GlassSurface level={3} radius="xl" style={{padding:18,display:'grid',gap:8}}>
        <div style={OV}>{src.type}</div><div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>{src.title}</div>
        <div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{src.meta}</div>
        <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:4}}><GlassChip size="sm" leading={<Icon name="book" size={10}/>}>RUT 1:1–4:22</GlassChip><GlassChip size="sm">eng</GlassChip><GlassChip size="sm">v1.0.2</GlassChip></div>
        <div style={{display:'flex',gap:8,marginTop:8}}><GlassButton variant="dark" size="sm" trailing={<Icon name="arrowUpRight" size={13}/>}>Open</GlassButton><GlassButton size="sm">Attach to Ruth 2</GlassButton></div>
      </GlassSurface>
      <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:6}}><div style={OV}>Licence</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>CC BY-SA 4.0 · Biblica, Inc. 2023–2025</div><a href="https://creativecommons.org/licenses/by-sa/4.0/" style={{font:'var(--type-caption)'}}>creativecommons.org/licenses/by-sa/4.0</a></GlassSurface>
    </div>
  </div>
</div>}

function App(){const [src,setSrc]=React.useState('Aquifer');const [q,setQ]=React.useState('');const [f,setF]=React.useState([]);const [lang,setLang]=React.useState('en');const [pick,setPick]=React.useState(false);const [open,setOpen]=React.useState(null);
  const items=D.resources.filter(r=>(!f.length||f.includes(r.type))&&(r.title+r.meta).toLowerCase().includes(q.toLowerCase()));const L=LANG[lang];
  return <div style={{minHeight:'100vh',display:'grid',gridTemplateColumns:'210px minmax(0,1fr)'}}>
    <aside style={{padding:'20px 14px',background:'var(--glass-fill-1)',borderRight:'var(--border-glass-soft)',display:'flex',flexDirection:'column',gap:14}}>
      <div style={{font:'var(--fw-medium) 14px/1.2 var(--font-core)',letterSpacing:'-0.045em',padding:'0 6px'}}>Aquifer Window</div>
      <div style={{position:'relative'}}>
        <button onClick={()=>setPick(!pick)} style={{display:'flex',alignItems:'center',gap:8,width:'100%',height:40,padding:'0 12px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--inner-top)',font:'var(--type-caption)',color:'var(--text-title)',cursor:'pointer',textAlign:'start'}}><Icon name="languages" size={14}/><span style={{flex:1}}>{L.autonym} · {L.english}</span><span style={{color:'var(--text-dim)'}}>{L.code}</span></button>
        {pick&&<div style={{position:'absolute',top:46,left:0,zIndex:5,width:420}}><LanguagePicker languages={D.languages} context="filter" value={lang} onChange={c=>{setLang(c);setPick(false)}} suggested={['en','hi','sw']} surface="popover"/></div>}
      </div>
      <nav style={{display:'grid',gap:2}}>
        <div style={{...OV,color:'var(--text-dim)',padding:'6px 8px 4px'}}>Sources</div>
        {['Aquifer','Door43'].map(s=><button key={s} onClick={()=>{setSrc(s);setOpen(null)}} style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'7px 8px',borderRadius:'var(--r-xs)',border:'none',textAlign:'start',cursor:'pointer',background:src===s?'var(--glass-fill-3)':'transparent',font:'var(--type-caption)',color:src===s?'var(--text-title)':'var(--text-body)'}}><span>{s}</span><span style={{color:'var(--text-dim)'}}>{s==='Aquifer'?'57':'12'}</span></button>)}
        <div style={{...OV,color:'var(--text-dim)',padding:'10px 8px 4px'}}>Collections</div>
        {D.aquifer.slice(0,4).map(a=><button key={a.code} style={{display:'flex',justifyContent:'space-between',gap:6,width:'100%',padding:'7px 8px',borderRadius:'var(--r-xs)',border:'none',textAlign:'start',cursor:'pointer',background:'transparent',font:'var(--type-caption)',color:'var(--text-body)'}}><span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{a.title}</span><span style={{color:'var(--text-dim)',fontFamily:'var(--font-mono)',fontSize:11}}>{a.articles}</span></button>)}
      </nav>
      <div style={{marginTop:'auto'}}><SyncBadge state="ok"/></div>
    </aside>
    <main style={{padding:24,display:'flex',flexDirection:'column',gap:14,minWidth:0}}>
      {open?<Detail item={open} onBack={()=>setOpen(null)}/>:<>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}><div><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{src==='Aquifer'?'aquifer.klappy.dev · 57 resources':'git.door43.org · catalog, stage prod'}</div><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>Browse {src}</div></div><GlassSegmented size="sm" options={['Aquifer','Door43']} value={src} onChange={s=>{setSrc(s);setOpen(null)}}/></div>
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:10,alignItems:'center'}}><GlassSearch value={q} onChange={e=>setQ(e.target.value)} placeholder={src==='Aquifer'?'Search resources, passages, key terms':'Search the catalog'}/><GlassButton variant="dark" size="md">Search</GlassButton></div>
      {src==='Aquifer'?<>
        <FilterChips bleed={false} options={['Map','Image','Study notes','Key terms','Bible']} value={f} onChange={setF}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}><div style={{...OV,whiteSpace:'nowrap'}}>{items.length} results · {L.english}</div><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>Media, then articles</div></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>{items.map(r=><ResourceCard key={r.title} type={r.type} title={r.title} meta={r.meta} image={M[r.image]} onOpen={()=>setOpen(r)}/>)}</div>
        <div style={OV}>Articles</div>
        <GlassSurface level={3} radius="xl" style={{padding:'4px 18px'}}>{D.aquifer.map((a,i)=><CatalogRow key={a.code} first={i===0} id={a.code} title={a.title} subject={a.type} release={a.articles} meta={`eng · ${a.type}`}/>)}</GlassSurface>
      </>:<>
        <div style={OV}>Door43 Content Service · {D.door43.length} repositories</div>
        <GlassSurface level={3} radius="xl" style={{padding:'4px 18px'}}>{D.door43.map((r,i)=><CatalogRow key={r.id} first={i===0} id={r.id} title={r.title} subject={r.subject} lang={r.lang} dir={r.dir} release={r.release} meta={`${r.lang} · ${r.dir||'ltr'}`}/>)}</GlassSurface>
      </>}
      </>}
    </main>
  </div>}
window.AquiferWindowApp=App;if(!window.GG_EMBED&&document.getElementById('root'))ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

}
