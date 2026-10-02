/** Checkbox row: one role="checkbox" button, 44px hit target, keyboard (Space/Enter), checked | false | 'mixed'. */
export interface GlassCheckboxProps{label?:string;checked?:boolean|'mixed';onChange?:(checked:boolean)=>void;disabled?:boolean;style?:React.CSSProperties;'aria-label'?:string;}
export declare function GlassCheckbox(props:GlassCheckboxProps):JSX.Element;
