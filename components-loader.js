// Loads the design-system components straight from components/*.jsx without a compiler.
// Transpiles each file in the browser with Babel (loaded by the page) and exposes them on
// window.GenerativeGlass, then fires 'gg-components-ready'. Dev/prototyping path only; a compiled
// bundle replaces this when the project is flagged as a design system.
(function(){
  const FILES=['glass/GlassSurface','glass/GlassButton','glass/GlassChip','glass/GlassIconButton','glass/GlassInput','glass/DotRing','glass/Filament','glass/Avatar','glass/AuroraField','glass/StatusBar','icons/Icon','scripture/SyncBadge','scripture/KeyTermPopover','scripture/ScripturePassage','review/ReviewThread','progress/ProgressGrid','survey/SurveyQuestion','resources/ResourceCard','resources/ResourceStack','resources/CatalogRow','language/LanguagePicker','navigation/GlassTabBar','navigation/GlassSheet','navigation/DesktopShell','forms/GlassField','forms/GlassSelect','forms/GlassToggle','forms/GlassSegmented','forms/GlassSearch','forms/FilterChips','constellation/ProjectConstellation'];
  const base=(document.currentScript&&document.currentScript.src||'').replace(/[^/]*$/,'');
  const NS=window.GenerativeGlass=window.GenerativeGlass||{};
  const ready=()=>new Promise(r=>{const t=()=>window.React&&window.Babel?r():setTimeout(t,60);t();});
  window.ggComponentsReady=(async()=>{
    await ready();
    for(const f of FILES){
      let src=await (await fetch(base+'components/'+f+'.jsx')).text();
      src=src.replace(/^import\s+React\s+from\s+'react';?\s*$/m,'').replace(/^import\s+\{([^}]+)\}\s+from\s+'[^']+';?\s*$/mg,(m,n)=>`const {${n}} = NS;`).replace(/^export\s+/mg,'');
      const names=[...src.matchAll(/^(?:function|const)\s+([A-Za-z0-9_]+)/mg)].map(m=>m[1]);
      const code=Babel.transform(src+`\n;Object.assign(NS,{${names.join(',')}});`,{presets:['react']}).code;
      try{new Function('React','NS',code)(React,NS);}catch(e){console.error('gg component failed',f,e);}
    }
    window.dispatchEvent(new CustomEvent('gg-components-ready'));
    return NS;
  })();
})();
