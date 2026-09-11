/** Floating definition for a key term. Uses --material-floating so it stays legible over scripture in both themes. */
export interface KeyTermPopoverProps{
  /** Where the definition comes from, e.g. "Aquifer Open Study Notes · 25802". */
  source?:string;
  label:string;
  definition:string;
  onClose?:()=>void;
  onOpen?:()=>void;
  openLabel?:string;
  style?:React.CSSProperties;
}
export declare function KeyTermPopover(props:KeyTermPopoverProps):JSX.Element;
