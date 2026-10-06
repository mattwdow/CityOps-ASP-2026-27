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
    </div>
  );
};

export default ProjectOverview;
