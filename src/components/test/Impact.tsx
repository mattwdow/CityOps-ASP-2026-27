import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useMotionPreference } from '../../context/MotionContext';

// Reusable Animated Odometer / Roll Number
function CountUpNumber({ 
  value, 
  suffix = '', 
  decimals = 0, 
  duration = 1.8 
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
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  const finalStr = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  useEffect(() => {
    if (!isInView || prefersReduced || !ref.current) return;

    let start = 0;
    const startTime = performance.now();
    const durMs = duration * 1000;

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durMs, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = start + (value - start) * ease;

      if (ref.current) {
        ref.current.textContent = current.toLocaleString('en-US', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        });
      }

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else if (ref.current) {
        ref.current.textContent = finalStr;
      }
    };

    requestAnimationFrame(frame);
  }, [isInView, prefersReduced, value, decimals, duration, finalStr]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>{prefersReduced ? finalStr : '0'}</span>
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  );
}

// Subtle Flutter Digit for discrete counts
function FlutterNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const osReduced = useReducedMotion();
  const { animationsEnabled } = useMotionPreference();
  const prefersReduced = osReduced || !animationsEnabled;
  const [display, setDisplay] = useState(prefersReduced ? value : '---');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || prefersReduced) {
      setDisplay(value);
      return;
    }

    let iterations = 0;
    const maxIterations = 8;
    const interval = setInterval(() => {
      if (iterations >= maxIterations) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        const scrambled = value.split('').map(ch => {
          if (ch === ',' || ch === '.' || ch === ' ') return ch;
          return Math.floor(Math.random() * 10).toString();
        }).join('');
        setDisplay(scrambled);
        iterations++;
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isInView, prefersReduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

// Radial Progress Dial for Customer Satisfaction (Clean Swiss Light Theme - Unrounded)
function RadialSatisfactionDialLight({ percentage, label, sublabel }: { percentage: number; label: string; sublabel: string }) {
  const osReduced = useReducedMotion();
  const { animationsEnabled } = useMotionPreference();
  const prefersReduced = osReduced || !animationsEnabled;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="flex items-center gap-3 bg-white p-3.5 border border-neutral-300">
      <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 66 66">
          <circle
            cx="33"
            cy="33"
            r={radius}
            className="text-neutral-200 stroke-current"
            strokeWidth="5"
            fill="transparent"
          />
          <motion.circle
            cx="33"
            cy="33"
            r={radius}
            className="text-[#003461] stroke-current"
            strokeWidth="5"
            strokeLinecap="butt"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: circumference * (1 - percentage / 100) } : {}}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <span className="absolute font-manrope font-black text-xs text-[#003461]">
          {percentage}%
        </span>
      </div>
      <div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block font-bold">
          {label}
        </span>
        <span className="text-xs font-bold text-neutral-800 block mt-0.5">
          {sublabel}
        </span>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section 
      id="impact" 
      aria-label="Branch by the Numbers: 2025 Year in Review"
      className="relative w-full bg-white text-neutral-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-neutral-200 select-none overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1520px] mx-auto space-y-10">
        
        {/* Anti-AI Clean Top Banner */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-2 border-[#003461]">
          <div>
            <div className="w-12 h-1 bg-[#F4B223] mb-3"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#003461] font-manrope">
              Branch By The Numbers: 2025 Year In Review
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest sm:text-right shrink-0">
            City of Edmonton • City Operations
          </div>
        </div>

        {/* 3-Column Bento Grid: Non-rounded, Swiss structured layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ========================================================
              COLUMN 1: 2025 Year In Review (Cols 1-5)
             ======================================================== */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-[#003461] uppercase tracking-tight font-manrope">
                2025 Year in Review
              </h3>
              <div className="h-0.5 flex-1 bg-neutral-200" />
            </div>

            {/* Top Row: Hero 61.8M Dark Monolith + DATS Light Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 61.8M Ridership Monolith - Non-rounded Dark Navy Box */}
              <div className="bg-[#003461] text-white p-6 border-t-4 border-[#F4B223] flex flex-col justify-between min-h-[175px]">
                <div>
                  <span className="uppercase tracking-widest text-[11px] font-mono font-bold text-[#F4B223] block">
                    Total Ridership
                  </span>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-white font-manrope">
                    <CountUpNumber value={61.8} suffix="M" decimals={1} />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[12px] text-neutral-200 font-atkinson">Completed bus and LRT journeys</span>
                    <span className="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 border border-emerald-400/30">+0.2M YoY</span>
                  </div>
                </div>
              </div>

              {/* 996,556 DATS Specialized - Non-rounded Crisp White Box */}
              <div className="bg-white border border-neutral-300 p-6 flex flex-col justify-between min-h-[175px]">
                <div>
                  <span className="uppercase tracking-widest text-[11px] font-mono font-bold text-[#003461] block">
                    DATS Trips
                  </span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#003461] font-manrope">
                    <CountUpNumber value={996556} />
                  </div>
                  <p className="text-[12px] text-neutral-600 mt-2 font-atkinson">
                    Door-to-door accessible trips delivered
                  </p>
                </div>
              </div>

            </div>

            {/* Row 2: Contactless Arc + Subsidized Passes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Active Arc Cards - Crisp White Non-rounded */}
              <div className="bg-white border border-neutral-300 p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#003461] text-xs font-mono block">
                    Active Arc Cards
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={2819060} />
                  </div>
                  <p className="text-[12px] text-neutral-500 mt-1 font-atkinson">
                    Regional smart cards and tap accounts
                  </p>
                </div>
              </div>

              {/* Fare Assistance Subsidized Passes - Crisp White Non-rounded */}
              <div className="bg-white border border-neutral-300 p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#003461] text-xs font-mono block">
                    Fare Assistance
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={240044} />
                  </div>
                  <p className="text-[12px] text-neutral-500 mt-1 font-atkinson">
                    Subsidized monthly passes delivered
                  </p>
                </div>
              </div>

            </div>

            {/* Row 3: Stuff A Bus Drive + On Demand Trips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Food Collected (Stuff a Bus) - Dark Solid Accent Box */}
              <div className="bg-[#002244] text-white p-5 border-l-4 border-[#F4B223] flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#F4B223] text-xs font-mono block">
                    Stuff a Bus Drive
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-white font-manrope tracking-tight">
                    <CountUpNumber value={26500} suffix=" kg" />
                  </div>
                  <p className="text-[12px] text-neutral-300 mt-1 font-atkinson">
                    Community food bank donations
                  </p>
                </div>
              </div>

              {/* On Demand Transit Completed Trips - Crisp White Non-rounded */}
              <div className="bg-white border border-neutral-300 p-5 flex flex-col justify-between min-h-[140px]">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#003461] text-xs font-mono block">
                    On Demand Trips
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={732141} />
                  </div>
                  <p className="text-[12px] text-neutral-500 mt-1 font-atkinson">
                    Flexible suburban microtransit rides
                  </p>
                </div>
              </div>

            </div>

            {/* Row 4: In-Service Hours + Radial Satisfaction Dials */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              
              {/* In-service hours */}
              <div className="sm:col-span-5 bg-white border border-neutral-300 p-5 flex flex-col justify-between min-h-[135px]">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#003461] text-xs font-mono block">
                    In-Service Hours
                  </span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={2229047} />
                  </div>
                  <p className="text-[12px] text-neutral-500 mt-1 font-atkinson">
                    Scheduled revenue transit service
                  </p>
                </div>
              </div>

              {/* Dual Radial Satisfaction Progress Dials */}
              <div className="sm:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RadialSatisfactionDialLight percentage={71} label="ETS RIDERS" sublabel="Satisfied" />
                <RadialSatisfactionDialLight percentage={91} label="DATS RIDERS" sublabel="Satisfied" />
              </div>

            </div>

          </div>


          {/* ========================================================
              COLUMN 2: Network Overview (Cols 6-8)
              "Civic Heritage" removed as requested
             ======================================================== */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-[#003461] uppercase tracking-tight font-manrope">
                Network Overview
              </h3>
              <div className="h-0.5 flex-1 bg-neutral-200" />
            </div>

            {/* Light Monolithic Card with crisp dividers - Square non-rounded */}
            <div className="bg-white border border-neutral-300 p-6 flex flex-col divide-y divide-neutral-200">
              
              {/* 1,861 Operator FTEs */}
              <div className="pb-5">
                <span className="uppercase tracking-wider font-bold text-[#003461] text-xs font-mono block mb-1">
                  Operator Workforce
                </span>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={1861} />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">Operator FTEs</span>
                </div>
                <p className="text-[12px] text-neutral-500 font-atkinson mt-1">
                  Frontline bus and rail transit professionals
                </p>
              </div>

              {/* 5,266 Bus Stops */}
              <div className="py-5">
                <span className="uppercase tracking-wider font-bold text-[#003461] text-xs font-mono block mb-1">
                  Citywide Stops
                </span>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={5266} />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">bus stops</span>
                </div>
                <p className="text-[12px] text-neutral-500 font-atkinson mt-1">
                  Within a 5-minute walk of over 90% of residents
                </p>
              </div>

              {/* 2,385 Bus Shelters */}
              <div className="py-5">
                <span className="uppercase tracking-wider font-bold text-[#003461] text-xs font-mono block mb-1">
                  Bus Shelters
                </span>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={2385} />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">bus shelters</span>
                </div>
                <p className="text-[12px] text-neutral-500 font-atkinson mt-1">
                  Lit and weather-protected waiting environments
                </p>
              </div>

              {/* Paired Transit Centres & LRT Stations - Clean square boxes */}
              <div className="pt-5 grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 border border-neutral-300 p-3.5 text-center">
                  <div className="text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="24" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 block mt-1">
                    Transit Centres
                  </span>
                </div>
                <div className="bg-neutral-50 border border-neutral-300 p-3.5 text-center">
                  <div className="text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="29" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-700 block mt-1">
                    LRT Stations
                  </span>
                </div>
              </div>

            </div>
          </div>


          {/* ========================================================
              COLUMN 3: Fleet & Specialized Assets (Cols 9-12)
             ======================================================== */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
            
            {/* Bus Service Sub-Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-[#003461] uppercase tracking-tight font-manrope">
                  Bus Service
                </h3>
                <div className="h-0.5 flex-1 bg-neutral-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* 984 Total Fleet Monolith - Dark Navy Square */}
                <div className="bg-[#003461] text-white p-4 border-l-4 border-[#F4B223] flex flex-col justify-between min-h-[125px]">
                  <div>
                    <span className="uppercase tracking-wider font-bold text-[#F4B223] text-xs font-mono block">
                      Total Fleet
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-manrope tracking-tight">
                      <CountUpNumber value={984} />
                    </div>
                    <span className="text-[11px] text-neutral-200 block font-atkinson mt-1">
                      Buses in active service
                    </span>
                  </div>
                </div>

                {/* 118 Regular Routes - White Square */}
                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between min-h-[125px]">
                  <div>
                    <span className="uppercase tracking-wider font-bold text-[#003461] text-xs font-mono block">
                      Regular Routes
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#003461] font-manrope tracking-tight">
                      <FlutterNumber value="118" />
                    </div>
                    <span className="text-[11px] text-neutral-500 block font-atkinson mt-1">
                      Scheduled route corridors
                    </span>
                  </div>
                </div>

                {/* 165 School Specials - White Square */}
                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between min-h-[125px]">
                  <div>
                    <span className="uppercase tracking-wider font-bold text-[#003461] text-xs font-mono block">
                      School Special
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#003461] font-manrope tracking-tight">
                      <FlutterNumber value="165" />
                    </div>
                    <span className="text-[11px] text-neutral-500 block font-atkinson mt-1">
                      Direct school trips
                    </span>
                  </div>
                </div>

                {/* 880 40-foot Core Buses - White Square */}
                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between min-h-[125px]">
                  <div>
                    <span className="uppercase tracking-wider font-bold text-[#003461] text-xs font-mono block">
                      40-Foot Buses
                    </span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#003461] font-manrope tracking-tight">
                      <CountUpNumber value={880} />
                    </div>
                    <span className="text-[11px] text-neutral-500 block font-atkinson mt-1">
                      Standard accessible transit fleet
                    </span>
                  </div>
                </div>
              </div>

              {/* Inline Fleet Proportion Sparkline - Non-rounded */}
              <div className="bg-neutral-50 border border-neutral-300 p-3 flex flex-col gap-2 mt-1">
                <div className="flex justify-between text-[11px] font-mono text-neutral-600">
                  <span className="font-bold text-[#003461]">40-Foot Fleet: 89.4% (880 / 984)</span>
                  <span className="text-neutral-500 font-semibold">104 Articulated & Shuttles</span>
                </div>
                <div className="w-full h-2.5 bg-neutral-200 overflow-hidden flex">
                  <div className="h-full bg-[#003461]" style={{ width: '89.4%' }} />
                  <div className="h-full bg-[#F4B223]" style={{ width: '10.6%' }} />
                </div>
              </div>
            </div>

            {/* LRT Service Sub-Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-[#003461] uppercase tracking-tight font-manrope">
                  LRT Service
                </h3>
                <div className="h-0.5 flex-1 bg-neutral-200" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Track Length
                  </span>
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                      <CountUpNumber value={40} suffix=" KM" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">Total corridor</span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Cap/Metro
                  </span>
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                      <FlutterNumber value="94" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">High-floor cars</span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Valley Line
                  </span>
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                      <FlutterNumber value="26" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">Low-floor LRVs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* On Demand & DATS Sub-Section */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-[#003461] uppercase tracking-tight font-manrope">
                  On Demand & DATS
                </h3>
                <div className="h-0.5 flex-1 bg-neutral-200" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#003461] text-white p-4 border-t-2 border-[#F4B223] flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F4B223] block">
                    DATS Clients
                  </span>
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-black text-white font-manrope">
                      <CountUpNumber value={7106} />
                    </div>
                    <span className="text-[10px] text-neutral-200 block mt-0.5">Registered riders</span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    Shuttles
                  </span>
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                      <FlutterNumber value="54" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">On demand vans</span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-300 p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block">
                    DATS Fleet
                  </span>
                  <div className="mt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                      <FlutterNumber value="104" />
                    </div>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">Accessible vehicles</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
