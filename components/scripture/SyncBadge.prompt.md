Sync state as a small glass pill: teal dot up to date, breathing dot syncing, dashed dot offline. Put it top-right of anything that can be stale (passage, resource, project).

```jsx
<SyncBadge state="ok"/>
<SyncBadge state="syncing" count={3}/>
<SyncBadge state="offline"/>
```

Copy is the shortest true thing; never "Sync failed!". Offline is a state, not an error.
