import React from 'react';
export function GlassSegmented({options=[],value,onChange,size='md',style,...rest}){
  const h=size==='sm'?32:36;
  return React.createElement('div',{role:'radiogroup',style:{display:'flex',padding:4,borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--inner-top)',...style},...rest},
    options.map(o=>{const v=o.value??o,l=o.label??o,a=v===value;return React.createElement('button',{key:v,role:'radio','aria-checked':a,onClick:()=>onChange&&onChange(v),style:{flex:size==='sm'?'none':1,height:h,padding:'0 12px',borderRadius:'var(--r-pill)',border:'none',cursor:'pointer',whiteSpace:'nowrap',
      background:a?'var(--surface-solid)':'transparent',color:a?'var(--text-title)':'var(--text-muted)',boxShadow:a?'var(--shadow-rest)':'none',font:'var(--fw-semibold) 12px/1 var(--font-core)',transition:'var(--t-hover)'}},l)}));
}
