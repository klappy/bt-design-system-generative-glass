import React from 'react';
export function GlassIconButton({size=52,tone='light',label,style,children,...rest}){
  const [h,setH]=React.useState(false),[a,setA]=React.useState(false);
  const night=tone==='night',dark=tone==='dark';
  return React.createElement('button',{'aria-label':label,
    onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},
    onMouseDown:()=>setA(true),onMouseUp:()=>setA(false),
    style:{width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',
      borderRadius:'var(--r-pill)',cursor:'pointer',flex:'none',
      background:dark?'var(--surface-inverse)':night?'var(--glass-fill-night)':'var(--glass-fill-3)',
      color:dark?'var(--text-on-inverse)':night?'var(--on-night-900)':'var(--text-body)',
      border:night?'var(--border-night)':dark?'.5px solid rgba(255,255,255,.14)':'var(--border-glass)',
      backdropFilter:'blur(var(--blur-medium)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-medium)) var(--sat-glass)',
      boxShadow:night||dark?'var(--shadow-night)':`var(--shadow-rest), var(--inner-top)${h?', var(--glow-focus)':''}`,
      transition:'var(--t-hover)',transform:a?'scale(var(--press-scale))':h?'var(--hover-lift)':'none',...style},...rest},children);
}
