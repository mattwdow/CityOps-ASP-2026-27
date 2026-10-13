# City Operations Annual Service Plan 2026–27

Interactive scrollytelling web application presenting City Operations annual service plans, beginning with the Edmonton Transit Service (ETS) Annual Service Plan and architected to scale into three additional departmental service plans.

---

## 🏛️ Architecture Overview

This repository is organized to serve as the foundational template and monorepo baseline for **4 City Operations Annual Service Plans**:

1. **ETS Annual Service Plan** (Current — Live Dashboard)
2. **Plan 2** *(Upcoming)*
3. **Plan 3** *(Upcoming)*
4. **Plan 4** *(Upcoming)*

### Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Animations & Scrollytelling:** Motion (`motion/react`) with scroll-linked triggers and color shifts
- **Icons:** Lucide React

---

## 🚀 Running in GitHub Codespaces (Zero Local Setup)

Because Node.js runs directly in GitHub Codespaces, you can spin up the full live dashboard in seconds without local runtime dependencies:

1. On GitHub ([seldomsmith/CityOps-ASP-2026-27](https://github.com/seldomsmith/CityOps-ASP-2026-27)), click **Code** → **Codespaces** → **Create codespace on main**.
2. Dependencies install automatically via `.devcontainer/devcontainer.json`.
3. Start the dev server in the Codespaces terminal:
   ```bash
   npm run dev
   ```
4. Click the forwarded port **3000** or the popup toast to open the running application in your browser.

---

## 💻 Available Scripts

- `npm run dev`: Launch Vite development server on port 3000
- `npm run build`: Type-check and compile production bundle to `/dist`
- `npm run preview`: Preview production build locally
- `npm run lint`: Run TypeScript type-checker (`tsc --noEmit`)

---

## ⚡ Branch Scoping Slash Commands

You can scope updates directly to individual branch service plans or apply changes department-wide using dedicated commands across any conversation turn:

| Command | Scope | Target Data / Components |
| :--- | :--- | :--- |
| `/pars` | **Parks and Roads Services** | Updates `parksRoadsPlan` in `src/data/plans.ts` and assets in `src/assets/parks-roads/` |
| `/ets` | **Edmonton Transit Service** | Updates `etsPlan` in `src/data/plans.ts`, specialized components in `src/components/`, and assets in `src/assets/` |
| `/ffs` | **Fleet and Facility Services** | Updates `fleetPlan` in `src/data/plans.ts` and assets in `src/assets/fleet/` |
| `/waste` | **Waste Management Services** | Updates `wastePlan` in `src/data/plans.ts` and assets in `src/assets/waste/` |
| `/all` | **Universal Department-Wide** | Synchronizes changes across all 4 branches, shared strategy in `src/data/department.ts`, and the landing overview hub |

These commands are registered as persistent Antigravity workspace skills and rules under `.agents/`.

---

## 🗺️ Roadmap: Multi-Plan Template Expansion

When adding the 3 additional service plans, the project scales through unified routing:
- **Landing Overview Hub:** `#/`
- **Edmonton Transit Service:** `#/ets`
- **Fleet and Facility Services:** `#/fleet`
- **Parks and Roads Services:** `#/parks-roads`
- **Waste Management Services:** `#/waste`
