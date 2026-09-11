/** Bottom sheet on --material-floating, 34px top radius, damp easing. Content behind recedes: scale .94, blur 6px, opacity .5. */
export interface GlassSheetProps{
  open?:boolean;
  title?:string;
  description?:string;
  /** Buttons row under the content. */
  actions?:React.ReactNode;
  children?:React.ReactNode;
  /** The screen content the sheet covers; it recedes when open. */
  behind?:React.ReactNode;
  height?:string|number;
  style?:React.CSSProperties;
}
export declare function GlassSheet(props:GlassSheetProps):JSX.Element;
