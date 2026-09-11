import React from 'react';
export function FilterChips({options=[],value=[],onChange,bleed=true,style,...rest}){
  const toggle=v=>onChange&&onChange(value.includes(v)?value.filter(x=>x!==v):[...value,v]);
  return React.createElement('div',{style:{display:'flex',gap:8,overflow:bleed?'hidden':'auto',...style},...rest},
    options.map(o=>{const v=o.value??o,l=o.label??o,a=value.includes(v);return React.createElement('button',{key:v,'aria-pressed':a,onClick:()=>toggle(v),style:{flex:'none',height:36,padding:'0 14px',borderRadius:'var(--r-pill)',cursor:'pointer',whiteSpace:'nowrap',
      background:a?'var(--surface-inverse)':'var(--glass-fill-3)',color:a?'var(--text-on-inverse)':'var(--text-title)',border:a?'.5px solid transparent':'var(--border-glass)',boxShadow:a?'var(--shadow-card)':'var(--shadow-rest), var(--inner-top)',font:'var(--fw-medium) 12px/1 var(--font-core)',transition:'var(--t-hover)'}},l)}));
}
