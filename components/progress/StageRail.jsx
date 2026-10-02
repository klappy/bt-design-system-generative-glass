import React from 'react';
// Display-only progress: StageRail (overall, a few stage segments) and BeadStrip (scoped, coded beads).
// Beads code kind by SHAPE and colour, state by FILL (never opacity), so they read without colour.
const BEAD_KINDS={
  plain:    {shape:'circle',  color:'var(--text-dim)'},
  scripture:{shape:'square',  color:'var(--text-title)'},
  term:     {shape:'diamond', color:'var(--accent-blue)'},
  media:    {shape:'triangle',color:'var(--accent-teal)'},
  video:    {shape:'screen',  color:'var(--accent-teal)'},
  stop:     {shape:'bar',     color:'var(--accent-red)'},
  end:      {shape:'bars',    color:'var(--accent-red)'},
};
const dims=(shape,s)=>({circle:[s,s],square:[s,s],diamond:[1.1*s,1.1*s],triangle:[1.2*s,1.1*s],screen:[1.4*s,.9*s],bar:[.3*s,1.4*s],bars:[.8*s,1.4*s]}[shape]||[s,s]);
function shapeEl(shape,x,y,w,h,solid,color,sw){
  const i=solid?0:sw/2, c={fill:solid?color:'none',stroke:solid?'none':color,strokeWidth:solid?0:sw,strokeLinejoin:'round'}, e=React.createElement;
  if(shape==='square')return e('rect',{x:x+i,y:y+i,width:w-2*i,height:h-2*i,rx:w/5,...c});
  if(shape==='screen')return e('rect',{x:x+i,y:y+i,width:w-2*i,height:h-2*i,rx:h/4.5,...c});
  if(shape==='diamond')return e('polygon',{points:[[x+w/2,y+i],[x+w-i,y+h/2],[x+w/2,y+h-i],[x+i,y+h/2]].join(' '),...c});
  if(shape==='triangle')return e('polygon',{points:[[x+w/2,y+i*1.6],[x+w-i*1.3,y+h-i],[x+i*1.3,y+h-i]].join(' '),...c});
  if(shape==='bar')return e('rect',{x,y,width:w,height:h,rx:w/2,fill:color});
  if(shape==='bars')return e('g',null,e('rect',{x,y,width:w*.375,height:h,rx:w*.18,fill:color}),e('rect',{x:x+w*.625,y,width:w*.375,height:h,rx:w*.18,fill:color}));
  return e('circle',{cx:x+w/2,cy:y+h/2,r:w/2-i,...c});
}
/** One bead. state: done (solid) | upcoming (1.5 px outline) | current (1.6x, solid, 2 px --surface-inverse ring). */
export function Bead({kind='plain',state='done',size=10,color,more,kinds=BEAD_KINDS,style,...rest}){
  const K=kinds[kind]||BEAD_KINDS.plain, col=color||K.color, cur=state==='current';
  const s=size*(cur?1.6:1), [w,h]=dims(K.shape,s), sw=1.5, satR=1.5;
  const R=cur?Math.max(w,h)/2+3:0, W=cur?2*R+2:w+(more?satR*2+1:0), H=cur?2*R+2:h+(more?satR:0);
  const ox=cur?(W-w)/2:0, oy=cur?(H-h)/2:(more?satR:0);
  const solid=state!=='upcoming'||K.shape==='bar'||K.shape==='bars';
  return React.createElement('svg',{width:+W.toFixed(2),height:+H.toFixed(2),viewBox:`0 0 ${W.toFixed(2)} ${H.toFixed(2)}`,'aria-hidden':true,
      'data-kind':kind,'data-state':state,style:{display:'block',flex:'none',overflow:'visible',...style},...rest},
    cur?React.createElement('circle',{cx:W/2,cy:H/2,r:R,fill:'none',stroke:'var(--surface-inverse)',strokeWidth:2}):null,
    shapeEl(K.shape,ox,oy,w,h,solid,col,sw),
    more?React.createElement('circle',{cx:cur?W/2+R*.72:w+satR+.5,cy:cur?H/2-R*.72:satR,r:satR,fill:'var(--text-title)'}):null);
}
/** Coded beads for the current run of items, plus optional capsules for the runs before/after it. */
export function BeadStrip({items=[],before=0,after=0,size=10,kinds,label,gap=6,style,...rest}){
  const cap=(st,k)=>React.createElement('span',{key:k,'aria-hidden':true,style:{display:'block',flex:'none',width:2*size,height:.6*size,borderRadius:999,
    background:st==='done'?'var(--text-dim)':'transparent',boxShadow:st==='done'?'none':'inset 0 0 0 1.5px var(--text-dim)'}});
  const kids=[];
  for(let i=0;i<before;i++)kids.push(cap('done','b'+i));
  items.forEach((it,i)=>kids.push(React.createElement(Bead,{key:'i'+i,size,kinds,...it})));
  for(let i=0;i<after;i++)kids.push(cap('upcoming','a'+i));
  return React.createElement('div',{role:'img','aria-label':label,style:{display:'flex',flexWrap:'wrap',alignItems:'center',gap,minHeight:2.2*size,...style},...rest},kids);
}
/** Overall progress: one segment per stage; done = solid, current = filled to `progress`, upcoming = hairline outline. */
export function StageRail({stages=[],current=0,progress=0,height=6,gap=4,label,style,...rest}){
  const n=stages.length||1, name=label||`Step ${current+1} of ${n}${stages[current]&&stages[current].title?', '+stages[current].title:''}`;
  return React.createElement('div',{role:'img','aria-label':name,style:{display:'grid',gridTemplateColumns:`repeat(${n},1fr)`,gap,...style},...rest},
    (stages.length?stages:[{}]).map((st,i)=>{const done=i<current, now=i===current;
      return React.createElement('div',{key:i,'data-state':done?'done':now?'current':'upcoming',style:{position:'relative',height,borderRadius:999,overflow:'hidden',
          background:done?'var(--text-dim)':'transparent',boxShadow:done?'none':'inset 0 0 0 1px var(--text-dim)'}},
        now?React.createElement('span',{style:{position:'absolute',left:0,top:0,bottom:0,width:`${Math.max(0,Math.min(1,progress))*100}%`,
          background:'var(--surface-inverse)',borderRadius:'inherit',transition:'width var(--dur-base) var(--ease-liquid)'}}):null);}));
}
export const beadKinds=BEAD_KINDS;
