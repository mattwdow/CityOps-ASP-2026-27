import React, { useRef, useEffect, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import { useMotionPreference } from '../../context/MotionContext';

// Roll / Count-Up Tabular Number Component
function TabularCountNumber({ 
  value, 
  suffix = '', 
  decimals = 0, 
  duration = 1.6 
}: { 
  value: number; 
  suffix?: string; 
  decimals?: number; 
  duration?: number;
}) {
  const osReduced = useReducedMotion();
  const { animationsEnabled } = useMotionPreference();
  const prefersReduced = osReduced || !animationsEnabled;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  const finalFormatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  useEffect(() => {
    if (!isInView || prefersReduced || !ref.current) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Quintic ease out for Swiss precision deceleration
      const ease = 1 - Math.pow(1 - progress, 5);
      const current = start + (value - start) * ease;

      if (ref.current) {
        ref.current.textContent = current.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else if (ref.current) {
        ref.current.textContent = finalFormatted;
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, prefersReduced, value, decimals, duration, finalFormatted]);

  return (
    <span className="tabular-nums font-feature-tnum">
      <span ref={ref}>{prefersReduced ? finalFormatted : '0'}</span>
      {suffix && <span className="ml-1 text-neutral-500 font-normal">{suffix}</span>}
    </span>
  );
}

export default function BranchByTheNumbers() {
  return (
    <section 
      id="impact" 
      aria-label="Branch by the Numbers: 2025 Year in Review"
      className="relative w-full bg-[#FFFFFF] text-[#003461] py-12 sm:py-16 px-4 sm:px-8 lg:px-12 border-b border-neutral-200 select-none"
    >
      <div className="w-full max-w-[1520px] mx-auto space-y-6">
        
        {/* ========================================================
            MASTER SECTION HEADER (Swiss Architectural Alignment)
           ======================================================== */}
        <header className="border-b-2 border-[#003461] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 bg-[#F59E0B]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                City Operations • Edmonton Transit Service
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#003461] font-manrope">
              Branch by the Numbers: 2025 Year in Review
            </h2>
          </div>
        </header>

        {/* Continuous Unified Swiss Grid */}
        <div className="border-t border-l border-neutral-200 bg-white">

          {/* ========================================================
              BAND 1: RIDERSHIP, SYSTEM ACCESS & TRANSIT EQUITY
             ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12">
            {/* Total Ridership */}
            <div className="group relative sm:col-span-1 xl:col-span-4 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Total Ridership
                </span>
                <div className="mt-2 flex items-baseline gap-2.5">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={61.8} suffix="M" decimals={1} />
                  </span>
                  <span className="inline-flex items-center text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 border border-[#10B981]/30">
                    +8.2% YoY
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Completed bus and LRT passenger journeys across Edmonton.
              </p>
            </div>

            {/* Active Arc Cards */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Active Arc Cards
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={2819060} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Regional smart cards and contactless tap accounts registered.
              </p>
            </div>

            {/* DATS Trips */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  DATS Trips
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={996556} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Door-to-door accessible trips delivered for riders with disabilities.
              </p>
            </div>

            {/* Fare Assistance */}
            <div className="group relative sm:col-span-1 xl:col-span-2 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Fare Assistance
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={240044} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Subsidized monthly passes delivered via equity programs.
              </p>
            </div>
          </div>

          {/* ========================================================
              BAND 2: WORKFORCE, FACILITIES & PASSENGER ENVIRONMENT
             ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12">
            {/* Operator Workforce */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[135px] lg:min-h-[145px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Operator Workforce
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={1861} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Frontline bus and rail transit professionals (Operator FTEs).
              </p>
            </div>

            {/* Citywide Stops */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[135px] lg:min-h-[145px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Citywide Stops
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={5266} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Bus stops within a 5-minute walk of over 90% of Edmonton residents.
              </p>
            </div>

            {/* Bus Shelters */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[135px] lg:min-h-[145px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Bus Shelters
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={2385} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Lit and weather-protected waiting environments across the network.
              </p>
            </div>

            {/* Major Infrastructure Hubs */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[135px] lg:min-h-[145px] bg-white transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Major Infrastructure Hubs
                </span>
                <div className="mt-2 flex items-baseline gap-4 sm:gap-6">
                  <div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={24} />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mt-0.5">
                      Transit Centres
                    </span>
                  </div>
                  <div className="w-px h-8 bg-neutral-300" />
                  <div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={29} />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mt-0.5">
                      LRT Stations
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Key multimodal interchange nodes supporting daily transfers.
              </p>
            </div>
          </div>

          {/* ========================================================
              BAND 3: MULTIMODAL FLEET & CORRIDORS
             ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Bus Fleet & Stacked Proportional Bar */}
            <div className="group relative lg:col-span-6 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                    Active Bus Fleet Composition
                  </span>
                  <span className="text-xs font-mono font-bold text-[#003461]">
                    984 Total Buses
                  </span>
                </div>
                
                <div className="mt-2 flex items-baseline gap-4 sm:gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={880} />
                    </div>
                    <span className="text-[11px] text-neutral-600 font-medium">Standard 40-Foot (89.4%)</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-200" />
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={104} />
                    </div>
                    <span className="text-[11px] text-neutral-600 font-medium">Articulated and Shuttles (10.6%)</span>
                  </div>
                </div>

                {/* Proportional Horizontal Stack with Interactive Expansion */}
                <div className="mt-4 space-y-1.5 cursor-pointer">
                  <div className="w-full h-3 group-hover:h-3.5 transition-all duration-200 bg-neutral-100 flex overflow-hidden border border-neutral-300 group-hover:border-[#003461]/40">
                    <div 
                      className="h-full bg-[#003461] hover:brightness-110 transition-all duration-200" 
                      style={{ width: '89.4%' }} 
                      title="40-Foot Standard Buses: 880 (89.4%)"
                    />
                    <div 
                      className="h-full bg-[#F59E0B] hover:brightness-110 transition-all duration-200" 
                      style={{ width: '10.6%' }} 
                      title="Articulated & Community Shuttles: 104 (10.6%)"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500 group-hover:text-neutral-700 transition-colors">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 bg-[#003461] inline-block" /> 880 Standard 40-Foot
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 bg-[#F59E0B] inline-block" /> 104 Articulated / Shuttles
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 flex items-baseline justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                  School Service
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#003461] font-manrope">
                  165 direct school special trips
                </span>
              </div>
            </div>

            {/* LRT Rail Network & LRV Fleet Stack */}
            <div className="group relative lg:col-span-6 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                    Light Rail Transit (LRT) Network
                  </span>
                  <span className="text-xs font-mono font-bold text-[#003461]">
                    120 Active Light Rail Vehicles
                  </span>
                </div>

                <div className="mt-2 flex items-baseline gap-4 sm:gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={40} suffix=" KM" />
                    </div>
                    <span className="text-[11px] text-neutral-600 font-medium">Total Rail Corridor Length</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-200" />
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={94} />
                    </div>
                    <span className="text-[11px] text-neutral-600 font-medium">High-Floor (Capital / Metro)</span>
                  </div>
                  <div className="w-px h-8 bg-neutral-200" />
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                      <TabularCountNumber value={26} />
                    </div>
                    <span className="text-[11px] text-neutral-600 font-medium">Low-Floor (Valley Line)</span>
                  </div>
                </div>

                {/* LRV Proportional Stack Bar with Interactive Expansion */}
                <div className="mt-4 space-y-1.5 cursor-pointer">
                  <div className="w-full h-3 group-hover:h-3.5 transition-all duration-200 bg-neutral-100 flex overflow-hidden border border-neutral-300 group-hover:border-[#003461]/40">
                    <div 
                      className="h-full bg-[#003461] hover:brightness-110 transition-all duration-200" 
                      style={{ width: '78.33%' }} 
                      title="Capital & Metro High-Floor LRVs: 94 (78.3%)"
                    />
                    <div 
                      className="h-full bg-[#F59E0B] hover:brightness-110 transition-all duration-200" 
                      style={{ width: '21.67%' }} 
                      title="Valley Line Low-Floor LRVs: 26 (21.7%)"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500 group-hover:text-neutral-700 transition-colors">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 bg-[#003461] inline-block" /> 94 High-Floor LRVs (78.3%)
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 bg-[#F59E0B] inline-block" /> 26 Low-Floor LRVs (21.7%)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 flex items-baseline justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                  Corridor Coverage
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#003461] font-manrope">
                  Capital, Metro, and Valley Line Southeast
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              BAND 4: ADAPTIVE MOBILITY, REVENUE & COMMUNITY REACH
             ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12">
            {/* Scheduled In-Service Hours */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Scheduled Service
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={2229047} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                In-service revenue hours delivered across regular and scheduled routes.
              </p>
            </div>

            {/* On-Demand Transit */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  On-Demand Transit
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={732141} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Flexible suburban microtransit rides delivered via 54 dedicated vans.
              </p>
            </div>

            {/* Specialized Transit (DATS) */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Specialized Transit (DATS)
                </span>
                <div className="mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={7106} />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Registered clients supported by 104 accessible dedicated vehicles.
              </p>
            </div>

            {/* Community Partnership (Stuff-A-Bus) */}
            <div className="group relative sm:col-span-1 xl:col-span-3 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[140px] lg:min-h-[150px] transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold block transition-colors group-hover:text-neutral-700">
                  Community Partnership
                </span>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#003461] font-manrope transition-transform duration-200 group-hover:translate-x-0.5">
                    <TabularCountNumber value={26500} suffix=" kg" />
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 font-atkinson mt-2 leading-relaxed">
                Food bank donations collected across Edmonton via Stuff-A-Bus drive.
              </p>
            </div>

            {/* Full-Width Comparative Satisfaction Benchmark */}
            <div className="group relative xl:col-span-12 p-4 sm:p-5 lg:p-6 border-r border-b border-neutral-200 bg-white space-y-4 transition-colors duration-200 hover:bg-[#F8FAFC]">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold transition-colors group-hover:text-neutral-700">
                  Customer Satisfaction Benchmarks
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  City of Edmonton Annual Rider Surveys
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                {/* ETS Transit Satisfaction */}
                <div className="space-y-1.5 cursor-pointer group/bar">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs sm:text-sm font-bold text-[#003461] font-manrope group-hover/bar:text-[#002244] transition-colors">
                      ETS Transit Riders
                    </span>
                    <span className="text-lg sm:text-xl font-black text-[#003461] font-manrope tabular-nums group-hover/bar:scale-[1.02] origin-right transition-transform">
                      71% <span className="text-xs font-normal text-neutral-500">Satisfied</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 group-hover/bar:h-3 transition-all duration-200 bg-neutral-200 border border-neutral-300 group-hover/bar:border-[#003461]/40">
                    <div className="h-full bg-[#003461] group-hover/bar:brightness-110 transition-all duration-200" style={{ width: '71%' }} />
                  </div>
                  <p className="text-[11px] text-neutral-500 font-mono flex items-center justify-between">
                    <span>Regular bus and light rail customer satisfaction index.</span>
                    <span className="opacity-0 group-hover/bar:opacity-100 text-[10px] text-[#F59E0B] font-bold transition-opacity">29% opportunity gap</span>
                  </p>
                </div>

                {/* DATS Accessible Satisfaction */}
                <div className="space-y-1.5 cursor-pointer group/bar">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs sm:text-sm font-bold text-[#003461] font-manrope group-hover/bar:text-[#002244] transition-colors">
                      DATS Riders
                    </span>
                    <span className="text-lg sm:text-xl font-black text-[#003461] font-manrope tabular-nums group-hover/bar:scale-[1.02] origin-right transition-transform">
                      91% <span className="text-xs font-normal text-neutral-500">Satisfied</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 group-hover/bar:h-3 transition-all duration-200 bg-neutral-200 border border-neutral-300 group-hover/bar:border-[#003461]/40">
                    <div className="h-full bg-[#003461] group-hover/bar:brightness-110 transition-all duration-200" style={{ width: '91%' }} />
                  </div>
                  <p className="text-[11px] text-neutral-500 font-mono flex items-center justify-between">
                    <span>Door-to-door accessible client satisfaction index (+20% vs baseline).</span>
                    <span className="opacity-0 group-hover/bar:opacity-100 text-[10px] text-[#F59E0B] font-bold transition-opacity">9% opportunity gap</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}