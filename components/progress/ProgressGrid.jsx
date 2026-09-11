import React from 'react';
const STAGE={understand:['Understand','var(--aurora-sky)'],translate:['Translate','var(--aurora-peach)'],revise:['Revise and check','var(--aurora-lavender)'],done:['Done','var(--aurora-mint)']};
export function ProgressGrid({books=[],stages=STAGE,legend=true,style,...rest}){
  return React.createElement('div',{style:{boxSizing:'border-box',padding:'14px 16px',borderRadius:'var(--r-lg)',background:'var(--glass-fill-3)',border:'var(--border-glass)',boxShadow:'var(--shadow-card), var(--inner-top)',display:'grid',gap:8,...style},...rest},
    books.map((b,i)=>{const done=b.chapters.filter(s=>s==='done').length;return React.createElement('div',{key:i,style:{display:'grid',gridTemplateColumns:'82px minmax(0,1fr) 44px',gap:10,alignItems:'center'}},
      React.createElement('span',{style:{font:'var(--type-label)',color:'var(--text-title)'}},b.book),
      React.createElement('div',{style:{display:'flex',gap:3,flexWrap:'wrap'}},b.chapters.map((s,j)=>React.createElement('span',{key:j,title:`Chapter ${j+1}${s&&stages[s]?' · '+stages[s][0]:''}`,style:{display:'block',width:14,height:14,borderRadius:'var(--r-key)',
        background:s&&stages[s]?stages[s][1]:'var(--glass-fill-1)',border:s?'none':'var(--border-glass-soft)',boxShadow:s?'var(--inner-top)':'none'}}))),
      React.createElement('span',{style:{font:'11px var(--font-mono)',color:'var(--text-dim)',textAlign:'right'}},Math.round(done/b.chapters.length*100)+'%'))}),
    legend?React.createElement('div',{style:{display:'flex',gap:12,flexWrap:'wrap',marginTop:4,font:'var(--type-caption)',color:'var(--text-muted)'}},
      Object.keys(stages).map(k=>React.createElement('span',{key:k,style:{display:'flex',gap:6,alignItems:'center'}},React.createElement('span',{style:{width:10,height:10,borderRadius:3,background:stages[k][1]}}),stages[k][0]))):null);
}
