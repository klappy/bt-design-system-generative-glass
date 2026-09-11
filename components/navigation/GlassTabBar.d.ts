/** Floating pill tab bar, fill 3, strong blur. The active item gets a solid pill and its title; the rest are glyph only. Apps pick their own four. */
export interface GlassTabBarProps{
  items:{id:string;label:string;icon:string}[];
  value?:string;
  onChange?:(id:string)=>void;
  style?:React.CSSProperties;
}
export declare function GlassTabBar(props:GlassTabBarProps):JSX.Element;
