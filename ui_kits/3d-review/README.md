# 3D Review UI kit

Coordinator desktop for 3D Review: short role-specific surveys (Translator, Community, Church, Consultant) on the health of a translation process. Built from the core components only; nothing here is a new primitive.

Screens (all in `app.jsx`, switched by the DesktopShell phase control and context panel):
- **Prepare** — passage, perspectives, survey settings (GlassField, GlassToggle).
- **Collect** — response counts per perspective, participant preview (SurveyQuestion), invite, SyncBadge. "Open on phone" opens the participant survey in a 390pt device (StatusBar, SurveyQuestion, jar-fill bands).
- **Understand** — quality bands with jar marks (never scores), Simple/Detailed segmented (DEC-0004), ProgressGrid, ReviewThread (resolve softens).
- **Improve** — reflection, next step, report levels.
- **All projects** — ProjectConstellation over the world outline.

Copy follows readme.md: second person, sentence case, no exclamation marks, "Repeat when it is appropriate."

Source: klappy/3d-review-cookbook is private; the flow here follows the readme's description (Prepare/Collect/Understand/Improve, DEC-0001, DEC-0003, DEC-0004) and the component cards. Verify against the cookbook before treating layout as canonical.
