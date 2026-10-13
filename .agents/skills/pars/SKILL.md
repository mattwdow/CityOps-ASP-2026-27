---
name: pars
description: >-
  Targeted edit scope for Parks and Roads Services (PARS).
  Use when the user types /pars or asks to edit, update, or modify the Parks and Roads Services Annual Service Plan.
---

# /pars: Parks and Roads Services Edit Scope

When the user invokes `/pars`, limit all design, copy, metric, and component modifications strictly to the **Parks and Roads Services** plan.

## Target Files & Assets
- **Plan Data Model**: `src/data/plans.ts` (Specifically `parksRoadsPlan`)
- **Asset Directory**: `src/assets/parks-roads/`
- **Route / Hash**: `#/parks-roads`

## Branch Design Tokens (from `ASPdesign.md`)
- **Primary Brand**: `#EA580C` (Operational Safety Orange)
- **Secondary Amber**: `#F97316` (Field Equipment Amber)
- **Asphalt Base**: `#1C1917` (Pavement Carbon Slate)
- **Canopy Accent**: `#CA8A04` (Urban Forestry Accent)
- **Canvas Surface**: `#FAFAF9` (Granular Earth Tint)
- **Typography Tone**: `#1C1917`

## Guidelines
- Do not modify ETS, Fleet, Waste, or global landing page files unless explicitly requested.
- Maintain adherence to `ASPdesign.md` and anti-AI design rules.
