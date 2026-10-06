import React, { useState, useEffect } from 'react';
import MasterHeader from './components/MasterHeader';
import ProjectOverview from './views/ProjectOverview';
import BranchPlanView from './views/BranchPlanView';
import { allBranchPlans } from './data/plans';

export default function App() {
  // Read initial route from URL hash (e.g. #/ets or #/)
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    return hash;
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (slug: string) => {
    if (slug === '') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${slug}`;
    }
  };

  // Determine active branch or fallback to overview
  const activePlan = allBranchPlans[currentRoute];

  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-neutral-950">
      {/* 1. Distinct Black & White Master Header */}
      <MasterHeader currentPath={currentRoute} onNavigate={handleNavigate} />

      {/* 2. Main Page Render */}
      <div className="w-full flex-grow flex flex-col">
        {activePlan ? (
          <BranchPlanView
            plan={activePlan}
            onBackToOverview={() => handleNavigate('')}
          />
        ) : (
          <ProjectOverview onSelectBranch={handleNavigate} />
        )}
      </div>
    </div>
  );
}
