# Zero Meta-Design Descriptions in User Interface

Enforce strict separation between engineering/design theory and user-facing copy.

## Rule: No Meta-Design Commentary in UI Copy
Never render internal architectural directives, design movements, aesthetic philosophies, or prompt labels as visible text in the application user interface.

### Explicitly Forbidden UI Text Patterns
Do not insert any of the following into rendered UI elements (headings, subheadings, nav titles, badges, labels, subtitles, or tooltips):
- Design movement or style names: e.g., "Swiss Design", "Swiss Minimalist", "Neo-Grotesque", "Brutalist", "Bauhaus", "Vignelli".
- Analytical / design theory labels: e.g., "Data-Ink Ratio", "Edward Tufte Direct Labelling", "Direct Labelling", "Tabular Display Metric".
- Meta sandbox labels: e.g., "Design Sandbox", "Experimental Feature Sandbox", "Sandbox Mode".
- AI / prompt generation commentary: e.g., "Bespoke Component", "AI-optimized layout", "Anti-AI refactor".

### Correct Execution
- Always use authentic, clean, production-calibrated municipal domain copy (e.g., `"ETS Annual Service Plan 25/26"` instead of `"TEST • Swiss Design Sandbox"`).
- Architectural and design rationale belongs strictly in code comments (`// ...`), pull request descriptions, or developer documentation.
