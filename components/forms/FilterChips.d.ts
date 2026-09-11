/** Multi-select chips; selected chips invert. The row bleeds off the edge by default. */
export interface FilterChipsProps{options:(string|{value:string;label:string})[];value?:string[];onChange?:(value:string[])=>void;bleed?:boolean;style?:React.CSSProperties;}
export declare function FilterChips(props:FilterChipsProps):JSX.Element;
