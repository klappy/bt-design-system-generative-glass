import React from 'react';
import {Icon} from '../icons/Icon.jsx';
const FACE={ar:'var(--font-scripture-arabic)',fa:'var(--font-scripture-arabic)',he:'var(--font-scripture-hebrew)',hi:'var(--font-scripture-devanagari)',ne:'var(--font-scripture-devanagari)',gu:'var(--font-scripture-gujarati)',zh:'var(--font-scripture-han)',el:'var(--font-scripture-greek)'};
const TYPES=['Bible','Notes','Words','Maps'];
const TITLE={filter:'Resources in',attribute:'Project language',target:'Translate into',locale:'App language'};
const hasAny=c=>/a|i/.test(c||'');
export function LanguagePicker({languages=[],context='attribute',value,onChange,suggested=[],surface='popover',types=TYPES,title,placeholder='Name, autonym, code or region',fallbackNote,style,...rest}){
  const [q,setQ]=React.useState('');
  const lq=q.trim().toLowerCase();
  const match=r=>!lq||[r.english,r.autonym,r.code,r.region,...(r.aliases||[])].filter(Boolean).some(v=>v.toLowerCase().includes(lq));
  let pool=languages.filter(match);
  if(context==='filter') pool=pool.filter(r=>hasAny(r.coverage));
  const sugg=lq?[]:suggested.map(c=>pool.find(r=>r.code===c)).filter(Boolean);
  const rest_=pool.filter(r=>lq||!suggested.includes(r.code)).sort((a,b)=>a.english.localeCompare(b.english));
  const note=r=>{if(context==='locale')return r.localized?'App available in this language':(fallbackNote||'App not localized yet · shown in a gateway language');
    if(!hasAny(r.coverage))return 'No resources yet · you can still choose it';
    const ai=(r.coverage.match(/i/g)||[]).length,av=(r.coverage.match(/a/g)||[]).length;return ai?`${av} available · ${ai} AI-translatable`:'Full coverage';};
  const chip=(st,t)=>React.createElement('span',{key:t,title:`${t} · ${st==='a'?'available':st==='i'?'AI-translatable':'none'}`,style:{display:'inline-flex',alignItems:'center',padding:'3px 7px',borderRadius:'var(--r-pill)',font:'var(--fw-medium) 9px/1.1 var(--font-core)',letterSpacing:'.02em',whiteSpace:'nowrap',
      background:st==='n'?'transparent':'var(--glass-fill-4)',border:st==='n'?'1px dashed var(--text-dim)':'var(--border-glass)',color:st==='n'?'var(--text-dim)':'var(--text-title)',boxShadow:st==='n'?'none':'var(--inner-top)'}},t,
    st==='i'?React.createElement('span',{style:{marginInlineStart:4,padding:'1px 4px',borderRadius:'var(--r-pill)',background:'var(--surface-inverse)',color:'var(--text-on-inverse)',font:'var(--fw-semibold) 8px/1.1 var(--font-core)',letterSpacing:'.04em'}},'AI'):null);
  const row=r=>{const a=value===r.code;const base=(r.code||'').split('-')[0];return React.createElement('button',{key:r.code,onClick:()=>onChange&&onChange(r.code,r),style:{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,width:'100%',padding:'10px 12px',borderRadius:'var(--r-sm)',border:'.5px solid transparent',
      background:a?'var(--glass-fill-3)':'transparent',boxShadow:a?'var(--inner-top), var(--glow-focus)':'none',cursor:'pointer',textAlign:'start',color:'inherit',opacity:hasAny(r.coverage)||context==='locale'?1:.72,transition:'var(--t-hover)'}},
    React.createElement('span',{style:{display:'flex',flexDirection:'column',gap:2,minWidth:0,flex:1}},
      React.createElement('span',{style:{display:'flex',gap:8,alignItems:'baseline',flexWrap:'wrap'}},
        React.createElement('span',{dir:r.dir||'ltr',lang:r.code,style:{font:`500 15px/1.3 ${FACE[base]||'var(--font-core)'}`,color:'var(--text-title)',letterSpacing:FACE[base]?0:'-0.01em'}},r.autonym),
        React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-muted)'}},r.english),
        React.createElement('span',{style:{font:'10px/1.2 var(--font-mono)',color:'var(--text-dim)'}},r.code)),
      React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-dim)'}},note(r))),
    r.coverage?React.createElement('span',{style:{display:'flex',gap:4,flex:'none',alignItems:'center'}},r.coverage.split('').map((st,i)=>chip(st,types[i]||''))):null);};
  const group=(label,rows)=>rows.length?[React.createElement('div',{key:'h'+label,style:{padding:'10px 12px 4px',font:'var(--type-overline)',letterSpacing:'var(--ls-overline)',textTransform:'uppercase',color:'var(--text-dim)'}},label),...rows.map(row)]:[];
  const total=sugg.length+rest_.length;
  const sheet=surface==='sheet';
  return React.createElement('div',{style:{width:'100%',maxWidth:sheet?390:520,padding:sheet?'12px 16px 22px':'16px 16px 18px',borderRadius:sheet?'34px 34px 22px 22px':'var(--r-xl)',
    background:'var(--material-floating)',backdropFilter:'blur(var(--blur-heavy)) var(--sat-glass)',WebkitBackdropFilter:'blur(var(--blur-heavy)) var(--sat-glass)',border:'var(--border-glass)',boxShadow:'var(--shadow-float), var(--inner-top)',color:'var(--text-title)',...style},...rest},
    sheet?React.createElement('span',{'aria-hidden':true,style:{width:36,height:4,borderRadius:2,background:'var(--text-faint)',margin:'0 auto 12px',display:'block'}}):null,
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:10}},
      React.createElement('div',{style:{font:'var(--type-card-title)',letterSpacing:'var(--ls-title)',whiteSpace:'nowrap'}},title||TITLE[context]),
      React.createElement('span',{style:{font:'var(--type-caption)',color:'var(--text-dim)'}},`${total} of ${languages.length}${context==='filter'?' with resources':''}`)),
    React.createElement('div',{style:{marginTop:12,display:'flex',alignItems:'center',gap:10,height:44,padding:'0 16px',borderRadius:'var(--r-pill)',background:'var(--glass-fill-2)',border:'var(--border-glass)',boxShadow:'var(--inner-top)'}},
      React.createElement(Icon,{name:'search',size:16,color:'var(--text-muted)'}),
      React.createElement('input',{value:q,onChange:e=>setQ(e.target.value),placeholder,style:{flex:1,minWidth:0,border:'none',outline:'none',background:'transparent',font:'var(--type-label)',color:'var(--text-title)'}}),
      q?React.createElement('button',{onClick:()=>setQ(''),style:{border:'none',background:'transparent',cursor:'pointer',font:'var(--type-caption)',color:'var(--text-muted)',padding:0}},'Clear'):null),
    React.createElement('div',{style:{marginTop:12,display:'grid',gap:2,maxHeight:360,overflow:'auto',paddingRight:2}},
      ...group('Suggested',sugg),...group(lq?`Matches for “${q}”`:'All languages',rest_),
      total===0?React.createElement('div',{style:{padding:'24px 12px',textAlign:'center',font:'var(--type-caption)',color:'var(--text-muted)',textWrap:'pretty'}},context==='filter'?`No language with resources matches “${q}”. Switch to a project context to see every language.`:`Nothing matches “${q}”. Try the English name, the code, or a country.`):null),
    React.createElement('div',{style:{marginTop:12,display:'flex',gap:14,flexWrap:'wrap',font:'var(--type-caption)',color:'var(--text-dim)',padding:'0 4px'}},
      React.createElement('span',{style:{display:'flex',gap:6,alignItems:'center'}},React.createElement('span',{style:{width:14,height:10,borderRadius:3,background:'var(--glass-fill-4)',border:'var(--border-glass)'}}),'Available'),
      React.createElement('span',{style:{display:'flex',gap:6,alignItems:'center'}},React.createElement('span',{style:{padding:'1px 4px',borderRadius:'var(--r-pill)',background:'var(--surface-inverse)',color:'var(--text-on-inverse)',font:'var(--fw-semibold) 8px/1.1 var(--font-core)'}},'AI'),'AI-translatable'),
      React.createElement('span',{style:{display:'flex',gap:6,alignItems:'center'}},React.createElement('span',{style:{width:14,height:10,borderRadius:3,border:'1px dashed var(--text-dim)',boxSizing:'border-box'}}),'None')));
}
