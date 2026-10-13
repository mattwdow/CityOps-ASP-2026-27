---
name: ffs
description: >-
  Targeted edit scope for Fleet and Facility Services (FFS).
  Use when the user types /ffs or asks to edit, update, or modify the Fleet and Facility Services Annual Service Plan.
---

# /ffs: Fleet and Facility Services Edit Scope

When the user invokes `/ffs`, limit all design, copy, metric, and component modifications strictly to the **Fleet and Facility Services** plan.

## Target Files & Assets
- **Plan Data Model**: `src/data/plans.ts` (Specifically `fleetPlan`)
- **Asset Directory**: `src/assets/fleet/`
- **Route / Hash**: `#/fleet`

## Branch Design Tokens (from `ASPdesign.md`)
- **Primary Brand**: `#1E3A8A` (Civic Municipal Blue)
- **Secondary Gray**: `#475569` (Industrial Steel Slate)
- **Accent Steel**: `#60A5FA` (Fleet Modernization Highlight)
- **Deep Base**: `#0F172A` (Charcoal Facility Base)
- **Canvas Surface**: `#F8FAFC` (Architectural Blueprint Off-White)
- **Typography Tone**: `#0F172A`

## Guidelines
- Do not modify ETS, PARS, Waste, or global landing page files unless explicitly requested.
- Maintain adherence to `ASPdesign.md` and anti-AI design rules.
