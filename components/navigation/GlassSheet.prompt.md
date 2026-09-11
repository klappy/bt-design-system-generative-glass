A bottom sheet that dims and recedes what is behind it.

```jsx
<GlassSheet open={open} title="Invite a collaborator" description="Collaborators can open the workspace. Survey participants only need the survey link."
  behind={<HomeContent/>} actions={<><GlassButton variant="dark" full>Copy invite link</GlassButton><GlassButton full>Open workspace access</GlassButton></>}/>
```
