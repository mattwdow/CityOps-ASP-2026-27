# Lessons Learned & Programmatic Guardrails

## 1. UI Copy vs Meta Design Language (Zero Meta Design Commentary)
- **Problem**: In `/test` or experimental branches, the agent inserted meta-design labels such as "TEST • Swiss Design Sandbox", "Swiss Minimalist Hairline Progress Line", or design movement commentary into the actual end-user interface.
- **Root Cause**: The agent conflated architectural intent / design aesthetic guidelines (e.g., Swiss design, Tufte data-ink ratio) with UI copy rendered to the user.
- **Defensive Rule**:
  - Never render internal design commentary, design movement names (e.g., "Swiss", "Brutalist", "Neo-Grotesque", "Bespoke", "Tufte"), or sandbox implementation labels into the end-user UI.
  - The UI must always read as authentic, professional production municipal copy (e.g., "ETS Annual Service Plan 25/26").
  - Technical design terms belong strictly in code comments or developer artifacts, never in visible text elements, headings, tags, or navigation titles.
