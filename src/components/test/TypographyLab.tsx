import React, { useState } from 'react';

interface FontSpecimen {
  id: string;
  name: string;
  archetype: string;
  description: string;
  headingFamily: string;
  headingWeight: string;
  bodyFamily: string;
  bodyWeight: string;
  sampleEyebrow: string;
  sampleTitle: string;
  sampleH1: string;
  sampleH2: string;
  sampleH3: string;
  sampleBody: string;
  sampleStatLabel: string;
  sampleStatValue: string;
}

const fontSuites: FontSpecimen[] = [
  {
    id: 'current-live',
    name: '1. Current Live Pairing (Municipal Swiss Accessibility)',
    archetype: 'Official Civic Standard',
    description: 'Plus Jakarta Sans (SemiBold 600) for monumental authority paired with Atkinson Hyperlegible (Regular 400), originally engineered by the Braille Institute for unmatched character distinction and civic legibility.',
    headingFamily: '"Plus Jakarta Sans", sans-serif',
    headingWeight: '600',
    bodyFamily: '"Atkinson Hyperlegible", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'classic-swiss',
    name: '2. Helvetica Neo-Grotesque Purist (Public Sans & Inter)',
    archetype: 'High-Density Corporate / Massimo Vignelli',
    description: 'Public Sans (an open-source evolution of classic US Web Design System / DIN / Helvetica) paired with Inter. Extremely neutral, zero decorative frills, maximum data density.',
    headingFamily: '"Public Sans", sans-serif',
    headingWeight: '700',
    bodyFamily: '"Inter", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'nordic-clean',
    name: '3. Nordic Modernist (Outfit & DM Sans)',
    archetype: 'Contemporary Geometric Editorial',
    description: 'Outfit (bold, friendly, modern geometric grotesque) paired with DM Sans. Warm, approachable, while maintaining clean industrial authority.',
    headingFamily: '"Outfit", sans-serif',
    headingWeight: '700',
    bodyFamily: '"DM Sans", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'space-architect',
    name: '4. Brutalist Municipal Infrastructure (Space Grotesk & Inter)',
    archetype: 'Kernclub / Architectural Monoline',
    description: 'Space Grotesk (inspired by space monospace proportions with proportional character widths) paired with crisp Inter. Evokes raw engineering drafts, train scheduling monitors, and blueprints.',
    headingFamily: '"Space Grotesk", sans-serif',
    headingWeight: '700',
    bodyFamily: '"Inter", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'syne-creative',
    name: '5. Avant-Garde Kinetic / Creative Poster (Syne & Albert Sans)',
    archetype: 'Bold Design Biennale / Kinetic Magazine',
    description: 'Syne (wide, sculptural, daring French design studio grotesque originally created for the Synesthésie art centre) paired with Albert Sans. Extremely bold and memorable.',
    headingFamily: '"Syne", sans-serif',
    headingWeight: '800',
    bodyFamily: '"Albert Sans", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'manrope-modern',
    name: '6. Engineered Municipal Grotesque (Manrope Pure)',
    archetype: 'Clean Municipal Government',
    description: 'Unified single-type family: Manrope Bold for display titles, SemiBold for headers, and Regular for body paragraphs. High legibility and zero typeface clashing.',
    headingFamily: '"Manrope", sans-serif',
    headingWeight: '700',
    bodyFamily: '"Manrope", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'roboto-corporate',
    name: '7. Utilitarian Corporate Workhorse (Roboto Flex & Inter)',
    archetype: 'Institutional Civic Enterprise',
    description: 'Roboto Flex (engineered for extreme screen clarity and tabular data) paired with Inter. Familiar, reliable, and strictly corporate.',
    headingFamily: '"Roboto Flex", sans-serif',
    headingWeight: '700',
    bodyFamily: '"Inter", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
  {
    id: 'fraunces-hybrid',
    name: '8. Heritage Modern Editorial (Fraunces & Public Sans)',
    archetype: 'Historic Municipal Authority / Magazine',
    description: 'Fraunces (wonky, elegant variable serif inspired by early 20th-century typefoundries) for headlines, anchored by Public Sans for clean modern municipal data.',
    headingFamily: '"Fraunces", serif',
    headingWeight: '700',
    bodyFamily: '"Public Sans", sans-serif',
    bodyWeight: '400',
    sampleEyebrow: 'City Operations • Annual Service Plan',
    sampleTitle: 'EDMONTON TRANSIT SERVICE',
    sampleH1: 'Branch Service Objectives 2026',
    sampleH2: 'Convenient, Reliable, Safe, and Accessible Transit',
    sampleH3: 'Procurement of 25 Conventional Low-Floor Buses',
    sampleBody: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand, stabilizing peak headway times and improving regional mobility across Edmonton.',
    sampleStatLabel: 'Total Completed Trips 2025',
    sampleStatValue: '61.8M',
  },
];

export default function TypographyLab() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <section id="typography-lab" className="w-full bg-[#FAFBFD] text-neutral-900 py-24 px-6 sm:px-12 lg:px-16 border-t-2 border-neutral-200">
      <div className="max-w-[1400px] mx-auto space-y-16">
        
        {/* Lab Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#003461] text-[#F4B223] font-manrope text-xs font-bold uppercase tracking-widest">
            Typography Specimen Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#003461] font-manrope">
            Fonts & Typography Lab
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-3xl leading-relaxed font-atkinson">
            Compare 8 curated typographic systems tailored for the City Operations Annual Service Plan. Each suite demonstrates the hierarchy from monumental display titles down to Header 1, Header 2, Header 3, quantitative data tokens, and body reading paragraphs.
          </p>
        </header>

        {/* Specimen Cards */}
        <div className="space-y-16">
          {fontSuites.map((suite) => (
            <article 
              key={suite.id}
              className="bg-white p-8 sm:p-12 lg:p-16 border-t-4 border-[#003461] shadow-sm space-y-10"
            >
              {/* Suite Metadata Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                <div>
                  <span className="font-manrope text-xs font-bold uppercase tracking-widest text-[#004B87] block mb-1">
                    {suite.archetype}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    {suite.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-manrope font-semibold uppercase tracking-wider">
                    Headings: {suite.headingFamily.replace(/,.*$/, '').replace(/"/g, '')}
                  </span>
                  <span className="px-3 py-1 bg-[#F5FAFF] text-[#003461] text-xs font-manrope font-semibold uppercase tracking-wider">
                    Body: {suite.bodyFamily.replace(/,.*$/, '').replace(/"/g, '')}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 font-atkinson leading-relaxed max-w-4xl">
                {suite.description}
              </p>

              {/* Live Rendered Hierarchy Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
                
                {/* Left Column: Monumental Display & Hierarchy Stack */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Eyebrow Label */}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Eyebrow Category Overline ]
                    </span>
                    <span 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-xs uppercase tracking-widest text-[#003461] block"
                    >
                      {suite.sampleEyebrow}
                    </span>
                  </div>

                  {/* Main Monumental Display Title */}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Monumental Display Title — 4xl to 6xl ]
                    </span>
                    <h1 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#003461] leading-none"
                    >
                      {suite.sampleTitle}
                    </h1>
                  </div>

                  {/* Header 1 */}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Header 1 (h1) — 2xl to 4xl ]
                    </span>
                    <h2 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-2xl sm:text-4xl text-[#003461] tracking-tight leading-tight"
                    >
                      {suite.sampleH1}
                    </h2>
                  </div>

                  {/* Header 2 */}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Header 2 (h2) — xl to 2xl ]
                    </span>
                    <h3 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-xl sm:text-2xl text-[#004B87] tracking-tight leading-snug"
                    >
                      {suite.sampleH2}
                    </h3>
                  </div>

                  {/* Header 3 */}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Header 3 (h3) — lg to xl ]
                    </span>
                    <h4 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-lg sm:text-xl text-neutral-900 leading-snug"
                    >
                      {suite.sampleH3}
                    </h4>
                  </div>
                </div>

                {/* Right Column: Quantitative Stat & Running Body Narrative */}
                <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
                  {/* KPI Stat Block */}
                  <div className="bg-[#F5FAFF] p-6 sm:p-8">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Tabular Display Metric & Label ]
                    </span>
                    <span 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-xs uppercase tracking-widest text-neutral-500 block mb-2"
                    >
                      {suite.sampleStatLabel}
                    </span>
                    <div 
                      style={{ fontFamily: suite.headingFamily, fontWeight: suite.headingWeight }}
                      className="text-5xl sm:text-6xl text-[#003461] leading-none tracking-tight"
                    >
                      {suite.sampleStatValue}
                    </div>
                  </div>

                  {/* Body Paragraph */}
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                      [ Running Body Copy / Reading Text ]
                    </span>
                    <p 
                      style={{ fontFamily: suite.bodyFamily, fontWeight: suite.bodyWeight }}
                      className="text-base sm:text-lg text-neutral-800 leading-relaxed"
                    >
                      {suite.sampleBody}
                    </p>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
