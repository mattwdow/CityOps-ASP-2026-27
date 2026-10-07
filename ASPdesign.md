# City Operations Annual Service Plans (ASP)
## Scrollytelling & Anti-AI Design System Specification (`ASPdesign.md`)

This document defines the core visual design principles, typography, brand palettes, component anatomy, scrollytelling mechanics, and anti-AI-slop rules for the City Operations Annual Service Plan web applications.

---

## 1. Architectural Philosophy: The Anti-Vibe-Coding Standard (`/antiai`)

Our scrollytelling builds serve municipal leadership, City Council, and Edmonton residents. They communicate empirical public data with authority, clarity, and precision.

### The 18 Visual & Structural Tells Filter

We systematically audit and eliminate predictable AI design patterns across all branch applications:

| Tell ID & AI Vibe-Coding Trope | Why It Fails | ASP Design Rule & Surgical Remedy |
| :--- | :--- | :--- |
| **VIS-01: The "Shadcn Dark Slate" Palette** | Overreliance on `zinc-950` or `slate-950` with neon indigo or purple accents signals generic consumer SaaS templates. | **Civic Surface Elevation**: Light editorial ground canvases (`#FFFFFF`, `#F5FAFF`, `#F8FAFC`) with high-contrast department typography and official branch spot colors. |
| **VIS-02: "Pill & Pastel" Result Buckets** | Soft pink, mint, or lavender rounded pill badges with 3D drop shadows (e.g. `71% ⬇️`) look like crypto or SaaS boilerplate. | **Data-Dense Municipal Status Cells**: Sharp rectangular bordered badges (`rounded-none` or `rounded-sm`) using crisp border outlines (`border-2 border-red-700 text-red-900 bg-red-50`), monospaced numbers, and plain Unicode status indicators (`✅`, `⬇️`). |
| **VIS-03: The Quad-KPI Top Row** | Rigid four-column symmetrical card grid with pastel icon boxes across the top fold. | **Asymmetric High-Impact Hero Counters**: Anchor major department totals (e.g. `61.8M` Transit Trips) with variable layout spans, animated counter scrubbing, and secondary comparative context. |
| **VIS-04: Hyper-Rounded Radii** | Bubbly `rounded-2xl` and `rounded-3xl` corners applied to functional tables and data containers waste spatial margins. | **Sharp Architectural Radii**: `rounded-none` for structural containers, tables, and swatches; maximum `rounded-md` for tactile interactive flip tiles. |
| **VIS-05: Aurora Glows & Ambient Blurs** | Decorative background blurs (`blur-3xl`, `bg-gradient-to-tr from-purple-500/10`) distract from civic metrics and add zero storytelling value. | **Solid Material Clarity**: Crisp solid section backgrounds (`#FFFFFF`, `#003461`), 1px/2px hairline dividers, and physical high-contrast drop offsets (`shadow-[4px_4px_0px_0px_#000]`). |
| **VIS-06: Emoji & Lucide Icon Overdose** | Plastering an SVG icon on every header, bullet, and table label dilutes semantic hierarchy. | **Functional Iconography Only**: Icons are strictly reserved for functional interactions (navigation arrows, expand triggers) or official domain indicators. |
| **VIS-07: Exaggerated Hover Transforms & Bounces** | Excessive `hover:scale-105 hover:-translate-y-1` animations create a jittery, unprofessional reading environment. | **Tactile Restraint**: Subdued contrast border shifts (`hover:border-black`), subtle 3D tile rotation, and steady progressive motion. |
| **VIS-08: Missing Loading States & Structural Fallbacks** | Hardcoded mock data without structured fallback states. | **Universal Template Contracts**: Strongly typed TypeScript data models (`src/types/asp.ts`) and clear wireframe skeleton states for unpopulated branches. |

### Written Copy & Editorial Standards

- **Vocabulary Blacklist**: Banish generic AI filler words (*delve*, *seamless*, *empower*, *streamline*, *tapestry*, *testament*, *foster*, *leverage*, *multifaceted*, *pivotal*, *vibrant*, *unparalleled*).
- **No Empty Clichés or Corporate Puffery**: Eliminate "rich cultural tapestry" or "playing a vital role". State facts, fleet volumes, and operational benchmarks directly.
- **Regional Orthography & Punctuation Constraints**:
  - Enforce Canadian English spelling (`colour`, `neighbour`, `centre`, `prioritise`).
  - Use Oxford commas across lists of three or more items.
  - **Dash Prohibition**: Do not use em-dashes (—) or en-dashes (–) for clauses or emphasis. Use commas, semicolons, colons, or parentheses. Standard hyphens (-) remain permitted solely for compound words and cycle dates (`2026-27`).
- **Active Voice & Human Agency**: Prohibit inanimate false agency ("the platform understands"). State the municipal branch or operational program explicitly ("ETS operators deliver", "waste diversion teams process").

---

## 2. Scrollytelling Architecture & Visual Storytelling (`/scrollytelling`)

Our scrollytelling pages pair dense quantitative evidence with calm, magazine-grade editorial design across 9 core architectural pillars:

### Pillar 1: Graph Stickiness & Dead-Center Lock (`useStickyScroller`)
- **Normal Document Flow**: Charts and spatial graphics sit in natural document flow between narrative paragraphs (no artificial blank 300vh spacer divs).
- **Proactive Wheel Interception**: Intercept mouse wheel/touch ticks before the element crosses viewport center (`vh / 2`). Clamp scroll to center, lock immediately, and route surplus scroll deltas directly into animation scrubbing.
- **Continuous RAF Damping**: Lerp damping (`0.18` per frame) ensures 60fps fluid ease-out on notch-based mouse wheels.
- **Decoupled Reading Window**: Total runway = `runway` (e.g. 900px) + `readingWindow` (e.g. 250px). Normalized animation progress reaches `1.0` *before* the runway ends. The completed chart remains pinned and motionless dead-center for ~250px so the reader absorbs the takeaway before scrolling resumes.
- **Zero Snap-Back Release**: Once scrub reaches `1.0` (downward) or `0.0` (upward), the lock releases cleanly with zero visual jump.

### Pillar 2: "Show me the math" Transparent Methodology Modals
Every composite index, KPI benchmark, or performance target offers an inline trigger button:
- **Modal Overlay**: Clean fixed backdrop modal with LaTeX math formulations and step-by-step worked calculations.
- **Honest Limitations & Assumptions Box**: Explicitly state boundary conditions, data collection windows (e.g. automated passenger counters vs survey sample sizes), and proxy definitions.

### Pillar 3: Comparative Subject Tickets (`RouteTicket`)
When comparing entities (e.g. *Route A vs Route B*, *Conventional Bus vs On-Demand Transit*, *2024 Actual vs 2025 Target*):
- Introduce subjects using die-cut ticket stub components with left-edge colored stripes, vertical rotated text, and tabular micro-metrics grids.

### Pillar 4: Spatial Mapbox Integration & Geospatial Storytelling
For network infrastructure narratives:
- **Interactive Segmented Toggles**: Seamless camera fly-tos between corridors (e.g. *Valley Line West*, *Transit Priority Measures on 101 Street*, *Terwillegar Express*).
- **Catchment & Walking Isochrone Animations**: Dynamic buffer rings (400m / 5-minute walks) expanding from transit centers or civic facilities.

### Pillar 5: Advanced Explainer Widgets & Diagnostic Charts
- **Animated Numerical Scrubbers**: `useSpring` and `useMotionValue` interpolated counters for major statistics.
- **Longitudinal Heatmaps**: Multi-year performance and seasonal service delivery matrices with continuous municipal ramps.
- **Interactive 3D Flip Tiles**: Focus area cards with high-level summaries on the front and detailed operational plans on the back.

### Pillar 6: Navigation, Progress Rails & Route Spines
- **Massimo Vignelli Route Spine**: Continuous vertical line down the margin with styled station nodes marking each section.
- **Floating Route Progress Rail (`Nav.tsx`)**: Fixed sticky header tracking scroll progress with an animated transit vehicle moving across station dots as the reader progresses through the report.

### Pillar 7: Tactile Visual Annotations & Delta Badges
- **High-Contrast Delta Badges**: Monospace status pills (`font-mono tabular-nums`) indicating exact variances (e.g. `▲ +3.4%` or `▼ −7.2 bps`).
- **Editorial Margin Notes & Hairline Brackets**: Isolate milestones, award recognitions (e.g. Lorna Stewart Award), and operational challenges directly alongside data curves.

### Pillar 8: Golden Ratio Typography Scale ($\phi = 1.618$)
Anchor title sizes directly to running body text via the golden ratio:
$$\text{Title Size} = \text{Body Text Size} \times 1.618$$
- **16px Body Copy** $\to$ Title size is $\approx 26\text{px}$ ($16 \times 1.618$).
- **18px Editorial Body Copy** $\to$ Title size is $\approx 29\text{px}$ ($18 \times 1.618$).
- **Subhead Scale ($\sqrt{1.618} \approx 1.272$)**: Intermediate labels multiply body size by $1.272$ ($16\text{px} \times 1.272 \approx 20\text{px}$).

### Pillar 9: The 5-Tone Color Palette Structure
Build every branch scrollytelling palette using exactly 5 semantic tones:
1. **2 Neutrals**: Neutral Light / Canvas (`#FFFFFF`, `#F5FAFF`) and Neutral Surface / Border (`#E5E7EB`, `#161C21`).
2. **1 Base Color**: Primary brand identity tone (e.g. Edmonton Navy `#003461`).
3. **1 Contrast Color**: Supportive secondary comparison tone (e.g. Transit Gold `#F4B223` or Steel Blue `#60A5FA`).
4. **1 Accent Color**: High-salience indicator for critical targets, progress lines, and primary CTAs (e.g. Cyan `#00A1E4` or Safety Orange `#EA580C`).

---

## 3. Official Department & Branch Colour Palettes

Extracted directly from the official City of Edmonton InDesign print production profiles (Adobe InDesign 20.3 spot separations and CMYK colorants).

### A. Edmonton Transit Service (ETS)
- **Design Intent:** Regional mobility, rapid transit network, customer service excellence.
- **Official Print Separations:** `PANTONE 2955 C` (Edmonton Navy Blue), `PANTONE 7406 C` (Transit Gold).
- **Digital Palette Tokens:**
  - **Primary Brand:** `#003461` (Deep Edmonton Navy)
  - **Primary Container:** `#004B87` (Royal Transit Blue)
  - **Secondary Gold:** `#F4B223` (Transit Gold / Safety Warning)
  - **Transit Cyan:** `#00A1E4` (Active LRT Progress Line)
  - **Canvas Surface:** `#FFFFFF` / `#F5FAFF` (Light Snow)
  - **Dark Neutral Typography:** `#161C21`

### B. Fleet and Facility Services (FFS)
- **Design Intent:** Municipal asset management, civic buildings, zero-emission fleet transition, heavy mechanical engineering.
- **Official Print Separations:** `PANTONE 2955 C` (Civic Blue) paired with Architectural Gray / Steel CMYK tints.
- **Digital Palette Tokens:**
  - **Primary Brand:** `#1E3A8A` (Municipal Blue)
  - **Secondary Gray:** `#475569` (Industrial Steel Slate)
  - **Accent Steel:** `#60A5FA` (Fleet Modernization Highlight)
  - **Deep Base:** `#0F172A` (Charcoal Facility Base)
  - **Canvas Surface:** `#F8FAFC` (Architectural Blueprint Off-White)
  - **Dark Neutral Typography:** `#0F172A`

### C. Parks and Roads Services (PARS)
- **Design Intent:** Roadway preservation, active paths, snow and ice operations, urban canopy, and river valley parks.
- **Official Print Separations:** `PANTONE 7406 C` (Safety Alert Amber/Gold) combined with Roadway Safety Orange & Asphalt CMYK.
- **Digital Palette Tokens:**
  - **Primary Brand:** `#EA580C` (Operational Safety Orange)
  - **Secondary Amber:** `#F97316` (Field Equipment Amber)
  - **Asphalt Base:** `#1C1917` (Pavement Carbon Slate)
  - **Park Canopy:** `#CA8A04` (Urban Forestry Accent)
  - **Canvas Surface:** `#FAFAF9` (Granular Earth Tint)
  - **Dark Neutral Typography:** `#1C1917`

### D. Waste Management Services (WMS)
- **Design Intent:** 25-year waste strategy, curbside organics diversion, circular economy, Edmonton Waste Management Centre.
- **Official Print Separations:** `PANTONE 376 C` (Environmental Leaf Green).
- **Digital Palette Tokens:**
  - **Primary Brand:** `#15803D` (Environmental Forest Green)
  - **Secondary Accent:** `#84CC16` (Pantone 376 C / Organics Green)
  - **Bio Base:** `#14532D` (Deep Composting Charcoal)
  - **Canvas Surface:** `#F0FDF4` (Clean Eco Off-White)
  - **Dark Neutral Typography:** `#052E16`

---

## 4. Scrollytelling Choreography & Section Anatomy

When structuring each annual service plan, sequence content across 3 scrub intervals ($p \in [0.0, 1.0]$):

| Phase | Scrub Interval ($p$) | Visual Mechanics |
| :--- | :--- | :--- |
| **Phase 1: Foundation** | $0.0 \to 0.35$ | Section headers lock, grid lines and baseline numerical scales animate in. |
| **Phase 2: Divergence** | $0.35 \to 0.75$ | Data points diverge, performance targets meet actuals, interactive flip cards rotate into view. |
| **Phase 3: Synthesis & Annotation** | $0.75 \to 1.00$ | Editorial callout card slides in, leader arrows point to anomalies, delta badges settle. |
| **Resting Window** | $1.00$ (Motionless) | Graphic remains pinned dead-center for ~250px so the reader absorbs the key municipal takeaway. |

### Standardized 6-Part Narrative Structure
1. **Master Header (Fixed `top-0`)**: Stark black-and-white department navigation bar.
2. **Branch Sub-Nav (Fixed `top-12`)**: Sticky progress rail with vehicle icon tracking scroll depth.
3. **Hero Banner**: High-contrast civic photography and official branch title.
4. **1. Branch Manager Message**: Leader portrait, direct municipal message, and signature.
5. **2. Key Impact Metrics**: Animated counters scrubbed with empirical scale (`M`, `k`, `%`).
6. **3. Results from 2025**: Performance review matrix with high-contrast bordered status cells and breakout stories.
7. **4. Looking Ahead to 2026**: Interactive 3D flip tiles with front summaries and back operational details.
8. **Branch Themed Footer**: Standardized city web link (`edmonton.ca`) and copyright metadata.

---

## 5. Evolutionary Roadmap (Baby Steps)

1. **Step 1 (Completed):** Unified 5-page architecture deployed to GitHub. Live ETS plan + 3 clean structured skeletons. Landing page color palettes and matrix table.
2. **Step 2 (Completed):** Anti-vibe-coding refactor of ETS results table (flatter status cells, no floating pastel pills, crisp typography).
3. **Step 3 (Immediate):** Codification of `ASPdesign.md` uniting `/antiai` and `/scrollytelling` principles.
4. **Step 4 (Upcoming Content):** When content arrives for Fleet, PARS, and Waste, populate into `src/data/plans.ts` and drop photos into `src/assets/<branch>/`.
