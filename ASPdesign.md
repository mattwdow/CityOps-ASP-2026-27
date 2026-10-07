# City Operations Annual Service Plans (ASP)
## Scrollytelling Design System & Engineering Specification (`ASPdesign.md`)

This document defines the core visual design principles, typography, brand palettes, component anatomy, and anti-AI-slop rules for the City Operations Annual Service Plan web applications.

---

## 1. Architectural Philosophy: The Anti-Vibe-Coding Standard

Our scrollytelling builds serve municipal leadership, City Council, and residents. They must communicate empirical public data with authority, clarity, and precision.

### Anti-AI Tells & Design Corrections

| AI Vibe-Coding Tell | Why It Fails | ASP Design Rule |
| :--- | :--- | :--- |
| **"Pill & Pastel" Result Buckets** (e.g. pink pill with drop shadow and 3D down arrow) | Looks like a generic SaaS startup or crypto dashboard; fails municipal gravity and visual contrast standards. | **Data-Dense Performance Registers**: Sharp rectangular badges (`rounded-none` or `rounded-sm`) using crisp border outlines, tabular monospaced numbers, and plain Unicode status indicators (`✅`, `⬇️`). |
| **Hyper-Rounded Radii** (`rounded-2xl`, `rounded-3xl` on functional blocks) | Creates bubbly "toy-like" containers that waste spatial margins and signal unedited AI boilerplate. | **Civic Architectural Radius**: `rounded-none` for structural containers, tables, and swatches; max `rounded-md` for interactive tactile flip tiles. |
| **Aurora Glows & Radial Gradients** (`blur-3xl`, floating ambient colored spheres) | Gratuitous visual noise that distracts from municipal metrics and adds zero storytelling value. | **Solid Surface Elevation**: Clean solid backgrounds (`#FFFFFF`, `#F5FAFF`, `#003461`), crisp structural 1px/2px borders, and solid high-contrast drop offsets (`shadow-[4px_4px_0px_0px_#000]`). |
| **Emoji & Soft Lucide Icon Overdose** | Every button and card plastered with random icons and emojis dilutes semantic hierarchy. | **Functional Iconography Only**: Icons are reserved exclusively for interactive actions (arrows, chevron triggers) or dedicated domain markers. |
| **Corporate Buzzword Puffery** | Phrases like "rich tapestry", "unlocking synergies", "fostering vibrant communities". | **Direct Canadian English Prose**: Empirical statements, active voice, concrete numbers, and hyphenated cycles (`2026-27`). |

---

## 2. Official Department & Branch Colour Palettes

Extracted directly from the official City of Edmonton InDesign print production profiles (Adobe InDesign 20.3 spot separations and CMYK colorants).

### A. Edmonton Transit Service (ETS)
- **Design Intent:** Regional mobility, rapid transit network, gold standard customer service.
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
  - **Primary Brand:** `#003461` / `#1E3A8A` (Civic Municipal Blue)
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
  - **Secondary Amber:** `#F4B223` / `#F97316` (Field Equipment Amber)
  - **Asphalt Base:** `#1C1917` (Pavement Carbon Slate)
  - **Park Canopy:** `#15803D` / `#CA8A04` (Urban Forestry Accent)
  - **Canvas Surface:** `#FAFAF9` (Granular Earth Tint)
  - **Dark Neutral Typography:** `#1C1917`

### D. Waste Management Services (WMS)
- **Design Intent:** 25-year waste strategy, curbside organics diversion, circular economy, Edmonton Waste Management Centre.
- **Official Print Separations:** `PANTONE 376 C` (Environmental Leaf Green).
- **Digital Palette Tokens:**
  - **Primary Brand:** `#15803D` (Environmental Forest Green)
  - **Secondary Accent:** `#70BD44` / `#84CC16` (Pantone 376 C / Organics Green)
  - **Bio Base:** `#14532D` (Deep Composting Charcoal)
  - **Canvas Surface:** `#F0FDF4` (Clean Eco Off-White)
  - **Dark Neutral Typography:** `#052E16`

---

## 3. Typographic System

- **Department Primary Font:** **Manrope** (`font-['Manrope',sans-serif]`) across all landing views, executive metadata registers, and UI headers.
- **ETS Experience Font:** **Inter** (`font-sans`) paired with **Dancing Script** for executive signatures.
- **InDesign Source Counterpart:** `Prelo` / `Open Sans` / `Myriad Pro` (clean, humanist sans-serifs with high x-height and open apertures).
- **Tabular Figures:** Numbers in tables and metric counters must use tabular monospaced rendering (`font-mono` or `tabular-nums`) to prevent horizontal jitter during animated increments.

---

## 4. Scrollytelling Component Anatomy

Each annual service plan follows a standardized 6-part narrative structure:

```
[Master Header] -> Stark black & white department switcher (Fixed top-0)
[Branch Sub-Nav] -> Sticky progress rail with scroll-linked progress indicator (Fixed top-12)
[Hero Banner] -> High-contrast photography or panoramic municipal asset
[1. Branch Manager Message] -> Portrait photo, direct message, sign-off
[2. Key Impact Metrics] -> Animated numerical counters with empirical scale (M, k, %)
[3. Results from 2025] -> Objective cards, deliverables, and Performance Review table
[4. Highlights & Milestones] -> Dedicated milestone callouts or historical anniversaries
[5. Looking Ahead to 2026] -> Interactive 3D flip tiles with front summary and back details
[6. Footer] -> Branch sign-off, city website link, and copyright
```

### Performance Review Table Redesign
Instead of bubbly pastel pill badges with drop shadows:
- **Header:** Uppercase 11px monospaced column headings (`MEASURE`, `TARGET`, `RESULT`, `STATUS`).
- **Rows:** Alternating subtle background hover states with 1px border dividers.
- **Target vs Result:** Monospaced bold typography with clear units.
- **Status Indicators:** High-contrast bordered badges:
  - Favorable / Met Target: Solid green border and text (`border-emerald-700 text-emerald-800 bg-emerald-50/50`) with `✅`.
  - Attention / Missed Target: Solid red/amber border and text (`border-red-700 text-red-800 bg-red-50/50`) with `⬇️`.

---

## 5. Evolutionary Roadmap (Baby Steps)

1. **Step 1 (Current):** Unified 5-page architecture deployed to GitHub. Live ETS plan + 3 clean structured skeletons. Landing page color palettes and matrix table.
2. **Step 2 (Immediate):** Surgical removal of AI vibe-coding tropes in ETS results table (flatter status cells, no floating pastel pills, crisp typography).
3. **Step 3 (Upcoming Content):** When content arrives for Fleet, PARS, and Waste, populate into `src/data/plans.ts` and drop photos into `src/assets/<branch>/`.
