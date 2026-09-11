/**
 * Concentric particle ring — the system's only "thinking / expandable" indicator.
 * Breathes on a 4.5s loop; wraps a centre affordance such as a plus.
 */
export interface DotRingProps{
  size?:number;
  /** Concentric bands of dots. 7 matches the frames. */
  rings?:number;
  /** Dots on the outermost band. */
  dots?:number;
  color?:string;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function DotRing(props:DotRingProps):JSX.Element;
