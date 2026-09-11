/**
 * 3D Review question: bands, not scores. Four pills with a jar-fill mark in a single hue; one question per screen; perspective as overline.
 * @startingPoint section="Survey" subtitle="One question, four bands, jar-fill mark" viewport="480x300"
 */
export interface SurveyQuestionProps{
  perspective:'Translator'|'Community'|'Church'|'Consultant'|string;
  /** e.g. "3 of 8" */
  progress?:string;
  question:string;
  bands?:string[];
  value?:number|null;
  onChange?:(index:number)=>void;
  note?:string|null;
  /** Pass null to hide the optional free-text field. */
  freeTextPlaceholder?:string|null;
  style?:React.CSSProperties;
}
export declare function SurveyQuestion(props:SurveyQuestionProps):JSX.Element;
