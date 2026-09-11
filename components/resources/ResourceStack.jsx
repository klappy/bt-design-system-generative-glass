import React from 'react';
export function ResourceStack({items=[],height=150,style,...rest}){
  const [h,setH]=React.useState(false);
  const rot=[-8,-2,6],dx=[-38,0,38],top=[22,18,26];
  return React.createElement('div',{onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{position:'relative',height,...style},...rest},
    items.slice(0,3).map((it,i)=>React.createElement('div',{key:i,title:it.title,style:{position:'absolute',left:'50%',top:top[i],width:150,height:96,borderRadius:'var(--r-md)',
      transform:`translateX(-50%) rotate(${rot[i]*(h?1.6:1)}deg) translateX(${dx[i]*(h?1.5:1)}px)`,transition:'transform var(--dur-slow) var(--ease-liquid)',
      background:`url(${it.image}) center/cover, var(--glass-fill-3)`,boxShadow:i===2?'var(--shadow-float)':'var(--shadow-card)',border:'var(--border-glass)'}},
      it.palette?React.createElement('span',{style:{position:'absolute',left:8,bottom:8,display:'flex',gap:3}},it.palette.map((c,j)=>React.createElement('span',{key:j,style:{width:10,height:10,borderRadius:'50%',background:c,border:'.5px solid rgba(255,255,255,.8)'}}))):null)));
}
