// Loads kit-base.js then a kit app as a global React component; used by templates via <x-import component-from-global-scope>.
// Resolution waits until the global exists, so the x-import shows its hint-size meanwhile.
(function(){
  const me=document.currentScript.src.replace(/[^/]*$/,'');
  const base=me+'../../';
  const kit=document.currentScript.dataset.kit, name=document.currentScript.dataset.global;
  window.__ggKitLoads=window.__ggKitLoads||{};if(window.__ggKitLoads[name])return;window.__ggKitLoads[name]=true;
  const load=src=>new Promise((r,j)=>{const s=document.createElement('script');s.src=src;s.onload=r;s.onerror=j;document.head.appendChild(s)});
  const waitBabel=()=>new Promise(r=>{const t=()=>window.Babel&&window.React&&window.ReactDOM?r():setTimeout(t,60);t()});
  (async()=>{
    if(!window.React)await load('https://unpkg.com/react@18.3.1/umd/react.development.js');
    if(!window.ReactDOM)await load('https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js');
    if(!window.Babel)await load('https://unpkg.com/@babel/standalone@7.29.0/babel.min.js');
    await waitBabel();
    if(window.ggDsBundle)await window.ggDsBundle;
    if(!window.GG_boot)await load(base+'ui_kits/shared/kit-base.js');
    await window.GG_loadApp(kit,name,base);
  })();
})();
