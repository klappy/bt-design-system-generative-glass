/**
 * Circular icon-only control: mic, send, plus, back, locate.
 */
export interface GlassIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /** Diameter in px. 52 for the composer mic, 44 for inline, 64 for the map FAB row. */
  size?:number;
  tone?:'light'|'dark'|'night';
  /** Required accessible name — these buttons carry no text. */
  label:string;
  children?:React.ReactNode;
}
export declare function GlassIconButton(props:GlassIconButtonProps):JSX.Element;
