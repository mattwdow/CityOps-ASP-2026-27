# Task List: City Operations Annual Service Plan (Rebuild & GitHub Sync)

- [x] Step 1: Code Review & Workspace Structuring <!-- id: 0 -->
    - Review existing `ets-annual-service-plan` files, assets, dependencies, and temporary scripts.
    - Clean up temporary scrap scripts (`check.cjs`, `check_assets.cjs`, `find.cjs`, `rename.cjs`, etc.) while ensuring all assets and configurations are retained.
    - Set up root structure with clear template architecture for the upcoming 3 plans.
- [x] Step 2: Initialize Git Repository & Connect Remote <!-- id: 1 -->
    - Initialize Git in the project root.
    - Ensure `.gitignore` covers `node_modules`, `dist`, `.env*`, and `.DS_Store`.
    - Retain `ets-annual-service-plan.zip` or exclude it via `.gitignore` based on clean repo practices.
    - Add remote `https://github.com/seldomsmith/CityOps-ASP-2026-27`.
- [x] Step 3: Add Multi-App Scalability Plan & Devcontainer / Codespaces Config <!-- id: 2 -->
    - Add `.devcontainer/devcontainer.json` for one-click GitHub Codespaces development (Node.js 22 LTS, Vite port 3000 forwarding).
    - Update `README.md` documenting the architecture, ETS dashboard, codespaces startup instructions, and roadmap for adding the 3 additional plans.
- [x] Step 4: Commit and Push to GitHub <!-- id: 3 -->
    - Stage all structured files and commit with descriptive message.
    - Push to `main` on `https://github.com/seldomsmith/CityOps-ASP-2026-27`.
    - Verify push completion and remote state.
- [x] Step 5: Verification & Codespaces Delivery Proof <!-- id: 4 -->
    - Verify remote commit log and directory contents on GitHub.
