import React from 'react';
export function KeyTermPopover({source,label,definition,onClose,onOpen,openLabel='Open in glossary',style,...rest}){
  return React.createElement('div',{role:'dialog',style:{width:'min(320px,100%)',padding:'14px 16px',borderRadius:'var(--r-lg)',
    background:'var(--material-floating)',backdropFilter:'blur(var(--blur-heavy)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-heavy)) var(--sat-glass)',
    border:'var(--border-glass)',boxShadow:'var(--shadow-float), var(--inner-top)',animation:'gg-rise 420ms var(--ease-swell) both',...style},...rest},
    React.createElement('div',{style:{font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)'}},'Key term',source?' · '+source:''),
    React.createElement('div',{style:{marginTop:4,font:'var(--fw-semibold) var(--fs-body)/1.2 var(--font-core)',color:'var(--text-title)'}},label),
    React.createElement('p',{style:{margin:'6px 0 0',font:'var(--type-caption)',color:'var(--text-body)',textWrap:'pretty'}},definition),
    React.createElement('div',{style:{marginTop:10,display:'flex',gap:8}},
      React.createElement('button',{onClick:onOpen,style:{padding:'7px 12px',borderRadius:'var(--r-pill)',border:'none',cursor:'pointer',background:'var(--surface-inverse)',color:'var(--text-on-inverse)',font:'var(--fw-semibold) 11px/1 var(--font-core)',whiteSpace:'nowrap'}},openLabel),
      React.createElement('button',{onClick:onClose,style:{padding:'7px 12px',borderRadius:'var(--r-pill)',cursor:'pointer',background:'var(--glass-fill-3)',border:'var(--border-glass)',color:'var(--text-title)',font:'var(--fw-semibold) 11px/1 var(--font-core)'}},'Close')));
}
