/** A comment thread anchored to a verse. Role as overline, time as caption. Resolving softens the thread instead of hiding it. */
export interface ReviewThreadProps{
  /** e.g. "Ruth 2:3" */
  anchor:string;
  comments:{name:string;initials?:string;role?:'Translator'|'Community'|'Church'|'Consultant'|string;when?:string;text:string}[];
  resolved?:boolean;
  onToggleResolved?:()=>void;
  onReply?:()=>void;
  replyPlaceholder?:string;
  style?:React.CSSProperties;
}
export declare function ReviewThread(props:ReviewThreadProps):JSX.Element;
