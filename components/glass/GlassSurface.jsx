import React from 'react';
const FILL={1:'var(--glass-fill-1)',2:'var(--glass-fill-2)',3:'var(--glass-fill-3)',4:'var(--glass-fill-4)'};
const BLUR={sheer:'var(--blur-sheer)',soft:'var(--blur-soft)',medium:'var(--blur-medium)',strong:'var(--blur-strong)',heavy:'var(--blur-heavy)'};
const RAD={sm:'var(--r-sm)',md:'var(--r-md)',lg:'var(--r-lg)',xl:'var(--r-xl)','2xl':'var(--r-2xl)',pill:'var(--r-pill)'};
const SHADOW={none:'none',rest:'var(--shadow-rest)',card:'var(--shadow-card)',float:'var(--shadow-float)'};
export function GlassSurface({level=2,blur='medium',radius='xl',shadow='card',tone='light',refraction=true,float=false,as='div',style,children,...rest}){
  const night=tone==='night';
  const s={
    position:'relative',
    background:night?(level>=3?'var(--glass-fill-night-strong)':'var(--glass-fill-night)'):FILL[level],
    backdropFilter:`blur(${BLUR[blur]}) var(--sat-glass)`,
    WebkitBackdropFilter:`blur(${BLUR[blur]}) var(--sat-glass)`,
    border:night?'var(--border-night)':'var(--border-glass)',
    borderRadius:RAD[radius]||radius,
    boxShadow:night?'var(--shadow-night), var(--inner-top)':`${SHADOW[shadow]}, var(--inner-top), var(--inner-edge)`,
    color:night?'var(--text-on-night)':'var(--text-body)',
    animation:float?'gg-float var(--float-cycle) var(--ease-liquid) infinite':undefined,
    ...style};
  return React.createElement(as,{style:s,...rest},
    refraction&&!night?React.createElement('span',{'aria-hidden':true,style:{position:'absolute',inset:0,borderRadius:'inherit',background:'var(--refraction)',opacity:.6,pointerEvents:'none'}}):null,
    children);
}
