/** Up to three resources attached to a passage as fanned cards; fans wider on hover. Optional palette dots extracted from the image. */
export interface ResourceStackProps{
  items:{title:string;image:string;palette?:string[]}[];
  height?:number;
  style?:React.CSSProperties;
}
export declare function ResourceStack(props:ResourceStackProps):JSX.Element;
