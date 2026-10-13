---
name: ets
description: >-
  Targeted edit scope for Edmonton Transit Service (ETS).
  Use when the user types /ets or asks to edit, update, or modify the Edmonton Transit Service Annual Service Plan.
---

# /ets: Edmonton Transit Service Edit Scope

When the user invokes `/ets`, limit all design, copy, metric, and component modifications strictly to the **Edmonton Transit Service** plan.

## Target Files & Assets
- **Plan Data Model**: `src/data/plans.ts` (Specifically `etsPlan`)
- **ETS Component Suite**:
  - `src/components/Hero.tsx`
  - `src/components/Message.tsx`
  - `src/components/Objectives.tsx`
  - `src/components/Impact.tsx`
  - `src/components/Results2025.tsx`
  - `src/components/RouteChanges.tsx`
  - `src/components/LookingAhead2026.tsx`
  - `src/components/Dats50.tsx`
  - `src/components/FinaleParallax.tsx`
  - `src/components/Nav.tsx` (LRT scroll progress indicator)
- **Asset Directory**: `src/assets/` & `src/assets/ets/`
- **Route / Hash**: `#/ets`

## Branch Design Tokens (from `ASPdesign.md`)
- **Primary Brand**: `#003461` (Deep Edmonton Navy)
- **Primary Container**: `#004B87` (Royal Transit Blue)
- **Secondary Gold**: `#F4B223` (Transit Gold / Safety Warning)
- **Transit Cyan**: `#00A1E4` (Active LRT Progress Line)
- **Canvas Surface**: `#FFFFFF` / `#F5FAFF` (Light Snow)
- **Typography Tone**: `#161C21`

## Guidelines
- Do not modify PARS, Fleet, Waste, or global landing page files unless explicitly requested.
- Maintain adherence to `ASPdesign.md` and anti-AI design rules.
