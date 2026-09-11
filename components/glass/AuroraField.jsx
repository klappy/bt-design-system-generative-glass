import React from 'react';
export function AuroraField({intensity=1,drift=true,style,children,...rest}){
  return React.createElement('div',{style:{position:'relative',overflow:'hidden',width:'100%',height:'100%',background:'var(--surface-app)',...style},...rest},
    React.createElement('div',{'aria-hidden':true,style:{position:'absolute',inset:'-18%',
      background:'var(--aurora-field)',opacity:intensity,filter:'blur(28px)',
      animation:drift?'gg-drift 22s var(--ease-liquid) infinite':undefined}}),
    React.createElement('div',{style:{position:'relative',height:'100%'}},children));
}
