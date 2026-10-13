---
name: all
description: >-
  Universal department-wide edit scope for City Operations Annual Service Plans.
  Use when the user types /all or asks to apply changes universally across all four branch plans and the landing overview.
---

# /all: Universal Department-Wide Edit Scope

When the user invokes `/all`, changes apply systematically across all four departmental branches and the central landing overview hub.

## Target Files & Systems
- **Global Strategy & Mission**: `src/data/department.ts`
- **Central Plan Datasets**: `src/data/plans.ts` (Synchronize `etsPlan`, `fleetPlan`, `parksRoadsPlan`, `wastePlan`)
- **Landing Overview Hub**: `src/views/ProjectOverview.tsx`
- **Master Header Bar**: `src/components/MasterHeader.tsx`
- **Universal Branch Template Engine**: `src/views/BranchPlanView.tsx` & `src/components/SkeletonFooter.tsx`
- **Data Schemas**: `src/types/asp.ts`
- **Design System**: `ASPdesign.md`

## Guidelines
- Ensure changes maintain brand color segregation across branches while standardizing layout, typography, or content structures.
- Preserve Canadian English spelling, zero em-dash punctuation, and anti-AI-slop design rules.
