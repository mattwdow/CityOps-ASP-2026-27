---
name: test
description: >-
  Targeted edit scope for the TEST Sandbox tab.
  Use when the user types /test or asks to experiment with design features, layouts, or copy in the TEST sandbox.
---

# /test: Design Sandbox Edit Scope

When the user invokes `/test`, limit all design, copy, metric, and component modifications strictly to the **TEST** sandbox environment so the live Edmonton Transit Service (ETS) and other official branches remain untouched.

## Target Files & Assets
- **Sandbox Plan Data Model**: `src/data/plans.ts` (Specifically `testPlan`)
- **Sandbox Component Suite (`src/components/test/`)**:
  - `src/components/test/Hero.tsx`
  - `src/components/test/Message.tsx`
  - `src/components/test/Objectives.tsx`
  - `src/components/test/Impact.tsx`
  - `src/components/test/Results2025.tsx`
  - `src/components/test/RouteChanges.tsx`
  - `src/components/test/LookingAhead2026.tsx`
  - `src/components/test/Dats50.tsx`
  - `src/components/test/FinaleParallax.tsx`
  - `src/components/test/Nav.tsx`
  - `src/components/test/Footer.tsx`
- **Route / Hash**: `#/test`

## Operational Rules
1. **Zero Production Contamination**: Never modify `src/components/Hero.tsx`, `etsPlan`, or any official branch components when `/test` is invoked.
2. **Rapid Prototyping**: Test new visual idioms, animations, cards, scrollytelling experiments, and color variations freely inside `src/components/test/`.
3. **Clean Migration Path**: When an experiment in `/test` is approved, port it cleanly to `/ets` or the target branch.
