/**
 * iOS status row. Always 9:41, always full signal — this is a concept device.
 */
export interface StatusBarProps{
  time?:string;
  tone?:'light'|'night';
  style?:React.CSSProperties;
}
export declare function StatusBar(props:StatusBarProps):JSX.Element;
