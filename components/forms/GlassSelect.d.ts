/** Pill select with a rotated chevron. */
export interface GlassSelectProps{label?:string;value?:string;options:(string|{value:string;label:string})[];onChange?:(value:string)=>void;style?:React.CSSProperties;}
export declare function GlassSelect(props:GlassSelectProps):JSX.Element;
