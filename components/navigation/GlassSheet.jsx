import React from 'react';
export function GlassSheet({open=true,title,description,actions,children,behind,height='auto',style,...rest}){
  return React.createElement('div',{style:{position:'relative',width:'100%',height:'100%',overflow:'hidden',...style},...rest},
    behind?React.createElement('div',{style:{position:'absolute',inset:0,padding:18,transition:'all var(--dur-slow) var(--ease-damp)',transform:open?'scale(.94)':'none',filter:open?'blur(6px)':'none',opacity:open?.5:1}},behind):null,
    React.createElement('div',{role:'dialog','aria-hidden':!open,style:{position:'absolute',left:0,right:0,bottom:0,padding:'12px 18px 22px',borderRadius:'var(--r-2xl) var(--r-2xl) 0 0',
      background:'var(--material-floating)',backdropFilter:'blur(var(--blur-heavy)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-heavy)) var(--sat-glass)',border:'var(--border-glass)',borderBottom:'none',boxShadow:'var(--shadow-float), var(--inner-top)',
      transform:open?'none':'translateY(105%)',transition:'transform var(--dur-slow) var(--ease-damp)',height}},
      React.createElement('span',{'aria-hidden':true,style:{width:36,height:4,borderRadius:2,background:'var(--text-faint)',margin:'0 auto',display:'block'}}),
      title?React.createElement('div',{style:{marginTop:14,font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',color:'var(--text-title)'}},title):null,
      description?React.createElement('div',{style:{marginTop:4,font:'var(--type-caption)',color:'var(--text-muted)'}},description):null,
      children,
      actions?React.createElement('div',{style:{marginTop:14,display:'flex',gap:8}},actions):null));
}
