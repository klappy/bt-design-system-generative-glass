/** An Aquifer or Door43 item: type chip on the image, title, then source · id · licence. */
export interface ResourceCardProps{
  /** Overline chip on the image, e.g. "Map", "Image", "Study notes". */
  type?:string;
  title:string;
  /** Source · id · licence, e.g. "Biblica Open Bible Maps · OT072 · CC BY-SA 4.0". */
  meta?:string;
  image?:string;
  onOpen?:()=>void;
  style?:React.CSSProperties;
}
export declare function ResourceCard(props:ResourceCardProps):JSX.Element;
