import React from 'react';
// Reduced motion: the arc jumps to each value with no sweep; the label beside the ring must carry the time.
function useReducedMotion(){
  const q=typeof window!=='undefined'&&window.matchMedia?window.matchMedia('(prefers-reduced-motion: reduce)'):null;
  const [r,setR]=React.useState(q?q.matches:false);
  React.useEffect(()=>{if(!q)return;const f=e=>setR(e.matches);q.addEventListener?q.addEventListener('change',f):q.addListener(f);
    return()=>{q.removeEventListener?q.removeEventListener('change',f):q.removeListener(f)};},[]);
  return r;
}
export function CountdownRing({size=96,value=0,thickness=3,color='var(--accent-blue)',track='var(--glass-fill-4)',duration,running=true,label,children,style,...rest}){
  const reduce=useReducedMotion();
  const R=(size-thickness)/2-1, C=2*Math.PI*R, v=Math.max(0,Math.min(1,value));
  // Timed mode: with `duration` (s) and `running`, the arc drains from `value` to 0 in that time; a CSS transition, not a JS loop.
  const timed=duration!=null&&running&&!reduce;
  const [drain,setDrain]=React.useState(false);
  React.useEffect(()=>{if(!timed){setDrain(false);return;}setDrain(false);const id=requestAnimationFrame(()=>requestAnimationFrame(()=>setDrain(true)));return()=>cancelAnimationFrame(id);},[timed,duration,value]);
  const shown=timed&&drain?0:v;
  const transition=reduce?'none':timed?(drain?`stroke-dashoffset ${duration}s linear`:'none'):'stroke-dashoffset var(--dur-base) var(--ease-liquid)';
  const a11y=label?{role:'img','aria-label':label}:{'aria-hidden':true};
  return React.createElement('div',{style:{position:'relative',width:size,height:size,...style},'data-reduced-motion':reduce?'':undefined,...a11y,...rest},
    React.createElement('svg',{width:size,height:size,viewBox:`0 0 ${size} ${size}`,style:{position:'absolute',inset:0,transform:'rotate(-90deg)'}},
      React.createElement('circle',{cx:size/2,cy:size/2,r:R,fill:'none',stroke:track,strokeWidth:thickness}),
      React.createElement('circle',{cx:size/2,cy:size/2,r:R,fill:'none',stroke:color,strokeWidth:thickness,strokeLinecap:'round',
        strokeDasharray:C,strokeDashoffset:C*(1-shown),opacity:shown>0?1:0,style:{transition}})),
    React.createElement('div',{style:{position:'absolute',inset:0,display:'grid',placeItems:'center'}},children));
}
