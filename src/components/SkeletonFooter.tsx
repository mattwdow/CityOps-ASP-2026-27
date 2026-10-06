import React from 'react';
import { BranchPlan } from '../types/asp';
import { ArrowRight } from 'lucide-react';

interface SkeletonFooterProps {
  plan: BranchPlan;
}

export const SkeletonFooter: React.FC<SkeletonFooterProps> = ({ plan }) => {
  return (
    <footer 
      className="relative w-full py-20 px-6 sm:px-12 flex flex-col justify-center items-center text-white text-center border-t-4"
      style={{ 
        backgroundColor: plan.accentDark || plan.accentColor,
        borderColor: plan.accentLight || '#ffffff'
      }}
    >
      <div className="max-w-[800px] w-full mx-auto flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono tracking-widest uppercase text-white/80">
          <span>City of Edmonton</span> • <span>City Operations</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
          {plan.branchName}
        </h2>

        <div 
          className="w-20 h-1 rounded" 
          style={{ backgroundColor: plan.accentLight || '#ffffff' }}
        />

        <p className="text-base sm:text-lg text-white/80 font-light max-w-xl leading-relaxed">
          2026-27 Annual Service Plan
        </p>

        <a 
          href="https://edmonton.ca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded border border-white/30 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
        >
          <span>edmonton.ca</span>
          <ArrowRight size={14} />
        </a>

        <div className="pt-8 border-t border-white/10 w-full text-xs font-mono text-white/50">
          © {new Date().getFullYear()} City of Edmonton. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SkeletonFooter;
