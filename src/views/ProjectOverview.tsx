import React from 'react';
import { departmentInfo } from '../data/department';
import { allBranchPlans } from '../data/plans';
import { BranchPlan } from '../types/asp';
import { Check, ArrowRight, Palette } from 'lucide-react';
import TypographyLab from '../components/test/TypographyLab';

interface ProjectOverviewProps {
  onSelectBranch: (slug: string) => void;
}

interface PaletteToken {
  name: string;
  hex: string;
  textHex?: string;
  role: string;
}

interface BranchPalette {
  branchSlug: string;
  branchName: string;
  ruleSummary: string;
  tokens: PaletteToken[];
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onSelectBranch }) => {
  const branches: BranchPlan[] = Object.values(allBranchPlans);

  // Colour Palettes for each branch (ETS existing tokens as foundation, and baseline palettes for PARS, Waste, Fleet)
  const branchPalettes: BranchPalette[] = [
    {
      branchSlug: 'ets',
      branchName: 'Edmonton Transit Service',
      ruleSummary: 'Deep Navy Blue with Transit Gold and Crisp Snow White',
      tokens: [
        { name: 'Primary Brand', hex: '#003461', textHex: '#FFFFFF', role: 'Hero sections, primary titles, nav headers' },
        { name: 'Primary Container', hex: '#004B87', textHex: '#FFFFFF', role: 'Footers, highlighted containers, card accents' },
        { name: 'Secondary Gold', hex: '#F4B223', textHex: '#003461', role: 'Accent tags, interactive flip cards, award calls' },
        { name: 'Cyan Transit Highlight', hex: '#00A1E4', textHex: '#FFFFFF', role: 'Scroll progress train indicator and links' },
        { name: 'Surface Background', hex: '#F5FAFF', textHex: '#161C21', role: 'Light section canvases and alternating panels' },
        { name: 'Text Dark', hex: '#161C21', textHex: '#FFFFFF', role: 'Primary high-contrast body typography' },
        { name: 'Text Light', hex: '#FFFFFF', textHex: '#003461', role: 'Contrast text against dark brand containers' },
      ]
    },
    {
      branchSlug: 'fleet',
      branchName: 'Fleet and Facility Services',
      ruleSummary: 'Technical Civic Gray and Municipal Blue',
      tokens: [
        { name: 'Primary Municipal Blue', hex: '#1E3A8A', textHex: '#FFFFFF', role: 'Primary titles, executive banners, headers' },
        { name: 'Secondary Technical Gray', hex: '#475569', textHex: '#FFFFFF', role: 'Asset containers, specifications, fleet tables' },
        { name: 'Steel Accent', hex: '#60A5FA', textHex: '#0F172A', role: 'Metric counters, maintenance indicators' },
        { name: 'Deep Steel', hex: '#0F172A', textHex: '#FFFFFF', role: 'Footers, dense data cards, terminal borders' },
        { name: 'Surface Light Gray', hex: '#F1F5F9', textHex: '#0F172A', role: 'Light backgrounds, spec sheet canvases' },
        { name: 'Text Dark Charcoal', hex: '#0F172A', textHex: '#FFFFFF', role: 'Primary body typography and technical labels' },
        { name: 'Text Light', hex: '#FFFFFF', textHex: '#0F172A', role: 'Contrast text on deep blue surfaces' },
      ]
    },
    {
      branchSlug: 'parks-roads',
      branchName: 'Parks and Roads Services',
      ruleSummary: 'Operational Safety Orange and Asphalt Carbon',
      tokens: [
        { name: 'Primary Safety Orange', hex: '#EA580C', textHex: '#FFFFFF', role: 'Primary brand markers, seasonal alerts, tags' },
        { name: 'Warm Earth Amber', hex: '#F97316', textHex: '#FFFFFF', role: 'Interactive tiles, roadway metric callouts' },
        { name: 'Asphalt Carbon Slate', hex: '#1C1917', textHex: '#FFFFFF', role: 'Roadway headers, hero footers, high-contrast rows' },
        { name: 'Park Canopy Ochre', hex: '#CA8A04', textHex: '#FFFFFF', role: 'Urban forestry, trail, and park accents' },
        { name: 'Surface Sand Tint', hex: '#FAFAF9', textHex: '#1C1917', role: 'Light section canvases, report table rows' },
        { name: 'Text Dark Asphalt', hex: '#1C1917', textHex: '#FFFFFF', role: 'Primary high-contrast body copy' },
        { name: 'Text Light', hex: '#FFFFFF', textHex: '#1C1917', role: 'Contrast text on orange and carbon surfaces' },
      ]
    },
    {
      branchSlug: 'waste',
      branchName: 'Waste Management Services',
      ruleSummary: 'Environmental Forest Green and Resource Lime',
      tokens: [
        { name: 'Primary Forest Green', hex: '#15803D', textHex: '#FFFFFF', role: 'Primary headers, diversion targets, brand bars' },
        { name: 'Resource Emerald', hex: '#16A34A', textHex: '#FFFFFF', role: 'Organics callouts, recycling metric tiles' },
        { name: 'Deep Bio Charcoal', hex: '#14532D', textHex: '#FFFFFF', role: 'Footers, compost data tables, dark accents' },
        { name: 'Fresh Sprout Lime', hex: '#84CC16', textHex: '#14532D', role: 'Progress indicators, circular economy badges' },
        { name: 'Surface Pale Green', hex: '#F0FDF4', textHex: '#14532D', role: 'Clean background canvases, audit containers' },
        { name: 'Text Dark Forest', hex: '#052E16', textHex: '#FFFFFF', role: 'Primary high-contrast body copy' },
        { name: 'Text Light', hex: '#FFFFFF', textHex: '#14532D', role: 'Contrast text on deep green containers' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Manrope',sans-serif] pt-12 pb-24 selection:bg-black selection:text-white">
      {/* Header Strip */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-4 sm:px-8 py-8 sm:py-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 mb-2">
            <span className="font-semibold text-black">{departmentInfo.parentOrganization}</span>
            <span>/</span>
            <span>{departmentInfo.cycle}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-black uppercase">
            {departmentInfo.departmentName}
          </h1>
        </div>
      </section>

      {/* Main Content: Single Table Branch Service Plans Tracker */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 mt-10">
        <div className="mb-6 pb-3 border-b-2 border-black flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Branch Service Plans Tracker
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
              Current documentation and completion status across all four departmental branches.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-600 flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-black font-semibold">
              <span className="inline-block w-2.5 h-2.5 bg-black"></span> Live Content
            </span>
            <span className="flex items-center gap-1.5 text-neutral-500">
              <span className="inline-block w-2.5 h-2.5 border border-neutral-400 bg-neutral-100"></span> Template Skeleton
            </span>
          </div>
        </div>

        {/* Single Table Tracker */}
        <div className="w-full overflow-x-auto border-2 border-black">
          <table className="w-full text-left border-collapse font-['Manrope',sans-serif]">
            <thead>
              <tr className="bg-black text-white text-xs uppercase tracking-wider font-bold border-b-2 border-black">
                <th className="p-4 border-r border-neutral-800 min-w-[220px]">Branch</th>
                <th className="p-4 border-r border-neutral-800 text-center min-w-[150px]">1. Branch Manager Message</th>
                <th className="p-4 border-r border-neutral-800 text-center min-w-[140px]">2. Key Impact Metrics</th>
                <th className="p-4 border-r border-neutral-800 text-center min-w-[140px]">3. Results from 2025</th>
                <th className="p-4 border-r border-neutral-800 text-center min-w-[150px]">4. Looking Ahead to 2026</th>
                <th className="p-4 text-center min-w-[120px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
              {branches.map((branch, idx) => {
                const isPopulated = !branch.isSkeleton;
                return (
                  <tr 
                    key={branch.id} 
                    className="hover:bg-neutral-50 transition-colors"
                  >
                    {/* Branch Info */}
                    <td className="p-4 border-r border-neutral-200">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[11px] font-bold bg-neutral-200 text-black px-1.5 py-0.2">
                          0{idx + 1}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                          {branch.shortName}
                        </span>
                      </div>
                      <div className="font-bold text-black text-sm sm:text-base">
                        {branch.branchName}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {isPopulated ? 'Published' : 'Draft Skeleton'}
                      </div>
                    </td>

                    {/* Section 1 */}
                    <td className="p-4 border-r border-neutral-200 text-center align-middle">
                      {branch.completion.managerMessage ? (
                        <div className="inline-flex items-center gap-1.5 text-black font-bold">
                          <Check size={16} strokeWidth={3} />
                          <span>Done</span>
                        </div>
                      ) : (
                        <span className="text-neutral-400 font-mono text-xs">Pending</span>
                      )}
                    </td>

                    {/* Section 2 */}
                    <td className="p-4 border-r border-neutral-200 text-center align-middle">
                      {branch.completion.impactMetrics ? (
                        <div className="inline-flex items-center gap-1.5 text-black font-bold">
                          <Check size={16} strokeWidth={3} />
                          <span>Done</span>
                        </div>
                      ) : (
                        <span className="text-neutral-400 font-mono text-xs">Pending</span>
                      )}
                    </td>

                    {/* Section 3 */}
                    <td className="p-4 border-r border-neutral-200 text-center align-middle">
                      {branch.completion.results2025 ? (
                        <div className="inline-flex items-center gap-1.5 text-black font-bold">
                          <Check size={16} strokeWidth={3} />
                          <span>Done</span>
                        </div>
                      ) : (
                        <span className="text-neutral-400 font-mono text-xs">Pending</span>
                      )}
                    </td>

                    {/* Section 4 */}
                    <td className="p-4 border-r border-neutral-200 text-center align-middle">
                      {branch.completion.lookingAhead2026 ? (
                        <div className="inline-flex items-center gap-1.5 text-black font-bold">
                          <Check size={16} strokeWidth={3} />
                          <span>Done</span>
                        </div>
                      ) : (
                        <span className="text-neutral-400 font-mono text-xs">Pending</span>
                      )}
                    </td>

                    {/* Action Button */}
                    <td className="p-4 text-center align-middle">
                      <button
                        onClick={() => onSelectBranch(branch.slug)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 font-mono uppercase tracking-wider text-xs font-bold border-2 border-black transition-all cursor-pointer whitespace-nowrap ${
                          isPopulated
                            ? 'bg-black text-white hover:bg-neutral-800'
                            : 'bg-white text-black hover:bg-neutral-100'
                        }`}
                      >
                        <span>{isPopulated ? 'Open' : 'Preview'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Branch Design Tokens and Colour Palettes */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 mt-16 pt-10 border-t-2 border-black">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-1">
            <Palette size={14} />
            <span>Design Tokens and Theme Architecture</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
            Branch Colour Palettes
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl">
            Initial colour specifications for each annual service plan. Edmonton Transit Service reflects production tokens; Fleet and Facilities, Parks and Roads, and Waste Management establish foundation palettes for upcoming refinements.
          </p>
        </div>

        <div className="space-y-8">
          {branchPalettes.map((item) => (
            <div key={item.branchSlug} className="border-2 border-black bg-white p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-neutral-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black uppercase tracking-tight">
                    {item.branchName}
                  </h3>
                  <div className="text-xs text-neutral-500 font-mono mt-0.5">
                    Theme Rule: {item.ruleSummary}
                  </div>
                </div>
                <button
                  onClick={() => onSelectBranch(item.branchSlug)}
                  className="self-start sm:self-auto text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100 border border-neutral-300 hover:border-black transition-colors"
                >
                  View Branch
                </button>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {item.tokens.map((token, tIdx) => (
                  <div key={tIdx} className="border border-neutral-200 p-2.5 flex flex-col justify-between bg-neutral-50">
                    <div>
                      <div
                        className="w-full h-12 border border-black/10 rounded-none mb-2 shadow-inner"
                        style={{ backgroundColor: token.hex }}
                        title={`${token.name}: ${token.hex}`}
                      />
                      <div className="text-xs font-bold text-black leading-tight mb-0.5">
                        {token.name}
                      </div>
                      <div className="font-mono text-[11px] text-neutral-600 font-semibold mb-1">
                        {token.hex}
                      </div>
                    </div>
                    <div className="text-[10px] text-neutral-500 leading-tight border-t border-neutral-200 pt-1 mt-1">
                      {token.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Exploration & System Specimen Lab */}
      <TypographyLab />
    </div>
  );
};

export default ProjectOverview;
