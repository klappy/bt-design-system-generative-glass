/** Segmented control: the selected segment is a solid pill. Used for phases, scripts, sources, contexts. */
export interface GlassSegmentedProps{options:(string|{value:string;label:string})[];value?:string;onChange?:(value:string)=>void;size?:'sm'|'md';style?:React.CSSProperties;}
export declare function GlassSegmented(props:GlassSegmentedProps):JSX.Element;
