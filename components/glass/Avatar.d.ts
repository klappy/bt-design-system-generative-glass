/**
 * Circular portrait. The account avatar top-right on home, and the small
 * stacked participant cluster beside a spawned card.
 */
export interface AvatarProps{
  src?:string;
  alt?:string;
  /** 54 for the header avatar, 22 inside a cluster. */
  size?:number;
  ring?:boolean;
  style?:React.CSSProperties;
}
export declare function Avatar(props:AvatarProps):JSX.Element;
