/** Desktop frame: 210px context panel (grouped items), phase segmented control across the top, content area. Viewer and participant routes drop the panel. */
export interface DesktopShellProps{
  appName?:string;
  /** Element under the app name, e.g. a "New assessment" pill. */
  action?:React.ReactNode;
  groups:{label:string;empty?:string;items?:{label:string;meta?:string;active?:boolean;muted?:boolean;onSelect?:()=>void}[]}[];
  phases?:string[];
  phase?:string;
  onPhase?:(phase:string)=>void;
  crumb?:string;
  title?:string;
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function DesktopShell(props:DesktopShellProps):JSX.Element;
