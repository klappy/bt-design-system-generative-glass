import React from 'react';
export function DotRing({size=170,rings=7,dots=30,color='rgba(70,86,112,.30)',children,style,...rest}){
  const pts=[];
  for(let r=0;r<rings;r++){
    const rad=(size/2)*(0.34+0.66*(r/(rings-1)));
    const n=Math.round(dots*(0.4+0.6*(r/(rings-1))));
    for(let i=0;i<n;i++){const a=(i/n)*Math.PI*2+r*0.16;
      pts.push({x:size/2+Math.cos(a)*rad,y:size/2+Math.sin(a)*rad,o:0.25+0.75*(1-r/rings)});}
  }
  return React.createElement('div',{style:{position:'relative',width:size,height:size,...style},...rest},
    React.createElement('svg',{width:size,height:size,style:{position:'absolute',inset:0,animation:'gg-breathe 4.5s var(--ease-liquid) infinite'}},
      pts.map((p,i)=>React.createElement('circle',{key:i,cx:p.x,cy:p.y,r:.9,fill:color,opacity:p.o}))),
    React.createElement('div',{style:{position:'absolute',inset:0,display:'grid',placeItems:'center'}},children));
}
