/** Book-by-chapter progress. Stage is an aurora tint on a 6px-radius cell; empty cells are fill 1. Stage names are per process; this is one ladder. */
export interface ProgressGridProps{
  books:{book:string;chapters:(keyof ProgressStages|null)[]}[];
  /** Override the stage ladder: key → [label, cssColor]. */
  stages?:ProgressStages;
  legend?:boolean;
  style?:React.CSSProperties;
}
export type ProgressStages=Record<string,[string,string]>;
export declare function ProgressGrid(props:ProgressGridProps):JSX.Element;
