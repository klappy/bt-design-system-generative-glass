import React from 'react';
const MOOD={understand:['#BCD6F4','#C9C3F0'],translate:['#FBD8BD','#F6EFC6'],revise:['#C9C3F0','#F2CFDB'],paused:['#F2CFDB','#E3E6ED']};
const W=1000,Hh=600;
function project(lon,lat){ if(typeof window!=='undefined'&&window.ggProject) return window.ggProject(lon,lat); return {x:(lon+180)/360*100,y:(90-lat)/180*100}; }
export function ProjectConstellation({regions=[],projects=[],value,onChange,map=true,zoom,onZoom,moods=MOOD,style,...rest}){
  const [,tick]=React.useState(0);
  React.useEffect(()=>{if(!map)return;let t;const w=()=>{if(window.ggProject&&window.d3)tick(x=>x+1);else t=setTimeout(w,150)};w();return()=>clearTimeout(t);},[map]);
  const R=regions.map(r=>({...r,...project(r.lon,r.lat)}));
  const zc=R.find(r=>r.name===zoom);
  return React.createElement('div',{style:{position:'relative',aspectRatio:'5/3',borderRadius:'var(--r-lg)',overflow:'hidden',background:'var(--surface-app)',...style},...rest},
    React.createElement('div',{'aria-hidden':true,style:{position:'absolute',inset:'-18%',background:'var(--aurora-field)',filter:'blur(28px)',opacity:.7}}),
    React.createElement('div',{style:{position:'absolute',inset:0,transformOrigin:zc?`${zc.x}% ${zc.y}%`:'50% 50%',transform:zc?'scale(2.3)':'none',transition:'transform var(--dur-slow) var(--ease-liquid)'}},
      map?React.createElement('div',{'aria-hidden':true,style:{position:'absolute',inset:0,color:'var(--text-title)',opacity:.55}},React.createElement('gg-world-outline',null)):null,
      R.map(r=>React.createElement('button',{key:r.name,onClick:()=>onZoom&&onZoom(zoom===r.name?null:r.name),style:{position:'absolute',left:r.x+'%',top:(r.y-24)+'%',transform:`translateX(-50%) scale(${zc?1/2.3:1})`,transformOrigin:'50% 100%',padding:'4px 8px',border:'none',background:'transparent',cursor:'pointer',font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',color:zoom===r.name?'var(--text-title)':'var(--text-dim)',whiteSpace:'nowrap',textTransform:'uppercase'}},r.name)),
      projects.map((p,i)=>{const c=R.find(r=>r.name===p.region)||{x:50,y:50};const size=30+Math.min(p.books||1,12)*4.5;const rec=p.recency??.6;const sel=value===p.id;const [m1,m2]=moods[p.stage]||moods.understand;
        return React.createElement('button',{key:p.id||i,onClick:()=>onChange&&onChange(p.id,p),title:p.title,style:{position:'absolute',left:`calc(${c.x+(p.dx||0)}% - ${size/2}px)`,top:`calc(${c.y+(p.dy||0)}% - ${size/2}px)`,width:size,height:size,borderRadius:'50%',padding:0,cursor:'pointer',overflow:'hidden',
          background:'var(--glass-fill-3)',border:p.reported?'.5px solid rgba(255,255,255,.75)':'1px dashed var(--text-dim)',boxShadow:sel?'var(--shadow-float), var(--inner-top), var(--glow-focus)':'var(--shadow-card), var(--inner-top)',opacity:.45+.55*rec,filter:`blur(${(1-rec)*2.2}px)`,transform:sel?'scale(1.12)':'none',transition:'var(--t-hover)',animation:`gg-orbit ${5+(i%4)}s var(--ease-liquid) ${i*.4}s infinite`}},
          React.createElement('span',{'aria-hidden':true,style:{position:'absolute',inset:'-30%',background:`radial-gradient(40% 40% at 35% 35%,${m1},transparent 70%),radial-gradient(40% 40% at 68% 70%,${m2},transparent 70%)`,filter:'blur(8px)',opacity:.9}}),
          p.image?React.createElement('span',{'aria-hidden':true,style:{position:'absolute',inset:0,borderRadius:'50%',background:`url(${p.image}) center/cover`,opacity:.55}}):null,
          React.createElement('span',{'aria-hidden':true,style:{position:'absolute',inset:0,borderRadius:'50%',background:'var(--refraction)',opacity:.7}}))})));
}
