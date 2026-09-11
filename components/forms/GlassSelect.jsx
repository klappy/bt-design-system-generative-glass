import React from 'react';
import {Icon} from '../icons/Icon.jsx';
export function GlassSelect({label,value,options=[],onChange,style,...rest}){
  return React.createElement('label',{style:{display:'grid',gap:6,position:'relative',...style}},
    label?React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-muted)',paddingLeft:14}},label):null,
    React.createElement('span',{style:{position:'relative',display:'flex',alignItems:'center',height:48}},
      React.createElement('select',{value,onChange:e=>onChange&&onChange(e.target.value),style:{boxSizing:'border-box',appearance:'none',WebkitAppearance:'none',width:'100%',height:48,padding:'0 40px 0 18px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--shadow-rest), var(--inner-top)',font:'var(--type-body)',color:'var(--text-title)',outline:'none'},...rest},
        options.map(o=>React.createElement('option',{key:o.value??o,value:o.value??o},o.label??o))),
      React.createElement('span',{style:{position:'absolute',right:14,pointerEvents:'none',transform:'rotate(90deg)',display:'flex'}},React.createElement(Icon,{name:'chevronRight',size:16,color:'var(--text-dim)'}))));
}
