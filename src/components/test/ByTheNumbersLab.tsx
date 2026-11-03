import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { 
  Bus, Train, CreditCard, Clock, 
  MapPin, Calendar, ShoppingBag, Truck, Navigation,
  ShieldCheck, Users
} from 'lucide-react';

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
  const prefersReduced = useReducedMotion();
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

function FlutterNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const prefersReduced = useReducedMotion();
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

export default function ByTheNumbersLab() {
  return (
    <section 
      id="branch-by-the-numbers-archive" 
      aria-label="Branch by the Numbers: Comparative Reference Layout"
      className="relative w-full bg-[#FAFAFA] text-neutral-900 py-16 px-4 sm:px-8 lg:px-12 border-b border-neutral-200 select-none font-manrope"
    >
      <div className="w-full max-w-[1520px] mx-auto space-y-6">
        
        {/* Minimal Archive Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 border-b border-neutral-200 gap-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
              Comparative Design Sandbox Archive
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#003461]">
              Branch By The Numbers: Version 1 Layout
            </h3>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            Reference Baseline (Previous Configuration)
          </span>
        </div>

        {/* 3-Column Compact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-start opacity-90">
          
          {/* COLUMN 1 */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-[#003461] text-white p-5 rounded-lg shadow-sm flex flex-col justify-between min-h-[145px]">
                <div className="flex items-center justify-between text-neutral-300 text-xs font-mono">
                  <span className="uppercase tracking-wider font-semibold text-white/90">Total Ridership</span>
                  <div className="flex items-center gap-1.5 text-[#F4B223]">
                    <Bus size={15} />
                    <Train size={15} />
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-white font-manrope">
                    <CountUpNumber value={61.8} suffix="M" decimals={1} />
                  </div>
                  <p className="text-[12px] text-neutral-200 mt-1 font-atkinson leading-snug">
                    Total bus and LRT completed trips
                  </p>
                </div>
              </div>

              <div className="bg-[#F0F5FA] border border-[#D0E0EE] p-5 rounded-lg shadow-2xs flex flex-col justify-between min-h-[145px]">
                <div className="flex items-center justify-between text-[#003461] text-xs font-mono">
                  <span className="uppercase tracking-wider font-bold">DATS Trips</span>
                  <span className="text-[10px] font-mono font-bold bg-[#F4B223]/25 text-[#003461] px-1 py-0.5 rounded">DATS</span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#003461] font-manrope">
                    <CountUpNumber value={996556} />
                  </div>
                  <p className="text-[12px] text-neutral-600 mt-1 font-atkinson leading-snug">
                    Specialized transit door-to-door trips
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-2xs flex flex-col justify-between min-h-[125px]">
                <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[#003461]">Active Arc Cards</span>
                  <CreditCard size={15} className="text-[#004B87]" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={2819060} />
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-atkinson">
                    Regional electronic fare accounts
                  </p>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-2xs flex flex-col justify-between min-h-[125px]">
                <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[#003461]">Fare Assistance</span>
                  <span className="text-[10px] font-mono font-bold bg-[#F4B223]/20 text-[#003461] px-1.5 py-0.5 rounded">
                    PASS
                  </span>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={240044} />
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-atkinson">
                    Subsidized monthly passes delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-[#FFFDF5] border border-[#F4E6B5] p-4 rounded-lg shadow-2xs flex flex-col justify-between min-h-[125px]">
                <div className="flex items-center justify-between text-neutral-700 text-xs font-mono">
                  <span className="font-bold uppercase tracking-wider text-[#003461]">Food Collected</span>
                  <ShoppingBag size={15} className="text-[#EA580C]" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={26500} suffix=" kg" />
                  </div>
                  <p className="text-[11px] text-neutral-600 mt-0.5 font-atkinson">
                    Stuff a Bus community donations
                  </p>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-2xs flex flex-col justify-between min-h-[125px]">
                <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[#003461]">On Demand Trips</span>
                  <Truck size={15} className="text-[#004B87]" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={732141} />
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-atkinson">
                    Microtransit on-demand completed rides
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              <div className="sm:col-span-5 bg-white border border-neutral-200 p-4 rounded-lg flex flex-col justify-between min-h-[120px]">
                <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <span className="font-semibold uppercase tracking-wider text-[#003461]">In-Service Hours</span>
                  <Clock size={15} className="text-[#F4B223]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={2229047} />
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5 font-atkinson">
                    Revenue transit operations
                  </p>
                </div>
              </div>

              <div className="sm:col-span-7 grid grid-cols-2 gap-2">
                <div className="bg-[#003461] text-white p-3.5 rounded-lg flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                    ETS Riders
                  </span>
                  <div>
                    <div className="text-3xl font-black text-[#F4B223] font-manrope leading-none">
                      <CountUpNumber value={71} suffix="%" />
                    </div>
                    <span className="text-[10px] text-white/80 font-manrope block mt-1">
                      Satisfied
                    </span>
                  </div>
                </div>

                <div className="bg-[#003461] text-white p-3.5 rounded-lg flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                    DATS Riders
                  </span>
                  <div>
                    <div className="text-3xl font-black text-[#F4B223] font-manrope leading-none">
                      <CountUpNumber value={91} suffix="%" />
                    </div>
                    <span className="text-[10px] text-white/80 font-manrope block mt-1">
                      Satisfied
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-2xs flex flex-col divide-y divide-neutral-100">
              <div className="pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                  <Calendar size={14} className="text-[#003461]" />
                  <span className="uppercase tracking-wider font-semibold">Civic Heritage</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <FlutterNumber value="117" />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">years of service</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-atkinson mt-0.5">
                  Continuous municipal operations since 1908
                </p>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                  <Users size={14} className="text-[#003461]" />
                  <span className="uppercase tracking-wider font-semibold">Dedicated Workforce</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={1861} />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">Operator FTEs</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-atkinson mt-0.5">
                  Frontline bus & rail transit professionals
                </p>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                  <MapPin size={14} className="text-[#F4B223]" />
                  <span className="uppercase tracking-wider font-semibold">Citywide Reach</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={5266} />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">bus stops</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-atkinson mt-0.5">
                  Within 5 min walk of 90%+ of residents
                </p>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                  <ShieldCheck size={14} className="text-[#003461]" />
                  <span className="uppercase tracking-wider font-semibold">Bus Shelters</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-black text-[#003461] font-manrope tracking-tight">
                    <CountUpNumber value={2385} />
                  </div>
                  <span className="text-xs text-neutral-600 font-medium">bus shelters</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-atkinson mt-0.5">
                  Lit and weather-protected waiting points
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-3">
                <div className="bg-[#F0F5FA] p-3 rounded text-center">
                  <div className="text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="24" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600 block mt-0.5">
                    Transit Centres
                  </span>
                </div>
                <div className="bg-[#F0F5FA] p-3 rounded text-center">
                  <div className="text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="29" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600 block mt-0.5">
                    LRT Stations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#003461] text-white p-4 rounded-lg flex flex-col justify-between min-h-[115px]">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
                    <span className="uppercase tracking-wider font-semibold">Total Fleet</span>
                    <Bus size={15} className="text-[#F4B223]" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-manrope tracking-tight">
                      <CountUpNumber value={984} />
                    </div>
                    <span className="text-[10px] text-neutral-300 block font-atkinson mt-0.5">
                      Active buses in service
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 p-4 rounded-lg flex flex-col justify-between min-h-[115px]">
                  <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                    <span className="uppercase tracking-wider font-semibold text-[#003461]">Regular Routes</span>
                    <Navigation size={14} className="text-neutral-400" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#003461] font-manrope tracking-tight">
                      <FlutterNumber value="118" />
                    </div>
                    <span className="text-[10px] text-neutral-500 block font-atkinson mt-0.5">
                      Scheduled lines
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 p-4 rounded-lg flex flex-col justify-between min-h-[115px]">
                  <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                    <span className="uppercase tracking-wider font-semibold text-[#003461]">School Special</span>
                    <Users size={14} className="text-neutral-400" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#003461] font-manrope tracking-tight">
                      <FlutterNumber value="165" />
                    </div>
                    <span className="text-[10px] text-neutral-500 block font-atkinson mt-0.5">
                      Direct school runs
                    </span>
                  </div>
                </div>

                <div className="bg-[#F0F5FA] border border-[#D0E0EE] p-4 rounded-lg flex flex-col justify-between min-h-[115px]">
                  <div className="flex items-center justify-between text-[#003461] text-xs font-mono">
                    <span className="uppercase tracking-wider font-bold">40-Foot Buses</span>
                    <Bus size={14} className="text-[#004B87]" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#003461] font-manrope tracking-tight">
                      <CountUpNumber value={880} />
                    </div>
                    <span className="text-[10px] text-neutral-600 block font-atkinson mt-0.5">
                      Core transit fleet
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-white border border-neutral-200 p-3.5 rounded-lg flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Track Length
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                    <CountUpNumber value={40} suffix=" KM" />
                  </div>
                  <span className="text-[9px] text-neutral-400 block mt-0.5">Total corridor</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-3.5 rounded-lg flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Cap/Metro
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="94" />
                  </div>
                  <span className="text-[9px] text-neutral-400 block mt-0.5">High-floor cars</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-3.5 rounded-lg flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Valley Line
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="26" />
                  </div>
                  <span className="text-[9px] text-neutral-400 block mt-0.5">Low-floor LRVs</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div className="bg-[#FFFDF5] border border-[#F4E6B5] p-3.5 rounded-lg flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#003461]">
                  DATS Clients
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                    <CountUpNumber value={7106} />
                  </div>
                  <span className="text-[9px] text-neutral-500 block mt-0.5">Active registrants</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-3.5 rounded-lg flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Shuttles
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="54" />
                  </div>
                  <span className="text-[9px] text-neutral-400 block mt-0.5">On demand vans</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200 p-3.5 rounded-lg flex flex-col justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                  DATS Fleet
                </span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#003461] font-manrope">
                    <FlutterNumber value="104" />
                  </div>
                  <span className="text-[9px] text-neutral-400 block mt-0.5">Accessible units</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
