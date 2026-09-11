/**
 * One picker for every place a language is chosen. Suggested group first, search on autonym/English/code/region,
 * three coverage states per resource type. Universe depends on context.
 */
export interface LanguageRow{
  /** BCP-47 */
  code:string;
  autonym:string;
  english:string;
  dir?:'ltr'|'rtl';
  region?:string;
  aliases?:string[];
  /** One char per resource type in `types` order: a = available, i = AI-translatable, n = none. e.g. "aaai". */
  coverage?:string;
  gateway?:boolean;
  /** For the 'locale' context: is the app UI available in this language. */
  localized?:boolean;
}
export interface LanguagePickerProps{
  languages:LanguageRow[];
  /** filter hides languages with no coverage; attribute/target show all; locale shows all with a fallback note. */
  context?:'filter'|'attribute'|'target'|'locale';
  value?:string|null;
  onChange?:(code:string,row:LanguageRow)=>void;
  /** Codes pinned into the Suggested group, in order: recent, project languages, device locale, gateway. */
  suggested?:string[];
  surface?:'popover'|'sheet';
  /** Resource-type labels matching coverage positions. Default Bible · Notes · Words · Maps. */
  types?:string[];
  title?:string;
  placeholder?:string;
  fallbackNote?:string;
  style?:React.CSSProperties;
}
export declare function LanguagePicker(props:LanguagePickerProps):JSX.Element;
