# Task List: City Operations Annual Service Plan (5-Page Multi-Branch Hub)

- [x] Step 1: Define TypeScript Data Contracts & Content Schemas <!-- id: 10 -->
    - Create `src/types/asp.ts` modeling the exact Content Template (Branch Manager Message, Key Impact Metrics, Results from 2025, Looking Ahead 2026 Focus Areas, Breakout Boxes, Statuses).
- [x] Step 2: Establish Department-Wide Strategic Context & Branch Datasets <!-- id: 11 -->
    - Create `src/data/department.ts` with shared Department Mission, Vision, and Values.
    - Create `src/data/plans.ts` with full ETS data populated from user instructions and skeleton states for Fleet & Facilities, Parks & Roads, and Waste Management.
- [x] Step 3: Build Top Master Header Component <!-- id: 12 -->
    - Build `src/components/MasterHeader.tsx` in stark black and white with navigation links for Overview and all 4 branches, active indicator, and completion status tags.
- [x] Step 4: Build Page 1 - Project Management Overview Hub <!-- id: 13 -->
    - Build `src/views/ProjectOverview.tsx` featuring minimal aesthetic, department-level strategy, and interactive Branch Progress Cards showing filled vs empty sections with direct launch buttons.
- [x] Step 5: Build Universal Branch Scrollytelling View <!-- id: 14 -->
    - Create `src/views/BranchPlanView.tsx` supporting full scrollytelling for populated plans (ETS) and clean structured skeletons for unpopulated plans.
- [x] Step 6: Update App Shell & Hash-based Routing <!-- id: 15 -->
    - Update `src/App.tsx` to handle routing across `#/`, `#/ets`, `#/fleet`, `#/parks-roads`, `#/waste` with smooth transition and master header integration.
- [x] Step 7: Push to GitHub & Verify <!-- id: 16 -->
    - Commit and push all additions to GitHub repository `seldomsmith/CityOps-ASP-2026-27`.
