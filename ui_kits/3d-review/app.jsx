{
const NS=(typeof window.GG_NS==='function'?window.GG_NS():window.GG_NS)||Object.values(window).find(v=>v&&v.GlassSurface&&v.ScripturePassage)||{};const {GlassSurface,GlassButton,GlassChip,GlassIconButton,Icon,SurveyQuestion,ProgressGrid,ReviewThread,DesktopShell,GlassSegmented,GlassToggle,GlassField,GlassSheet,StatusBar,ProjectConstellation,Avatar,SyncBadge}=NS;const D=window.GG_DATA;
const OV={font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)'};
const Jar=({fill,size=30})=><span style={{width:size*.73,height:size,borderRadius:'4px 4px 8px 8px',border:'1.2px solid var(--text-dim)',position:'relative',overflow:'hidden',display:'block',flex:'none'}}><span style={{position:'absolute',left:0,right:0,bottom:0,height:fill+'%',background:'var(--aurora-mint)',display:'block'}}/></span>;
const Stat=({label,children,sub})=><GlassSurface level={2} radius="lg" style={{padding:16,display:'grid',gap:8,alignContent:'start'}}><div style={OV}>{label}</div>{children}{sub&&<div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{sub}</div>}</GlassSurface>;
const PERSP=['Translator','Community','Church','Consultant'];

function Prepare({go}){return <div style={{display:'grid',gap:14}}>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
    <Stat label="Passage under review"><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>Ruth 2:1–4</div><div style={{display:'flex',gap:6}}><GlassChip size="sm" leading={<Icon name="book" size={10}/>}>BSB</GlassChip><GlassChip size="sm">Narrative</GlassChip></div></Stat>
    <Stat label="Perspectives" sub="Four short surveys, one per role"><div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{PERSP.map(p=><GlassChip key={p} size="sm">{p}</GlassChip>)}</div></Stat>
    <Stat label="Repeat" sub="Repeat when it is appropriate."><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>Open</div></Stat>
  </div>
  <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:12}}>
    <div style={OV}>Survey settings</div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}><GlassField label="Assessment name" value="River assessment" readOnly/><GlassField label="Coordinator" value="Miriam" readOnly/></div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}><div><div style={{font:'var(--type-label)'}}>Optional free text on every question</div><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>Participants can add a sentence.</div></div><GlassToggle checked onChange={()=>{}}/></div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}><div><div style={{font:'var(--type-label)'}}>Detailed report level</div><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>Simple for participants, detailed for the team.</div></div><GlassToggle checked onChange={()=>{}}/></div>
    <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}><GlassButton variant="glass" size="sm">Save draft</GlassButton><GlassButton variant="dark" size="sm" trailing={<Icon name="chevronRight" size={14}/>} onClick={()=>go('Collect')}>Start collecting</GlassButton></div>
  </GlassSurface>
</div>}

function Collect({openPhone}){const [inv,setInv]=React.useState(false);return <div style={{display:'grid',gap:14}}>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
    {[['Translator','6 of 6','Complete'],['Community','9 of 14','Open'],['Church','2 of 4','Open'],['Consultant','0 of 1','Not yet']].map(([p,n,s])=><Stat key={p} label={p} sub={s}><div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>{n}</div></Stat>)}
  </div>
  <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 300px',gap:14,alignItems:'start'}}>
    <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:10}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={OV}>Participant preview</div><GlassButton variant="quiet" size="sm" trailing={<Icon name="maximize" size={13}/>} onClick={openPhone}>Open on phone</GlassButton></div>
      <SurveyQuestion perspective="Community" progress="3 of 8" question="When the passage was read aloud, did the meaning come through clearly?" value={2} note={null}/>
    </GlassSurface>
    <div style={{display:'grid',gap:12}}>
      <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:10}}>
        <div style={OV}>Invite</div>
        <div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Survey participants only need the survey link.</div>
        <GlassButton variant="dark" size="sm" full onClick={()=>setInv(true)}>Copy survey link</GlassButton><GlassButton size="sm" full>Invite a collaborator</GlassButton>
      </GlassSurface>
      <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:10}}><div style={OV}>Sync</div><SyncBadge state="syncing" count={3}/><div style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>Community responses from Ruth 2 read-aloud, saved on device.</div></GlassSurface>
    </div>
  </div>
  {inv&&<div onClick={()=>setInv(false)} style={{position:'fixed',inset:0,display:'grid',placeItems:'center',background:'rgba(14,20,32,.18)'}}><GlassSurface level={4} radius="xl" style={{padding:20,width:340,background:'var(--material-floating)',display:'grid',gap:10}}><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>Link copied</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Anyone with the link can answer the Community survey once.</div><GlassButton variant="dark" size="sm" full>Done</GlassButton></GlassSurface></div>}
</div>}

function Understand(){const [lvl,setLvl]=React.useState('Simple');const [res,setRes]=React.useState(false);const bands=[['Clarity','Growing',66],['Naturalness','Mostly',66],['Accuracy','Fully',94],['Church acceptance','A little',38]];return <div style={{display:'grid',gap:14}}>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Quality band: <b style={{fontWeight:600,color:'var(--text-title)'}}>Growing</b>. Detailed view available.</div><GlassSegmented size="sm" options={['Simple','Detailed']} value={lvl} onChange={setLvl}/></div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12}}>
    {bands.map(([k,b,f])=><Stat key={k} label={k} sub={lvl==='Detailed'?'Translator · Community · Church agree':undefined}><div style={{display:'flex',alignItems:'center',gap:12}}><Jar fill={f}/><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',whiteSpace:'nowrap'}}>{b}</div></div></Stat>)}
  </div>
  <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 340px',gap:14,alignItems:'start'}}>
    <div style={{display:'grid',gap:10}}><div style={OV}>Progress by chapter</div><ProgressGrid books={D.progress}/></div>
    <div style={{display:'grid',gap:10}}><div style={OV}>Open threads</div>
      <ReviewThread anchor="Ruth 2:3" resolved={res} onToggleResolved={()=>setRes(!res)} comments={[{name:'Amos',role:'Community',when:'14:20',text:'“Happened to come” sounded like an accident to the listeners. Is that the sense?'},{name:'Miriam',role:'Translator',when:'15:02',text:'It is. The BSB keeps the narrator’s understatement; the Hebrew hints at providence.'}]}/>
    </div>
  </div>
</div>}

function Improve(){return <div style={{display:'grid',gap:14}}>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
    <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:10}}><div style={OV}>Reflection</div><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>What did the community hear that the team did not expect?</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Four Community answers mentioned 2:3. Consider a read-aloud with the church group before revising.</div></GlassSurface>
    <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:10}}><div style={OV}>Next step</div><div style={{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)'}}>Church acceptance: A little</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Two of four church responses in. Repeat when it is appropriate.</div><GlassButton variant="glass" size="sm">Plan a repeat</GlassButton></GlassSurface>
    <GlassSurface level={2} radius="xl" style={{padding:18,display:'grid',gap:10}}><div style={OV}>Report</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Simple report for participants. Detailed report for the team and consultant.</div><div style={{display:'flex',gap:8}}><GlassButton size="sm">Simple</GlassButton><GlassButton variant="dark" size="sm">Detailed</GlassButton></div></GlassSurface>
  </div>
</div>}

function Phone({onClose}){const [i,setI]=React.useState(2);const [v,setV]=React.useState(null);const Q=['Here to take the survey?','When the passage was read aloud, did the meaning come through clearly?','Did the words sound like the way people speak here?'];return <div style={{position:'fixed',inset:0,display:'grid',placeItems:'center',background:'rgba(14,20,32,.22)'}} onClick={onClose}>
  <div onClick={e=>e.stopPropagation()} style={{width:390,height:760,borderRadius:'var(--r-screen)',background:'var(--aurora-field)',boxShadow:'var(--shadow-float)',overflow:'hidden',display:'flex',flexDirection:'column',border:'var(--border-glass)'}}>
    <StatusBar/>
    <div style={{padding:'8px 18px 0',display:'flex',justifyContent:'space-between',alignItems:'center'}}><GlassIconButton label="Close" size={38} onClick={onClose}><Icon name="x" size={16}/></GlassIconButton><span style={OV}>Community · River assessment</span><span style={{width:38}}/></div>
    <div style={{flex:1,display:'grid',alignContent:'center',padding:18,gap:14}}>
      {i===0?<GlassSurface level={3} radius="xl" style={{padding:22,display:'grid',gap:12}}><div style={{font:'var(--type-hero)',letterSpacing:'var(--ls-hero)'}}>{Q[0]}</div><div style={{font:'var(--type-body)',color:'var(--text-body)'}}>Eight short questions about Ruth 2. Your answers stay with the team.</div><GlassButton variant="dark" full trailing={<Icon name="chevronRight" size={16}/>} onClick={()=>setI(1)}>Begin</GlassButton></GlassSurface>
      :<SurveyQuestion perspective="Community" progress={`${i} of 8`} question={Q[i]||Q[2]} value={v} onChange={setV} note={null}/>}
      {i>0&&<div style={{display:'flex',justifyContent:'space-between'}}><GlassButton variant="quiet" size="sm" onClick={()=>{setI(i-1);setV(null)}}>Back</GlassButton><GlassButton variant="dark" size="sm" disabled={v==null} trailing={<Icon name="chevronRight" size={14}/>} onClick={()=>{setI(i+1);setV(null)}}>Next</GlassButton></div>}
    </div>
  </div></div>}

function App(){const [ph,setPh]=React.useState('Understand');const [phone,setPhone]=React.useState(false);const [view,setView]=React.useState('assessment');
  const groups=[{label:'River project',items:[{label:'River assessment',meta:'Collect',active:view==='assessment',onSelect:()=>setView('assessment')},{label:'Earlier assessment',meta:'Improve'}]},{label:'Hill project',empty:'No assessments yet'},{label:'Partner',items:[{label:'All projects',active:view==='map',onSelect:()=>setView('map')}]}];
  return <>
  <DesktopShell crumb={view==='map'?'Partner':'River project'} title={view==='map'?'All projects':'River assessment'} phases={view==='map'?[]:['Prepare','Collect','Understand','Improve']} phase={ph} onPhase={setPh} groups={groups} style={{minHeight:'100vh',borderRadius:0}}
    action={<GlassButton size="sm" leading={<Icon name="plus" size={14}/>}>New assessment</GlassButton>}>
    {view==='map'?<ProjectConstellation map regions={[{name:'East Africa',lon:36,lat:-2},{name:'South Asia',lon:80,lat:22},{name:'Melanesia',lon:147,lat:-6}]} projects={[{id:'river',title:'River',region:'East Africa',books:3,stage:'translate',recency:1,reported:true,image:D.media.barley},{id:'hill',title:'Hill',region:'East Africa',books:1,stage:'understand',recency:.5,dx:40,dy:-30},{id:'ganga',title:'Ganga',region:'South Asia',books:5,stage:'revise',recency:.8,image:D.media.almond},{id:'sepik',title:'Sepik',region:'Melanesia',books:2,stage:'paused',recency:.2}]} style={{minHeight:520}}/>
    :ph==='Prepare'?<Prepare go={setPh}/>:ph==='Collect'?<Collect openPhone={()=>setPhone(true)}/>:ph==='Understand'?<Understand/>:<Improve/>}
  </DesktopShell>
  {phone&&<Phone onClose={()=>setPhone(false)}/>}
  </>}
window.ThreeDReviewApp=App;if(!window.GG_EMBED&&document.getElementById('root'))ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

}
