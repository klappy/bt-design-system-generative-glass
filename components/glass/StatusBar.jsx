import React from 'react';
export function StatusBar({time='9:41',tone='light',style,...rest}){
  const c=tone==='night'?'var(--paper-000)':'var(--text-title)';
  const bar=(h)=>React.createElement('rect',{width:3,height:h,y:11-h,rx:1,fill:c});
  return React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',
    padding:'14px var(--sp-11) 0',font:'var(--fw-semibold) 15px/1 var(--font-numeric)',color:c,...style},...rest},
    React.createElement('span',null,time),
    React.createElement('div',{style:{display:'flex',alignItems:'center',gap:6}},
      React.createElement('svg',{width:18,height:11},[4,6,8.5,11].map((h,i)=>React.createElement('g',{key:i,transform:`translate(${i*4.6},0)`},bar(h)))),
      React.createElement('svg',{width:16,height:12,viewBox:'0 0 16 12',fill:c},React.createElement('path',{d:'M8 10.4 5.6 8a3.4 3.4 0 0 1 4.8 0zM8 6.2a5.7 5.7 0 0 0-4 1.6L2.6 6.4a7.7 7.7 0 0 1 10.8 0L12 7.8a5.7 5.7 0 0 0-4-1.6zM8 2.2a9.7 9.7 0 0 0-6.8 2.8L0 3.7a11.5 11.5 0 0 1 16 0L14.8 5A9.7 9.7 0 0 0 8 2.2z'})),
      React.createElement('svg',{width:25,height:12,viewBox:'0 0 25 12'},
        React.createElement('rect',{x:.5,y:.5,width:21,height:11,rx:3.2,fill:'none',stroke:c,opacity:.4}),
        React.createElement('rect',{x:2,y:2,width:18,height:8,rx:2,fill:c}),
        React.createElement('path',{d:'M23 4.2v3.6a2 2 0 0 0 0-3.6z',fill:c,opacity:.4}))));
}
