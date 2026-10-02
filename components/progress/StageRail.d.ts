/**
 * Display-only progress for a guided, linear process.
 * StageRail = overall (a few stage segments); BeadStrip = scoped (coded beads for the current run).
 * Kind is coded by shape AND colour; state by fill, never opacity. Not tappable — no stage skipping.
 * Motion: only the current segment's fill eases (var(--dur-base), 1 ms under reduced motion).
 */
export type BeadKind='plain'|'scripture'|'term'|'media'|'video'|'stop'|'end';
export type BeadState='done'|'current'|'upcoming';
export interface BeadKindSpec{shape:'circle'|'square'|'diamond'|'triangle'|'screen'|'bar'|'bars';color:string}
export interface BeadProps{
  kind?:BeadKind|string;
  /** done = solid · upcoming = 1.5 px outline · current = 1.6x, solid, 2 px --surface-inverse ring. */
  state?:BeadState;
  /** Base size in px (10). Scale with text size, capped by the caller. */
  size?:number;
  /** Override the kind's colour token (e.g. an app contrast variant). */
  color?:string;
  /** Small satellite dot: the item carries more than one kind. */
  more?:boolean;
  /** Override or extend the kind map. */
  kinds?:Record<string,BeadKindSpec>;
  style?:React.CSSProperties;
}
export interface BeadStripProps{
  items?:BeadProps[];
  /** Capsules for finished runs before this one. */
  before?:number;
  /** Capsules for runs still ahead. */
  after?:number;
  size?:number;
  kinds?:Record<string,BeadKindSpec>;
  /** Required in practice: the strip is role="img"; say where the reader is ("Part 4 of 25 …"). */
  label?:string;
  gap?:number;
  style?:React.CSSProperties;
}
export interface StageRailProps{
  stages?:{title?:string}[];
  /** Index of the current stage. */
  current?:number;
  /** 0..1 fill of the current segment. */
  progress?:number;
  height?:number;
  gap?:number;
  /** Accessible name; default "Step n of N, <title>". */
  label?:string;
  style?:React.CSSProperties;
}
export declare function Bead(props:BeadProps):JSX.Element;
export declare function BeadStrip(props:BeadStripProps):JSX.Element;
export declare function StageRail(props:StageRailProps):JSX.Element;
export declare const beadKinds:Record<BeadKind,BeadKindSpec>;
