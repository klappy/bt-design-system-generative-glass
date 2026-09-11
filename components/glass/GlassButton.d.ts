/**
 * Pill button. The frames use exactly four treatments: frosted glass, solid white
 * ("Open" on a photo card), solid ink (the send affordance), and night glass.
 */
export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?:'glass'|'solid'|'dark'|'night'|'quiet';
  size?:'sm'|'md'|'lg';
  full?:boolean;
  leading?:React.ReactNode;
  trailing?:React.ReactNode;
  children?:React.ReactNode;
}
export declare function GlassButton(props:GlassButtonProps):JSX.Element;
