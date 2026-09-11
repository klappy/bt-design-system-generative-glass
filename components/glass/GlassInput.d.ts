/**
 * The message composer field. Fully rounded, heavy blur, placeholder in --ink-400.
 */
export interface GlassInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'height'>{
  placeholder?:string;
  leading?:React.ReactNode;
  trailing?:React.ReactNode;
  /** 58 on the home composer, 48 in the compact chat bar. */
  height?:number;
}
export declare function GlassInput(props:GlassInputProps):JSX.Element;
