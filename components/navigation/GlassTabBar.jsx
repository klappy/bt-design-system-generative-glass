import React from 'react';
import {Icon} from '../icons/Icon.jsx';
export function GlassTabBar({items=[],value,onChange,style,...rest}){
  return React.createElement('div',{role:'tablist',style:{display:'inline-flex',gap:4,padding:6,borderRadius:'var(--r-pill)',background:'var(--glass-fill-3)',border:'var(--border-glass)',
    backdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',boxShadow:'var(--shadow-float), var(--inner-top)',...style},...rest},
    items.map(it=>{const a=it.id===value;return React.createElement('button',{key:it.id,role:'tab','aria-selected':a,'aria-label':it.label,onClick:()=>onChange&&onChange(it.id),style:{display:'inline-flex',alignItems:'center',gap:8,height:44,padding:a?'0 18px 0 14px':'0 13px',borderRadius:'var(--r-pill)',border:'none',cursor:'pointer',
      background:a?'var(--surface-inverse)':'transparent',color:a?'var(--text-on-inverse)':'var(--text-muted)',font:'var(--fw-semibold) 13px/1 var(--font-core)',transition:'var(--t-hover)'}},
      React.createElement(Icon,{name:it.icon,size:18}),a?React.createElement('span',null,it.label):null)}));
}
