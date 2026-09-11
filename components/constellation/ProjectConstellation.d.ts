/**
 * A partner's projects as glass orbs on a Natural Earth projection. Size = books in progress, inner aurora = stage,
 * focus/opacity = recency, dashed ring = assessment open. Optional hairline world outline (needs ../../world-outline.js + pinned d3/topojson) and region zoom.
 */
export interface ProjectConstellationProps{
  regions:{name:string;lon:number;lat:number}[];
  projects:{id:string;title:string;region:string;books?:number;stage?:'understand'|'translate'|'revise'|'paused'|string;recency?:number;reported?:boolean;image?:string;dx?:number;dy?:number}[];
  value?:string|null;
  onChange?:(id:string,project:any)=>void;
  /** Draw the world outline under the orbs. */
  map?:boolean;
  /** Region name to zoom to (2.3x), or null. */
  zoom?:string|null;
  onZoom?:(region:string|null)=>void;
  moods?:Record<string,[string,string]>;
  style?:React.CSSProperties;
}
export declare function ProjectConstellation(props:ProjectConstellationProps):JSX.Element;
