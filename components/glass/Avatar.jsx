import React from 'react';
export function Avatar({src,alt='',size=54,ring=false,style,...rest}){
  return React.createElement('div',{style:{width:size,height:size,borderRadius:'var(--r-pill)',overflow:'hidden',flex:'none',
    background:'var(--accent-red)',boxShadow:ring?'0 0 0 2px rgba(255,255,255,.85), var(--shadow-rest)':'var(--shadow-rest)',
    ...style},...rest},
    src?React.createElement('img',{src,alt,style:{width:'100%',height:'100%',objectFit:'cover',display:'block'}}):null);
}
