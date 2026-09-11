import React from 'react';
const BANDS=['Not yet','A little','Mostly','Fully'];
export function SurveyQuestion({perspective,progress,question,bands=BANDS,value,onChange,note='Illustrative',freeTextPlaceholder='Anything you want to add? Optional.',style,...rest}){
  return React.createElement('div',{style:{boxSizing:'border-box',padding:18,borderRadius:'var(--r-xl)',background:'var(--glass-fill-3)',border:'var(--border-glass)',boxShadow:'var(--shadow-card), var(--inner-top), var(--inner-edge)',...style},...rest},
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline'}},
      React.createElement('span',{style:{font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)',whiteSpace:'nowrap'}},perspective,progress?' · '+progress:''),
      note?React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-dim)'}},note):null),
    React.createElement('div',{style:{marginTop:8,font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',color:'var(--text-title)',textWrap:'pretty'}},question),
    React.createElement('div',{style:{marginTop:16,display:'grid',gridTemplateColumns:`repeat(${bands.length},1fr)`,gap:8}},
      bands.map((label,i)=>{const a=value===i;const fill=[10,38,66,94][i]??Math.round((i+.5)/bands.length*100);return React.createElement('button',{key:i,onClick:()=>onChange&&onChange(i),style:{display:'flex',flexDirection:'column',alignItems:'center',gap:8,padding:'12px 6px 10px',borderRadius:'var(--r-md)',cursor:'pointer',
        border:a?'.5px solid transparent':'var(--border-glass)',background:a?'var(--surface-inverse)':'var(--glass-fill-2)',color:a?'var(--text-on-inverse)':'var(--text-title)',boxShadow:a?'var(--shadow-card)':'var(--inner-top)',font:'var(--fw-medium) 12px/1.1 var(--font-core)',transition:'var(--t-hover)'}},
        React.createElement('span',{'aria-hidden':true,style:{width:22,height:30,borderRadius:'4px 4px 8px 8px',border:`1.2px solid ${a?'var(--text-on-inverse)':'var(--text-dim)'}`,position:'relative',overflow:'hidden',display:'block'}},
          React.createElement('span',{style:{position:'absolute',left:0,right:0,bottom:0,height:fill+'%',background:'var(--aurora-mint)',display:'block'}})),
        React.createElement('span',null,label))})),
    freeTextPlaceholder?React.createElement('div',{style:{marginTop:12,display:'flex',alignItems:'center',height:44,padding:'0 16px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--inner-top)',font:'var(--type-caption)',color:'var(--text-dim)'}},freeTextPlaceholder):null);
}
