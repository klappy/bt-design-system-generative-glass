import React from 'react';
export function GlassField({label,value,onChange,placeholder,type='text',style,...rest}){
  const [f,setF]=React.useState(false);
  return React.createElement('label',{style:{display:'grid',gap:6,...style}},
    label?React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-muted)',paddingLeft:14}},label):null,
    React.createElement('input',{type,value,onChange,placeholder,onFocus:()=>setF(true),onBlur:()=>setF(false),style:{boxSizing:'border-box',width:'100%',height:48,padding:'0 18px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',
      boxShadow:f?'var(--shadow-rest), var(--inner-top), var(--glow-focus)':'var(--shadow-rest), var(--inner-top)',font:'var(--type-body)',color:'var(--text-title)',outline:'none',transition:'var(--t-hover)'},...rest}));
}
