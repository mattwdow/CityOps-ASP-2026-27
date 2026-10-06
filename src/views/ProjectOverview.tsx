import React from 'react';
import { departmentInfo } from '../data/department';
import { allBranchPlans } from '../data/plans';
import { BranchPlan } from '../types/asp';
import { CheckCircle2, Circle, ArrowRight, Shield, Zap, Layers, RefreshCw } from 'lucide-react';

interface ProjectOverviewProps {
  onSelectBranch: (slug: string) => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onSelectBranch }) => {
  const branches: BranchPlan[] = Object.values(allBranchPlans);

  // Calculate completion statistics
  const totalSections = branches.length * 4;
  const completedSections = branches.reduce((acc, branch) => {
    const c = branch.completion;
    return acc + (c.managerMessage ? 1 : 0) + (c.impactMetrics ? 1 : 0) + (c.results2025 ? 1 : 0) + (c.lookingAhead2026 ? 1 : 0);
  }, 0);
  const completionPercentage = Math.round((completedSections / totalSections) * 100);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans pt-16 pb-24">
      {/* Top Banner / Department Header */}
      <section className="border-b border-neutral-800 bg-black/60 backdrop-blur px-4 sm:px-8 py-12 lg:py-16">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-neutral-300 text-xs font-mono uppercase tracking-widest rounded-full mb-4">
                <span>{departmentInfo.parentOrganization}</span>
                <span>•</span>
                <span>{departmentInfo.cycle}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                {departmentInfo.departmentName}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mt-3 font-normal leading-relaxed">
                {departmentInfo.mission}
              </p>
            </div>

            {/* Department Overall ASP Progress Scorecard */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl min-w-[280px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">Portfolio Readiness</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">{completionPercentage}% Completed</span>
              </div>
              <div className="w-full bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full transition-all duration-700"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>{completedSections} of {totalSections} Sections Filled</span>
                <span className="text-neutral-500">4 Branches Active</span>
              </div>
            </div>
          </div>

          {/* Department Strategic Pillars (Synced Across All 4 Branches) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departmentInfo.coreValues.map((val, idx) => (
              <div key={idx} className="bg-neutral-900/60 border border-neutral-800/80 p-5 rounded-lg">
                <div className="text-neutral-400 text-xs font-mono uppercase tracking-wider mb-2">Pillar 0{idx + 1}</div>
                <h3 className="text-sm font-bold text-white mb-1.5">{val.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Branch ASP Progress Matrix */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase">
              Branch Service Plans Tracker
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Select any branch to launch its dedicated scrollytelling experience or audit section population status.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 size={14} /> Ready / Populated
            </span>
            <span className="inline-flex items-center gap-1.5 text-neutral-500">
              <Circle size={14} /> Skeleton Template
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((branch, idx) => {
            const isPopulated = !branch.isSkeleton;
            const sections = [
              { label: '1. Branch Manager Message', filled: branch.completion.managerMessage },
              { label: '2. Key Impact Metrics', filled: branch.completion.impactMetrics },
              { label: '3. Results from 2025', filled: branch.completion.results2025 },
              { label: '4. Looking Ahead to 2026', filled: branch.completion.lookingAhead2026 },
            ];

            return (
              <div
                key={branch.id}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-semibold">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        {branch.shortName}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                        isPopulated
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                      }`}
                    >
                      {isPopulated ? 'Live Experience' : 'Skeleton Template'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{branch.branchName}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{branch.tagline}</p>

                  {/* Section Checklist Table */}
                  <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-4 space-y-2.5 mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Content Template Sections
                    </div>
                    {sections.map((sec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs">
                        <span className={sec.filled ? 'text-neutral-200' : 'text-neutral-500'}>
                          {sec.label}
                        </span>
                        {sec.filled ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                            <CheckCircle2 size={13} /> Populated
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-neutral-600 font-mono text-[11px]">
                            <Circle size={13} /> Waiting on Draft
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Launch CTA */}
                <button
                  onClick={() => onSelectBranch(branch.slug)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isPopulated
                      ? 'bg-white text-black hover:bg-neutral-200 shadow-md'
                      : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700'
                  }`}
                >
                  <span>{isPopulated ? `View ${branch.shortName} Annual Plan` : `Preview ${branch.shortName} Template`}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sync Strategy Note */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 mt-16 pt-8 border-t border-neutral-800 text-neutral-500 text-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>
            City Operations Annual Service Plan System. Content and templates managed centrally via unified TypeScript schemas.
          </p>
          <div className="font-mono text-neutral-400">
            Node.js / Codespaces Ready
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectOverview;
