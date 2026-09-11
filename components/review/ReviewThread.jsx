import React from 'react';
export function ReviewThread({anchor,comments=[],resolved=false,onToggleResolved,onReply,replyPlaceholder='Reply',style,...rest}){
  return React.createElement('div',{style:{boxSizing:'border-box',display:'grid',gap:12,padding:16,borderRadius:'var(--r-xl)',background:'var(--glass-fill-3)',border:'var(--border-glass)',
    boxShadow:'var(--shadow-card), var(--inner-top), var(--inner-edge)',transition:'all var(--dur-slow) var(--ease-liquid)',opacity:resolved?.62:1,filter:resolved?'saturate(.8)':'none',...style},...rest},
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
      React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-muted)'}},anchor,' · ',comments.length,' comment',comments.length===1?'':'s'),
      React.createElement('span',{style:{padding:'4px 9px',borderRadius:'var(--r-pill)',background:resolved?'var(--aurora-mint)':'var(--glass-fill-2)',border:'var(--border-glass)',font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:resolved?'var(--ink-900)':'var(--text-muted)'}},resolved?'Resolved':'Open')),
    comments.map((c,i)=>React.createElement('div',{key:i,style:{display:'flex',gap:10,alignItems:'flex-start'}},
      React.createElement('span',{style:{width:32,height:32,borderRadius:'50%',flex:'none',display:'grid',placeItems:'center',background:'var(--glass-fill-3)',border:'var(--border-glass)',font:'var(--fw-semibold) 11px/1 var(--font-core)',color:'var(--text-title)'}},c.initials||(c.name||'?').slice(0,2).toUpperCase()),
      React.createElement('div',{style:{minWidth:0}},
        React.createElement('div',{style:{display:'flex',gap:8,alignItems:'baseline',flexWrap:'wrap'}},
          React.createElement('span',{style:{font:'var(--fw-semibold) 13px/1.2 var(--font-core)',color:'var(--text-title)'}},c.name),
          c.role?React.createElement('span',{style:{font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-muted)'}},c.role):null,
          c.when?React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-dim)'}},c.when):null),
        React.createElement('p',{style:{margin:'4px 0 0',font:'var(--type-caption)',color:'var(--text-body)',textWrap:'pretty'}},c.text)))),
    React.createElement('div',{style:{display:'flex',gap:8,alignItems:'center'}},
      React.createElement('button',{onClick:onReply,style:{flex:1,display:'flex',alignItems:'center',height:40,padding:'0 14px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--inner-top)',font:'var(--type-caption)',color:'var(--text-dim)',cursor:'text',textAlign:'start'}},replyPlaceholder),
      onToggleResolved?React.createElement('button',{onClick:onToggleResolved,style:{height:40,padding:'0 14px',borderRadius:'var(--r-pill)',border:'var(--border-glass)',background:'var(--glass-fill-3)',font:'var(--fw-semibold) 12px/1 var(--font-core)',color:'var(--text-title)',cursor:'pointer',boxShadow:'var(--shadow-rest), var(--inner-top)'}},resolved?'Reopen':'Resolve'):null));
}
