/**
 * A quoted passage on fill-3 glass: reference, version chip, verse numbers in overline ink,
 * one reading face per script, RTL on the passage block only, key-term chips with popovers.
 * @startingPoint section="Scripture" subtitle="Passage with version, source and key terms" viewport="600x360"
 */
export interface ScripturePassageProps{
  /** Human reference, e.g. "Ruth 2:1–4". */
  reference:string;
  /** Short version code shown as a chip, e.g. "BSB", "ULT", "AVD". */
  version?:string;
  /** Provenance line under the text, e.g. "Aquifer · BereanStandardBible". */
  source?:string;
  /** Picks the reading face. */
  script?:'latin'|'hebrew'|'greek'|'arabic'|'devanagari'|'gujarati'|'han';
  dir?:'ltr'|'rtl';
  lang?:string;
  verses:{n:number|string;text:string}[];
  keyTerms?:{label:string;source?:string;definition:string;onOpen?:()=>void}[];
  sync?:'ok'|'syncing'|'offline';
  style?:React.CSSProperties;
}
export declare function ScripturePassage(props:ScripturePassageProps):JSX.Element;
