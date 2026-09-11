import React from 'react';
export function ResourceCard({type,title,meta,image,onOpen,style,...rest}){
  return React.createElement('button',{onClick:onOpen,style:{display:'block',textAlign:'start',padding:0,cursor:onOpen?'pointer':'default',borderRadius:'var(--r-lg)',overflow:'hidden',background:'var(--glass-fill-3)',border:'var(--border-glass)',boxShadow:'var(--shadow-card), var(--inner-top)',color:'inherit',...style},...rest},
    React.createElement('div',{style:{position:'relative',height:90,background:image?`url(${image}) center/cover, var(--glass-fill-2)`:'var(--glass-fill-2)'}},
      type?React.createElement('span',{style:{position:'absolute',left:8,top:8,padding:'4px 8px',borderRadius:'var(--r-pill)',background:'rgba(255,255,255,.85)',font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--ink-900)'}},type):null),
    React.createElement('div',{style:{padding:'10px 12px 12px'}},
      React.createElement('div',{style:{font:'var(--fw-semibold) 13px/1.2 var(--font-core)',color:'var(--text-title)'}},title),
      meta?React.createElement('div',{style:{marginTop:3,font:'var(--type-caption)',color:'var(--text-muted)'}},meta):null));
}
