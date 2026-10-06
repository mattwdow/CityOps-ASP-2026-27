import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { BranchPlan } from '../types/asp';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle, FileText, BarChart3, Target, Calendar } from 'lucide-react';
import FinaleParallax from '../components/FinaleParallax';
import Footer from '../components/Footer';

// ETS-specific components for the live ETS dashboard
import Hero from '../components/Hero';
import Message from '../components/Message';
import Objectives from '../components/Objectives';
import Impact from '../components/Impact';
import Results2025 from '../components/Results2025';
import RouteChanges from '../components/RouteChanges';
import LookingAhead2026 from '../components/LookingAhead2026';
import Dats50 from '../components/Dats50';

interface BranchPlanViewProps {
  plan: BranchPlan;
  onBackToOverview: () => void;
}

export const BranchPlanView: React.FC<BranchPlanViewProps> = ({ plan, onBackToOverview }) => {
  // If this is ETS, render the full specialized scrollytelling experience
  if (plan.slug === 'ets') {
    return (
      <div className="w-full flex-grow flex flex-col relative text-on-background bg-white">
        {/* Branch Sub-Nav Banner */}
        <div className="sticky top-12 z-40 bg-[#003461] text-white px-4 sm:px-8 py-2.5 flex items-center justify-between border-b border-[#00213d] shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToOverview}
              className="text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Overview
            </button>
            <span className="text-white/30">|</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4B223]">
              {plan.branchName} — 2026–27 ASP
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-medium text-white/80">
            <a href="#message" className="hover:text-white transition-colors">Manager Message</a>
            <a href="#objectives" className="hover:text-white transition-colors">Objectives</a>
            <a href="#impact" className="hover:text-white transition-colors">By The Numbers</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#highlights" className="hover:text-white transition-colors">Highlights</a>
            <a href="#service-plan" className="hover:text-white transition-colors">Service Plan 2026</a>
          </div>
        </div>

        {/* Existing High-Impact ETS Scrollytelling Assembly */}
        <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col w-full overflow-x-hidden focus:outline-none">
          <Hero />
          <div id="message"><Message /></div>
          <div id="objectives"><Objectives /></div>
          <div id="impact"><Impact /></div>
          <div id="results"><Results2025 /></div>
          <div id="highlights">
            <Dats50 />
            <RouteChanges />
          </div>
          <div id="service-plan"><LookingAhead2026 /></div>
          <FinaleParallax />
        </main>
        <Footer />
      </div>
    );
  }

  // SKELETON BRANCH VIEW (Fleet & Facilities, Parks & Roads, Waste Management)
  return (
    <div className="w-full flex-grow flex flex-col relative text-neutral-900 bg-neutral-50 font-sans">
      {/* Branch Sub-Nav Banner */}
      <div 
        className="sticky top-12 z-40 text-white px-4 sm:px-8 py-2.5 flex items-center justify-between shadow-sm"
        style={{ backgroundColor: plan.accentColor }}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToOverview}
            className="text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Overview
          </button>
          <span className="text-white/30">|</span>
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            {plan.branchName}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-black/20 text-white text-xs px-2.5 py-0.5 rounded-full font-mono">
          <AlertCircle size={13} />
          <span>Skeleton Template Mode</span>
        </div>
      </div>

      {/* Skeleton Hero Header */}
      <header 
        className="text-white py-20 px-6 sm:px-12 relative overflow-hidden"
        style={{ backgroundColor: plan.accentColor }}
      >
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono tracking-widest uppercase mb-4">
            <span>City of Edmonton</span> • <span>City Operations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {plan.branchName}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl font-light mb-8">
            {plan.tagline}
          </p>

          <div className="inline-block bg-white/15 backdrop-blur border border-white/20 p-4 rounded-lg text-xs font-mono max-w-xl">
            <strong>Template Status:</strong> Structural layout and content contracts mapped to the standard Content Template. Waiting for branch content submission.
          </div>
        </div>
      </header>

      {/* Structured Template Wireframe Sections */}
      <main className="max-w-[1100px] mx-auto px-6 sm:px-12 py-16 space-y-16 w-full">
        {/* 1. BRANCH MANAGER MESSAGE SKELETON */}
        <section className="bg-white border-2 border-dashed border-neutral-300 rounded-xl p-8">
          <div className="flex items-center gap-3 text-neutral-500 font-mono text-xs uppercase tracking-wider mb-4 pb-3 border-b border-neutral-200">
            <FileText size={16} />
            <span>1. Branch Manager Message (Template Slot)</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-400 font-mono text-xs text-center shrink-0">
              Manager Photo
            </div>
            <div className="space-y-3 flex-grow">
              <h3 className="text-xl font-bold text-neutral-800">{plan.managerMessage.name}</h3>
              <p className="text-sm font-semibold text-neutral-500">{plan.managerMessage.title}</p>
              <div className="space-y-3 pt-2 text-neutral-600 text-sm leading-relaxed">
                {plan.managerMessage.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 1 ? 'italic text-neutral-400' : ''}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. KEY IMPACT METRICS SKELETON */}
        <section className="bg-white border-2 border-dashed border-neutral-300 rounded-xl p-8">
          <div className="flex items-center gap-3 text-neutral-500 font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b border-neutral-200">
            <BarChart3 size={16} />
            <span>2. Key Impact Metrics - Infographics (Template Slot)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plan.metrics.map((m, idx) => (
              <div key={idx} className="bg-neutral-100 p-6 rounded-lg text-center border border-neutral-200">
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-2">Metric 0{idx + 1}</div>
                <div className="text-4xl font-extrabold text-neutral-800 my-2">[Value {m.suffix}]</div>
                <div className="text-sm font-bold text-neutral-700">{m.label}</div>
                <div className="text-xs text-neutral-400 mt-2">{m.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. RESULTS FROM 2025 SKELETON */}
        <section className="bg-white border-2 border-dashed border-neutral-300 rounded-xl p-8">
          <div className="flex items-center gap-3 text-neutral-500 font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b border-neutral-200">
            <Target size={16} />
            <span>3. Results from 2025 - Objectives & Deliverables (Template Slot)</span>
          </div>
          {plan.results.map((res, idx) => (
            <div key={idx} className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Objective 0{idx + 1}</span>
                <h3 className="text-xl font-bold text-neutral-800">{res.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{res.description}</p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-600 mb-3 font-semibold">Actions and Deliverables:</h4>
                <ul className="space-y-3">
                  {res.actions.map((act, aIdx) => (
                    <li key={aIdx} className="text-sm">
                      <strong className="text-neutral-800 font-semibold">{act.title}:</strong>{' '}
                      <span className="text-neutral-500">{act.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-600 mb-3 font-semibold">Performance Metrics:</h4>
                <div className="space-y-2">
                  {res.metrics.map((pm, pIdx) => (
                    <div key={pIdx} className="flex items-center justify-between text-xs py-2 border-b border-neutral-200 last:border-0">
                      <span className="text-neutral-700 font-medium">{pm.measure}</span>
                      <div className="flex items-center gap-4 font-mono">
                        <span className="text-neutral-500">Target: {pm.target}</span>
                        <span className="text-neutral-800 font-bold">Result: {pm.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* 4. LOOKING AHEAD TO 2026 SKELETON */}
        <section className="bg-white border-2 border-dashed border-neutral-300 rounded-xl p-8">
          <div className="flex items-center gap-3 text-neutral-500 font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b border-neutral-200">
            <Calendar size={16} />
            <span>4. Looking Ahead to 2026 - Service Plan Actions Flip Cards (Template Slot)</span>
          </div>
          {plan.focusAreas.map((fa, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-800">{fa.title}</h3>
              <p className="text-sm text-neutral-500">{fa.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {fa.actions.map((act, actIdx) => (
                  <div key={actIdx} className="bg-neutral-100 border border-neutral-200 rounded-lg p-5">
                    <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">Flip Card 0{actIdx + 1}</div>
                    <h4 className="font-bold text-sm text-neutral-800 mb-1">{act.title}</h4>
                    <p className="text-xs text-neutral-600 mb-3">{act.frontSummary}</p>
                    <div className="bg-neutral-200/70 p-3 rounded text-xs text-neutral-500 italic">
                      [Card Back Details: {act.backDetailedSummary}]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BranchPlanView;
