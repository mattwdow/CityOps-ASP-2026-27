# Transition Plan: City of Edmonton VIS Typography & Layout Implementation (/test Sandbox)

- [x] Phase 1: Typography System Scaffolding & Design Tokens <!-- id: 0 -->
  - [x] Add Google Fonts (`Open Sans` and `PT Serif`) plus font fallbacks (`Prelo Pro`, `Quercus 10`, `Arial`, `Times New Roman`) into font stack <!-- id: 1 -->
  - [x] Configure Tailwind utility classes / CSS vars for VIS standard line spacing (Leading: Headlines 1.0, Titles 1.125, Body 1.5) and tracking (-10 / -0.025em) <!-- id: 2 -->
- [x] Phase 2: Core Header & Staging (Nav & Hero in /test) <!-- id: 3 -->
  - [x] Refactor `src/components/test/Nav.tsx`: Ensure City Logo staging has the required `X` clear space buffer and right-edge alignment compliance <!-- id: 4 -->
  - [x] Refactor `src/components/test/Hero.tsx`: Implement VIS typography scale, 3-4 words per line headline rule, mixed-case styling, leading 1.0, and 50% title proportion <!-- id: 5 -->
- [x] Phase 3: Editorial & Narrative Scrollytelling Sections in /test <!-- id: 6 -->
  - [x] Refactor `src/components/test/Message.tsx`: Set body leading to 1.5x, max 4 columns width, ragged right alignment, and PT Serif / Open Sans hierarchy <!-- id: 7 -->
  - [x] Refactor `src/components/test/Objectives.tsx`: Align subtitles and cards to VIS complement color rules and spacing formulas <!-- id: 8 -->
  - [x] Refactor `src/components/test/BranchByTheNumbers.tsx` & `Results2025.tsx`: Align metric labels and callouts to VIS type rules <!-- id: 9 -->
- [x] Phase 4: Verification & Staff-Engineer Review <!-- id: 10 -->
  - [x] Run `npm run build` to verify zero compile or TypeScript errors <!-- id: 11 -->
  - [x] Visual verification of `/test` sandbox route to confirm layout integrity and responsiveness <!-- id: 12 -->
