import React from 'react';
export function GlassButton({variant='glass',size='md',full=false,leading,trailing,style,children,...rest}){
  const pad=size==='sm'?'8px 14px':size==='lg'?'15px 26px':'12px 20px';
  const fs=size==='sm'?'var(--fs-caption)':size==='lg'?'var(--fs-body)':'var(--fs-label)';
  const V={
    glass:{background:'var(--glass-fill-3)',color:'var(--text-title)',border:'var(--border-glass)',boxShadow:'var(--shadow-rest), var(--inner-top)'},
    solid:{background:'var(--paper-000)',color:'var(--ink-900)',border:'.5px solid rgba(255,255,255,.9)',boxShadow:'var(--shadow-card)'},
    dark:{background:'var(--surface-inverse)',color:'var(--text-on-inverse)',border:'.5px solid rgba(255,255,255,.14)',boxShadow:'var(--shadow-card)'},
    night:{background:'var(--glass-fill-night)',color:'var(--on-night-900)',border:'var(--border-night)',boxShadow:'var(--shadow-night)',backdropFilter:'blur(var(--blur-medium))',WebkitBackdropFilter:'blur(var(--blur-medium))'},
    quiet:{background:'transparent',color:'var(--text-muted)',border:'.5px solid transparent',boxShadow:'none'}
  }[variant];
  const [h,setH]=React.useState(false),[a,setA]=React.useState(false);
  return React.createElement('button',{
    onMouseEnter:()=>setH(true),onMouseLeave:()=>{setH(false);setA(false)},
    onMouseDown:()=>setA(true),onMouseUp:()=>setA(false),
    style:{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'var(--gap-inline)',whiteSpace:'nowrap',
      width:full?'100%':undefined,padding:pad,borderRadius:'var(--r-pill)',cursor:'pointer',
      font:`var(--fw-semibold) ${fs}/1 var(--font-core)`,letterSpacing:'var(--ls-body)',
      transition:'var(--t-hover)',transform:a?'scale(var(--press-scale))':h?'var(--hover-lift)':'none',
      filter:h?'brightness(1.04)':'none',...V,...style},...rest},
    leading,children,trailing);
}
