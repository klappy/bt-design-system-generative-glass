/** Text field: caption label above, pill input, focus is a glow never a ring. */
export interface GlassFieldProps{label?:string;value?:string;onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;placeholder?:string;type?:string;style?:React.CSSProperties;}
export declare function GlassField(props:GlassFieldProps):JSX.Element;
