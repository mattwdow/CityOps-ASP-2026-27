import React from 'react';
import { allBranchPlans } from '../data/plans';

interface MasterHeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const MasterHeader: React.FC<MasterHeaderProps> = ({ currentPath, onNavigate }) => {
  const branches = [
    { slug: '', label: 'Overview Hub', short: 'Overview', isOverview: true },
    { slug: 'ets', label: 'Edmonton Transit Service', short: 'ETS', plan: allBranchPlans.ets },
    { slug: 'fleet', label: 'Fleet and Facilities', short: 'Fleet', plan: allBranchPlans.fleet },
    { slug: 'parks-roads', label: 'Parks and Roads', short: 'Parks and Roads', plan: allBranchPlans['parks-roads'] },
    { slug: 'waste', label: 'Waste Management', short: 'Waste', plan: allBranchPlans.waste },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-black text-white border-b border-neutral-800 font-['Manrope',sans-serif] shadow-md">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="bg-white text-black text-[11px] font-black tracking-widest px-1.5 py-0.5 uppercase">
              COE
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-200 uppercase">
              City Operations <span className="text-neutral-500 hidden md:inline">| ASP 2026-27</span>
            </span>
          </div>
        </div>

        {/* Navigation Switcher */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 no-scrollbar text-xs">
          {branches.map((item) => {
            const isActive = item.isOverview ? currentPath === '' : currentPath === item.slug;
            const isComplete = item.plan ? !item.plan.isSkeleton : true;

            return (
              <button
                key={item.slug}
                onClick={() => onNavigate(item.slug)}
                className={`relative px-2.5 sm:px-3 py-1 rounded transition-all flex items-center gap-1.5 whitespace-nowrap font-medium ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.short}</span>
                {!item.isOverview && (
                  <span
                    className={`inline-block w-1.5 h-1.5 rounded-full ${
                      isComplete ? 'bg-emerald-400' : 'bg-neutral-600'
                    }`}
                    title={isComplete ? 'Content Complete' : 'Skeleton Template'}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default MasterHeader;
