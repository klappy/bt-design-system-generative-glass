import React from 'react';
export function GlassToggle({label,checked=false,onChange,style,...rest}){
  return React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,padding:'0 4px 0 14px',...style}},
    label?React.createElement('span',{style:{font:'var(--type-label)',color:'var(--text-title)'}},label):null,
    React.createElement('button',{role:'switch','aria-checked':checked,'aria-label':label,onClick:()=>onChange&&onChange(!checked),style:{width:44,height:26,borderRadius:'var(--r-pill)',border:'var(--border-glass)',cursor:'pointer',position:'relative',padding:0,
      background:checked?'var(--surface-inverse)':'var(--glass-fill-2)',boxShadow:'var(--inner-top)',transition:'background var(--dur-fast) var(--ease-liquid)'},...rest},
      React.createElement('span',{style:{position:'absolute',top:3,left:checked?21:3,width:20,height:20,borderRadius:'50%',background:checked?'var(--text-on-inverse)':'var(--surface-solid)',boxShadow:'var(--shadow-rest)',transition:'left var(--dur-fast) var(--ease-liquid)'}})));
}
