/**
 * The base frosted material. Every panel, card, sheet and chip in the system is
 * a GlassSurface underneath — do not hand-roll backdrop-filter anywhere else.
 */
export interface GlassSurfaceProps{
  /** Fill opacity step. 1 = barely there overlay, 2 = default card, 3 = raised chip, 4 = near-solid sheet. */
  level?:1|2|3|4;
  blur?:'sheer'|'soft'|'medium'|'strong'|'heavy';
  radius?:'sm'|'md'|'lg'|'xl'|'2xl'|'pill'|string;
  shadow?:'none'|'rest'|'card'|'float';
  /** 'night' swaps to the dark map/spot material (dark fill, white hairline, deep shadow). */
  tone?:'light'|'night';
  /** Prismatic top-left sheen. On by default for light tone; ignored on night. */
  refraction?:boolean;
  /** Applies the ambient 6s float loop. Use only on genuinely floating elements. */
  float?:boolean;
  as?:keyof JSX.IntrinsicElements;
  style?:React.CSSProperties;
  children?:React.ReactNode;
}
export declare function GlassSurface(props:GlassSurfaceProps):JSX.Element;
