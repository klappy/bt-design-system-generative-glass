/**
 * Thin arc around a round primary: elapsed playback or the countdown to the next item.
 * Starts at 12 o'clock, runs clockwise. Wraps a centre affordance (a disc, a GlassIconButton).
 * Honours prefers-reduced-motion: no sweep, the arc jumps; the caller's label carries the time.
 */
export interface CountdownRingProps{
  /** Outer box in px. 96 fits a 72 px disc with a 12 px gap. */
  size?:number;
  /** Arc fill, 0..1. Controlled: the app drives it from playback or a timer. */
  value?:number;
  /** Stroke width in px. */
  thickness?:number;
  /** Arc colour. Default var(--accent-blue). */
  color?:string;
  /** Track colour. Default var(--glass-fill-4). */
  track?:string;
  /** Timed mode: seconds for the arc to drain from `value` to 0 (CSS transition). Ignored under reduced motion. */
  duration?:number;
  /** Timed mode only: false freezes the arc at `value` (e.g. "tap to wait"). */
  running?:boolean;
  /** Accessible name. Omit when the enclosing button already names the state (aria-hidden then). */
  label?:string;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function CountdownRing(props:CountdownRingProps):JSX.Element;
