import React from 'react';
export function Filament({height=70,width=120,branch=false,color='rgba(120,132,152,.45)',node=true,style,...rest}){
  const w=branch?width:2,mid=w/2;
  const d=branch
    ?`M ${mid} 0 C ${mid} ${height*.55}, 8 ${height*.45}, 8 ${height} M ${mid} 0 C ${mid} ${height*.55}, ${w-8} ${height*.45}, ${w-8} ${height}`
    :`M 1 0 L 1 ${height}`;
  return React.createElement('svg',{width:w,height,viewBox:`0 0 ${w} ${height}`,style:{overflow:'visible',...style},...rest},
    React.createElement('path',{d,stroke:color,strokeWidth:1,fill:'none',strokeLinecap:'round'}),
    node?React.createElement('circle',{cx:mid,cy:height,r:3.5,fill:'var(--surface-solid)',stroke:color,strokeWidth:1}):null);
}
