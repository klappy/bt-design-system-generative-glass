import React from 'react';
import {Icon} from '../icons/Icon.jsx';
export function GlassSearch({value,onChange,placeholder='Search',height=52,style,...rest}){
  const [f,setF]=React.useState(false);
  return React.createElement('div',{style:{boxSizing:'border-box',display:'flex',alignItems:'center',gap:12,height,padding:'0 20px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',
    backdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',boxShadow:f?'var(--shadow-rest), var(--inner-top), var(--glow-focus)':'var(--shadow-rest), var(--inner-top)',transition:'var(--t-hover)',...style}},
    React.createElement(Icon,{name:'search',size:18,color:'var(--text-muted)'}),
    React.createElement('input',{type:'search',value,onChange,placeholder,onFocus:()=>setF(true),onBlur:()=>setF(false),style:{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',font:'var(--type-body)',color:'var(--text-title)'},...rest}));
}
