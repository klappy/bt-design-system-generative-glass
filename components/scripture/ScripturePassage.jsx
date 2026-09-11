import React from 'react';
import {GlassChip} from '../glass/GlassChip.jsx';
import {SyncBadge} from './SyncBadge.jsx';
import {KeyTermPopover} from './KeyTermPopover.jsx';
const FACE={latin:'var(--font-scripture-latin)',hebrew:'var(--font-scripture-hebrew)',greek:'var(--font-scripture-greek)',arabic:'var(--font-scripture-arabic)',devanagari:'var(--font-scripture-devanagari)',gujarati:'var(--font-scripture-gujarati)',han:'var(--font-scripture-han)'};
export function ScripturePassage({reference,version,source,script='latin',dir='ltr',lang,verses=[],keyTerms=[],sync,style,...rest}){
  const [open,setOpen]=React.useState(null);
  const t=open!=null?keyTerms[open]:null;
  return React.createElement('div',{style:{position:'relative',width:'100%',borderRadius:'var(--r-xl)',background:'var(--material-scripture)',
    backdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-strong)) var(--sat-glass)',
    border:'var(--border-glass)',boxShadow:'var(--shadow-card), var(--inner-top), var(--inner-edge)',padding:'18px 22px 22px',...style},...rest},
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,flexWrap:'wrap'}},
      React.createElement('div',{style:{display:'flex',alignItems:'center',gap:8,flex:'none'}},
        React.createElement('span',{style:{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',color:'var(--text-title)',whiteSpace:'nowrap'}},reference),
        version?React.createElement(GlassChip,null,version):null),
      sync?React.createElement(SyncBadge,{state:sync}):null),
    React.createElement('div',{dir,lang,style:{marginTop:14,maxWidth:'40em',font:'var(--type-scripture)',fontFamily:FACE[script]||FACE.latin,color:'var(--text-title)',letterSpacing:0,textWrap:'pretty'}},
      verses.map((v,i)=>React.createElement('span',{key:i},
        React.createElement('span',{style:{font:'var(--type-verse-number)',color:'var(--text-dim)',verticalAlign:'super',marginInline:'2px 4px'}},v.n),v.text,' '))),
    source?React.createElement('div',{style:{marginTop:10,font:'var(--type-caption)',color:'var(--text-dim)'}},source):null,
    keyTerms.length?React.createElement('div',{style:{marginTop:12,display:'flex',gap:8,flexWrap:'wrap',alignItems:'center',position:'relative'}},
      React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-muted)'}},'Key terms'),
      keyTerms.map((k,i)=>{const a=open===i;return React.createElement('button',{key:i,onClick:()=>setOpen(a?null:i),style:{padding:'5px 11px',borderRadius:'var(--r-pill)',cursor:'pointer',
        background:a?'var(--surface-inverse)':'var(--glass-fill-3)',color:a?'var(--text-on-inverse)':'var(--text-muted)',border:a?'.5px solid transparent':'var(--border-glass)',
        font:'var(--fw-medium) 10px/1.1 var(--font-core)',letterSpacing:'.01em',transition:'var(--t-hover)'}},k.label)}),
      t?React.createElement(KeyTermPopover,{source:t.source,label:t.label,definition:t.definition,onClose:()=>setOpen(null),onOpen:t.onOpen,style:{position:'absolute',left:0,bottom:'calc(100% + 10px)',zIndex:2}}):null):null);
}
