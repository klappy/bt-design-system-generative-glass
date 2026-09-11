/** Three-state sync indicator that lives top-right of any card that can be stale. */
export interface SyncBadgeProps{
  state?:'ok'|'syncing'|'offline';
  /** Override the default copy ("Up to date", "Syncing N items", "Offline · saved on device"). */
  label?:string;
  /** Items in flight, shown when state is 'syncing'. */
  count?:number;
  style?:React.CSSProperties;
}
export declare function SyncBadge(props:SyncBadgeProps):JSX.Element;
