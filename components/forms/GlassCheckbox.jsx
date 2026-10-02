import React from 'react';
// Checkbox row: the whole row is one role="checkbox" button (min 44px tall), so Space and Enter toggle it
// and a screen reader hears the label plus checked / not checked / mixed. The box is a key-radius glass well;
// checked fills with --surface-inverse like GlassToggle, so it flips correctly under [data-theme="dark"].
export function GlassCheckbox({label,checked=false,onChange,disabled=false,style,...rest}){
  const [ring,setRing]=React.useState(false);
  const mixed=checked==='mixed';const on=checked===true||mixed;
  return React.createElement('button',{type:'button',role:'checkbox','aria-checked':mixed?'mixed':!!checked,'aria-disabled':disabled||undefined,disabled,
    onClick:()=>{if(!disabled&&onChange)onChange(mixed?true:!checked);},
    onFocus:e=>setRing(!!(e.target.matches&&e.target.matches(':focus-visible'))),onBlur:()=>setRing(false),
    style:{display:'flex',alignItems:'center',gap:12,minHeight:44,minWidth:44,width:label?'100%':undefined,padding:label?'0 14px 0 10px':'0 11px',
      background:'transparent',border:'none',borderRadius:'var(--r-pill)',cursor:disabled?'default':'pointer',opacity:disabled?.45:1,
      textAlign:'left',font:'var(--type-label)',color:'var(--text-title)',outline:'none',
      boxShadow:ring?'0 0 0 3px var(--focus-ring)':'none',WebkitTapHighlightColor:'transparent',...style},...rest},
    React.createElement('span',{'aria-hidden':true,style:{flex:'none',display:'grid',placeItems:'center',width:22,height:22,borderRadius:'var(--r-key)',
      border:on?'.5px solid transparent':'var(--border-glass)',background:on?'var(--surface-inverse)':'var(--glass-fill-2)',
      color:'var(--text-on-inverse)',boxShadow:on?'var(--shadow-rest)':'var(--inner-top)',
      transition:'background var(--dur-fast) var(--ease-liquid)'}},
      on?React.createElement('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:3,strokeLinecap:'round',strokeLinejoin:'round'},
        React.createElement('path',{d:mixed?'M6 12h12':'M5 12.5l4.5 4.5L19 7.5'})):null),
    label?React.createElement('span',{style:{flex:1,minWidth:0}},label):null);
}
