import React from 'react';
import { departmentInfo } from '../data/department';
import { allBranchPlans } from '../data/plans';
import { BranchPlan } from '../types/asp';
import { Check, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-neutral-900 font-sans pt-12 pb-24 selection:bg-black selection:text-white">
      {/* Header / Department Overview Strip */}
      <section className="border-b border-neutral-200 bg-neutral-50 px-4 sm:px-8 py-10 lg:py-14">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-neutral-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-600 mb-3">
                <span className="font-semibold text-black">{departmentInfo.parentOrganization}</span>
                <span>/</span>
                <span>{departmentInfo.cycle}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-black uppercase">
                {departmentInfo.departmentName}
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 max-w-3xl mt-3 leading-relaxed">
                {departmentInfo.mission}
              </p>
            </div>

            {/* Department Plan Progress Register */}
            <div className="bg-white border-2 border-black p-5 sm:p-6 min-w-[280px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-2 text-neutral-600">
                <span>Documentation Status</span>
                <span className="font-bold text-black">{completionPercentage}% Drafted</span>
              </div>
              <div className="w-full bg-neutral-200 h-2 border border-black overflow-hidden">
                <div
                  className="bg-black h-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-neutral-600">
                <span>{completedSections} of {totalSections} sections filed</span>
                <span>4 branches</span>
              </div>
            </div>
          </div>

          {/* Department Directives Strip (Compact Metadata Row) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {departmentInfo.coreValues.map((val, idx) => (
              <div key={idx} className="bg-white border border-neutral-300 p-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                  Pillar 0{idx + 1}
                </div>
                <div className="text-xs font-bold uppercase tracking-tight text-black mb-1">{val.title}</div>
                <p className="text-xs text-neutral-600 leading-normal">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Branch ASP Tracker Table / Cards */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-8 mt-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-3 border-b-2 border-black">
          <div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black">
              Branch Service Plans Tracker
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
              Select any branch to inspect current draft sections or launch the published scrollytelling report.
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
                className="bg-white border-2 border-black p-6 sm:p-7 flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold bg-black text-white px-1.5 py-0.5">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                        {branch.shortName}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 uppercase tracking-wider font-bold border ${
                        isPopulated
                          ? 'bg-black text-white border-black'
                          : 'bg-neutral-100 text-neutral-600 border-neutral-300'
                      }`}
                    >
                      {isPopulated ? 'Published' : 'Draft Skeleton'}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-black uppercase tracking-tight mb-2">
                    {branch.branchName}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {branch.tagline}
                  </p>

                  {/* Section Checklist Table */}
                  <div className="bg-neutral-50 border border-neutral-200 p-4 space-y-2 mb-6 font-mono text-xs">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-2 pb-1 border-b border-neutral-200">
                      Standard Section Template Checklist
                    </div>
                    {sections.map((sec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between py-0.5">
                        <span className={sec.filled ? 'text-black font-medium' : 'text-neutral-500'}>
                          {sec.label}
                        </span>
                        {sec.filled ? (
                          <span className="inline-flex items-center gap-1 text-black font-bold text-[11px]">
                            <Check size={12} strokeWidth={3} /> Filed
                          </span>
                        ) : (
                          <span className="text-neutral-400 text-[11px]">
                            Pending
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Launch Button */}
                <button
                  onClick={() => onSelectBranch(branch.slug)}
                  className={`w-full py-3 px-4 font-mono uppercase tracking-wider text-xs font-bold flex items-center justify-center gap-2 border-2 border-black transition-all cursor-pointer ${
                    isPopulated
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'bg-white text-black hover:bg-neutral-100'
                  }`}
                >
                  <span>{isPopulated ? `Open ${branch.shortName} Plan` : `Preview ${branch.shortName} Skeleton`}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Info Strip */}
      <footer className="max-w-[1300px] mx-auto px-4 sm:px-8 mt-16 pt-6 border-t border-neutral-200 text-neutral-500 text-xs font-mono">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>City Operations Annual Service Plans • City of Edmonton</div>
          <div>Node.js and GitHub Codespaces Build Environment</div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectOverview;
