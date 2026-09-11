import React from 'react';
export function GlassInput({placeholder='Type a message',value,onChange,leading,trailing,height=58,style,...rest}){
  const [f,setF]=React.useState(false);
  return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:'var(--sp-6)',
    height,padding:'0 var(--sp-9)',borderRadius:'var(--r-pill)',
    background:'var(--glass-fill-2)',border:'var(--border-glass)',
    backdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',
    boxShadow:f?'var(--shadow-rest), var(--inner-top), var(--glow-focus)':'var(--shadow-rest), var(--inner-top)',
    transition:'var(--t-hover)',...style}},
    leading,
    React.createElement('input',{value,onChange,placeholder,onFocus:()=>setF(true),onBlur:()=>setF(false),
      style:{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',
        font:'var(--type-body)',color:'var(--text-title)'},...rest}),
    trailing);
}
