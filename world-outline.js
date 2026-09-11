// <gg-world-outline>: hairline world outline (Natural Earth 110m via world-atlas, public domain) in a fixed 1000x600 viewBox,
// projected with d3.geoNaturalEarth1().fitSize([1000,600]) — the same projection the constellation uses to place orbs.
// Requires window.d3 and window.topojson (pinned tags in the page head). Stroke uses currentColor.
(function(){
  const W=1000,H=600,URL='https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json';
  let geo=null;
  function load(){ if(geo) return geo; geo=fetch(URL).then(r=>r.json()); return geo; }
  function ready(){ return new Promise(res=>{ const t=()=>window.d3&&window.topojson?res():setTimeout(t,60); t(); }); }
  class GGWorldOutline extends HTMLElement{
    async connectedCallback(){
      if(this._done) return; this._done=true;
      this.style.display='block'; this.style.width='100%'; this.style.height='100%';
      await ready(); const topo=await load();
      const d3=window.d3, countries=window.topojson.feature(topo,topo.objects.countries);
      const proj=d3.geoNaturalEarth1().fitSize([W,H],{type:'Sphere'});
      const path=d3.geoPath(proj);
      const ns='http://www.w3.org/2000/svg';
      const svg=document.createElementNS(ns,'svg');
      svg.setAttribute('viewBox',`0 0 ${W} ${H}`); svg.setAttribute('preserveAspectRatio','none');
      svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none';
      const sphere=document.createElementNS(ns,'path');
      sphere.setAttribute('d',path({type:'Sphere'})); sphere.setAttribute('fill','none'); sphere.setAttribute('stroke','currentColor'); sphere.setAttribute('stroke-width','.6'); sphere.setAttribute('opacity','.35');
      const land=document.createElementNS(ns,'path');
      land.setAttribute('d',path(countries)); land.setAttribute('fill','currentColor'); land.setAttribute('fill-opacity','.06'); land.setAttribute('stroke','currentColor'); land.setAttribute('stroke-width','.5'); land.setAttribute('stroke-linejoin','round'); land.setAttribute('vector-effect','non-scaling-stroke');
      const grat=document.createElementNS(ns,'path');
      grat.setAttribute('d',path(d3.geoGraticule().step([30,30])())); grat.setAttribute('fill','none'); grat.setAttribute('stroke','currentColor'); grat.setAttribute('stroke-width','.4'); grat.setAttribute('opacity','.18');
      svg.append(grat,land,sphere); this.append(svg);
      this.dispatchEvent(new CustomEvent('gg-world-ready',{bubbles:true}));
    }
  }
  if(!customElements.get('gg-world-outline')) customElements.define('gg-world-outline',GGWorldOutline);
  // Shared helper for callers that place points on the same projection.
  window.ggProject=function(lon,lat){ if(!window.d3) return null; const p=window.d3.geoNaturalEarth1().fitSize([W,H],{type:'Sphere'})([lon,lat]); return p?{x:p[0]/W*100,y:p[1]/H*100}:null; };
})();
