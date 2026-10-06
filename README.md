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

## 🗺️ Roadmap: Multi-Plan Template Expansion

When adding the 3 additional service plans, the project can scale across two clean paths:

- **Option A (Multi-route SPA):** Add lightweight routing (React Router) with a unified City Operations launchpad at `/` and dedicated scrollytelling experiences at `/ets`, `/plan-2`, `/plan-3`, and `/plan-4`.
- **Option B (Monorepo Workspaces):** Convert root `package.json` to npm workspaces (`apps/ets`, `apps/plan-2`, `apps/plan-3`, `apps/plan-4`, `packages/shared-ui`) sharing design tokens, scrollytelling hooks, and navigation chrome.
