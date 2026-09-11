import React from 'react';
export function DesktopShell({appName='3D Review',action,groups=[],phases=[],phase,onPhase,crumb,title,children,style,...rest}){
  return React.createElement('div',{style:{display:'grid',gridTemplateColumns:'210px minmax(0,1fr)',minHeight:440,borderRadius:'var(--r-lg)',overflow:'hidden',background:'var(--aurora-field)',...style},...rest},
    React.createElement('aside',{style:{padding:'20px 14px',background:'var(--glass-fill-1)',borderRight:'var(--border-glass-soft)',display:'flex',flexDirection:'column',gap:14}},
      React.createElement('div',{style:{font:'var(--fw-medium) 14px/1.2 var(--font-core)',letterSpacing:'-0.045em',color:'var(--text-title)',padding:'0 6px'}},appName),
      action,
      React.createElement('nav',{style:{display:'grid',gap:2}},groups.map((g,i)=>React.createElement(React.Fragment,{key:i},
        React.createElement('div',{style:{font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-dim)',padding:i?'10px 8px 4px':'6px 8px 4px'}},g.label),
        (g.items&&g.items.length?g.items:[{label:g.empty||'Nothing yet',muted:true}]).map((it,j)=>React.createElement('button',{key:j,onClick:it.onSelect,style:{boxSizing:'border-box',display:'flex',justifyContent:'space-between',gap:6,width:'100%',padding:'7px 8px',borderRadius:'var(--r-xs)',border:'none',textAlign:'start',cursor:it.onSelect?'pointer':'default',
          background:it.active?'var(--glass-fill-3)':'transparent',font:'var(--type-caption)',color:it.muted?'var(--text-muted)':it.active?'var(--text-title)':'var(--text-body)'}},
          React.createElement('span',null,it.label),it.meta?React.createElement('span',{style:{color:'var(--text-dim)'}},it.meta):null)))))),
    React.createElement('main',{style:{padding:24,display:'flex',flexDirection:'column',gap:14,minWidth:0}},
      React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}},
        React.createElement('div',{style:{flex:'none',whiteSpace:'nowrap'}},crumb?React.createElement('div',{style:{font:'var(--type-caption)',color:'var(--text-muted)'}},crumb):null,title?React.createElement('div',{style:{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',color:'var(--text-title)'}},title):null),
        phases.length?React.createElement('div',{style:{display:'flex',padding:4,borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--inner-top)'}},phases.map(p=>{const a=p===phase;return React.createElement('button',{key:p,onClick:()=>onPhase&&onPhase(p),style:{flex:'none',height:32,padding:'0 12px',borderRadius:'var(--r-pill)',border:'none',cursor:'pointer',whiteSpace:'nowrap',background:a?'var(--surface-solid)':'transparent',color:a?'var(--text-title)':'var(--text-muted)',boxShadow:a?'var(--shadow-rest)':'none',font:'var(--fw-semibold) 12px/1 var(--font-core)',transition:'var(--t-hover)'}},p)})):null),
      children));
}
