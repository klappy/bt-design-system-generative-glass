/**
 * Small metadata chip — flight number, "VIEW SPOT", overline labels on imagery.
 */
export interface GlassChipProps{
  leading?:React.ReactNode;
  tone?:'light'|'night';
  size?:'sm'|'md';
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function GlassChip(props:GlassChipProps):JSX.Element;
