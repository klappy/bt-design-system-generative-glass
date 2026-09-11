import React from 'react';
const FACE={ar:'var(--font-scripture-arabic)',he:'var(--font-scripture-hebrew)',hi:'var(--font-scripture-devanagari)',ne:'var(--font-scripture-devanagari)',gu:'var(--font-scripture-gujarati)',el:'var(--font-scripture-greek)',grc:'var(--font-scripture-greek)',zh:'var(--font-scripture-han)'};
export function CatalogRow({id,title,subject,lang='en',dir='ltr',release,meta,onOpen,first=false,style,...rest}){
  const base=(lang||'en').split('-')[0];
  return React.createElement('button',{onClick:onOpen,style:{boxSizing:'border-box',display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:14,alignItems:'center',width:'100%',padding:'12px 16px',border:'none',borderTop:first?'none':'var(--border-hairline)',background:'transparent',cursor:onOpen?'pointer':'default',textAlign:'start',color:'inherit',...style},...rest},
    React.createElement('div',{style:{minWidth:0}},
      subject?React.createElement('div',{style:{font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)'}},subject):null,
      React.createElement('div',{dir,lang,style:{font:`500 15px/1.35 ${FACE[base]||'var(--font-core)'}`,color:'var(--text-title)',marginTop:3,textAlign:dir==='rtl'?'end':'start',letterSpacing:FACE[base]?0:'-0.01em'}},title),
      id?React.createElement('div',{style:{marginTop:3,font:'11px/1.3 var(--font-mono)',color:'var(--text-dim)'}},id):null),
    React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:5,flex:'none'}},
      release?React.createElement('span',{style:{padding:'4px 9px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',font:'var(--fw-medium) 10px/1.1 var(--font-mono)',color:'var(--text-title)'}},release):null,
      meta?React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-dim)'}},meta):null));
}
