---
trigger: always_on
---

# City Operations ASP Branch Scoping Commands Rule

This rule ensures that slash commands targeting specific branches or all branches are recognized and applied deterministically across conversation turns and new chat sessions.

## Scoping Slash Commands

When a prompt contains any of the following scoping commands, restrict or broaden file changes accordingly:

| Command | Target Scope | Target Data / Files | Design Token Base |
| :--- | :--- | :--- | :--- |
| `/pars` | Parks and Roads Services | `src/data/plans.ts` (`parksRoadsPlan`), `src/assets/parks-roads/` | `#EA580C` Safety Orange, `#F97316` Amber |
| `/ets` | Edmonton Transit Service | `src/data/plans.ts` (`etsPlan`), `src/components/{Hero,Message,Impact,Results2025,RouteChanges,LookingAhead2026,Dats50,Nav}.tsx`, `src/assets/` | `#003461` Edmonton Navy, `#F4B223` Gold |
| `/ffs` | Fleet and Facility Services | `src/data/plans.ts` (`fleetPlan`), `src/assets/fleet/` | `#1E3A8A` Municipal Blue, `#475569` Steel Gray |
| `/waste` | Waste Management Services | `src/data/plans.ts` (`wastePlan`), `src/assets/waste/` | `#15803D` Forest Green, `#84CC16` Lime |
| `/test` | TEST Sandbox (Design features) | `src/data/plans.ts` (`testPlan`), `src/components/test/*` | Sandboxed experimentation |
| `/all` | Universal Department-Wide | `src/data/department.ts`, all branch plans in `src/data/plans.ts`, `src/views/ProjectOverview.tsx`, `src/components/MasterHeader.tsx`, `src/views/BranchPlanView.tsx` | Synchronize all branches |

## Operational Rules
1. **Isolated Blast Radius**: If `/pars`, `/ets`, `/ffs`, or `/waste` is invoked, do not alter data or components belonging to other branches.
2. **Synchronized `/all`**: If `/all` is invoked, propagate structural, layout, or content changes systematically across all branches while preserving their individual branch color palettes.
3. **Design Integrity**: Always adhere to the anti-AI guidelines and typography rules specified in `ASPdesign.md`.
