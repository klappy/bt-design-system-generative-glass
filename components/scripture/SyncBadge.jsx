import React from 'react';
export function SyncBadge({state='ok',label,count,style,...rest}){
  const text=label||(state==='ok'?'Up to date':state==='syncing'?`Syncing${count?' '+count+' items':''}`:'Offline · saved on device');
  const dot=state==='ok'?{background:'var(--accent-teal)',boxShadow:'0 0 6px rgba(63,182,168,.6)'}
    :state==='syncing'?{background:'var(--text-muted)',animation:'gg-breathe 1.6s var(--ease-liquid) infinite'}
    :{border:'1px dashed var(--text-muted)',boxSizing:'border-box'};
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:6,padding:'5px 11px',borderRadius:'var(--r-pill)',
    background:'var(--glass-fill-3)',border:state==='offline'?'.5px dashed rgba(255,255,255,.7)':'var(--border-glass)',
    backdropFilter:'blur(var(--blur-soft))',WebkitBackdropFilter:'blur(var(--blur-soft))',
    font:'var(--fw-medium) var(--fs-micro)/1.1 var(--font-core)',color:'var(--text-muted)',letterSpacing:'.01em',whiteSpace:'nowrap',...style},...rest},
    React.createElement('span',{'aria-hidden':true,style:{width:7,height:7,borderRadius:'50%',flex:'none',...dot}}),text);
}
