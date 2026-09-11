/**
 * The ambient pastel light field every light screen sits on. Out-of-focus
 * lavender / peach / sky / lemon blobs that bleed through frosted surfaces.
 */
export interface AuroraFieldProps{
  /** 0–1 opacity of the blob field. Frames run ~1 on home, ~.5 behind dense content. */
  intensity?:number;
  /** 22s slow parallax drift. */
  drift?:boolean;
  style?:React.CSSProperties;
  children?:React.ReactNode;
}
export declare function AuroraField(props:AuroraFieldProps):JSX.Element;
