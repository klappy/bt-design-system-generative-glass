/** One catalog entry (Door43 or Aquifer): subject overline, title in its own script and direction, owner/repo in mono, release chip. Stack rows inside a fill-3 GlassSurface. */
export interface CatalogRowProps{
  /** owner/repo or resource code, e.g. "unfoldingWord/en_ult". */
  id?:string;
  title:string;
  subject?:string;
  /** BCP-47; picks the title face for non-Latin scripts. */
  lang?:string;
  dir?:'ltr'|'rtl';
  /** Release tag or article count, e.g. "v90", "16,923". */
  release?:string;
  meta?:string;
  onOpen?:()=>void;
  /** Suppress the top hairline on the first row. */
  first?:boolean;
  style?:React.CSSProperties;
}
export declare function CatalogRow(props:CatalogRowProps):JSX.Element;
