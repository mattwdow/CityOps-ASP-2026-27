import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Check, Sparkles, ArrowRight } from 'lucide-react';

interface TripEvent {
  step: number;
  timeStr: string;
  hourVal: number; // For X-axis plotting (07:00 = 7.0, 08:35 = 8.58, etc.)
  label: string;
  nominalFare: number;
  actualCharged: number;
  totalAfter: number;
  isTransfer?: boolean;
  isCapReached?: boolean;
  explanation: string;
}

const TRIP_SEQUENCE: TripEvent[] = [
  {
    step: 1,
    timeStr: '07:30 AM',
    hourVal: 7.5,
    label: 'Morning Bus (Route 008)',
    nominalFare: 3.00,
    actualCharged: 3.00,
    totalAfter: 3.00,
    explanation: 'Initial tap: Standard adult base fare deducted ($3.00). Starts 90-min regional transfer window.'
  },
  {
    step: 2,
    timeStr: '08:15 AM',
    hourVal: 8.25,
    label: 'LRT Transfer (Central Station)',
    nominalFare: 3.00,
    actualCharged: 0.00,
    totalAfter: 3.00,
    isTransfer: true,
    explanation: 'Tap on rail validator: Free transfer ($0.00) within the active 90-minute regional window.'
  },
  {
    step: 3,
    timeStr: '12:30 PM',
    hourVal: 12.5,
    label: 'Midday Errand (Route 004)',
    nominalFare: 3.00,
    actualCharged: 3.00,
    totalAfter: 6.00,
    explanation: 'New journey window: Standard $3.00 fare deducted. Cumulative daily spend reaches $6.00.'
  },
  {
    step: 4,
    timeStr: '05:45 PM',
    hourVal: 17.75,
    label: 'Commute Home (Valley Line LRT)',
    nominalFare: 3.00,
    actualCharged: 3.00,
    totalAfter: 9.00,
    explanation: 'Evening trip: Standard $3.00 fare deducted. Cumulative spend is now $9.00 ($1.25 shy of Daily Cap).'
  },
  {
    step: 5,
    timeStr: '08:30 PM',
    hourVal: 20.5,
    label: 'Evening Activity (Route 002)',
    nominalFare: 3.00,
    actualCharged: 1.25,
    totalAfter: 10.25,
    isCapReached: true,
    explanation: 'Daily Cap reached! Billed only $1.25 to hit the $10.25 ceiling. All remaining travel today is free.'
  },
  {
    step: 6,
    timeStr: '10:45 PM',
    hourVal: 22.75,
    label: 'Night Transit (Late Bus)',
    nominalFare: 3.00,
    actualCharged: 0.00,
    totalAfter: 10.25,
    isCapReached: true,
    explanation: 'Post-Cap Travel: $0.00 charged. Automatic daily capping guarantees you never overpay.'
  }
];

const DAILY_CAP = 10.25;

export default function ArcTapCapGame() {
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [isTapping, setIsTapping] = useState<boolean>(false);
  const [tapRipple, setTapRipple] = useState<boolean>(false);

  const nextTrip = completedSteps < TRIP_SEQUENCE.length ? TRIP_SEQUENCE[completedSteps] : null;
  const lastCompletedTrip = completedSteps > 0 ? TRIP_SEQUENCE[completedSteps - 1] : null;
  const currentTotal = lastCompletedTrip ? lastCompletedTrip.totalAfter : 0;
  const totalNominal = TRIP_SEQUENCE.slice(0, completedSteps).reduce((acc, t) => acc + t.nominalFare, 0);
  const totalSaved = Math.max(0, totalNominal - currentTotal);
  const isFinished = completedSteps >= TRIP_SEQUENCE.length;

  // Active clock time display
  const clockTime = nextTrip ? nextTrip.timeStr : (lastCompletedTrip ? lastCompletedTrip.timeStr : '07:30 AM');

  const handleTap = () => {
    if (isFinished || isTapping) return;

    setIsTapping(true);
    setTapRipple(true);

    setTimeout(() => {
      setCompletedSteps(prev => prev + 1);
      setIsTapping(false);
      setTapRipple(false);
    }, 450);
  };

  const handleReset = () => {
    setCompletedSteps(0);
    setIsTapping(false);
    setTapRipple(false);
  };

  // SVG Chart Geometry Constants
  const chartW = 740;
  const chartH = 280;
  const padLeft = 60;
  const padRight = 40;
  const padTop = 35;
  const padBottom = 45;

  const minHour = 6.0;   // 06:00 AM
  const maxHour = 24.0;  // 12:00 Midnight
  const maxY = 13.0;     // Max dollar axis ($13.00)

  const scaleX = (h: number) => padLeft + ((h - minHour) / (maxHour - minHour)) * (chartW - padLeft - padRight);
  const scaleY = (val: number) => chartH - padBottom - (val / maxY) * (chartH - padTop - padBottom);

  const capY = scaleY(DAILY_CAP);

  // Build step-line path data for all completed trips
  const points: { x: number; y: number }[] = [{ x: scaleX(minHour), y: scaleY(0) }];
  let currentYVal = 0;

  for (let i = 0; i < completedSteps; i++) {
    const trip = TRIP_SEQUENCE[i];
    const prevPoint = points[points.length - 1];
    const tripX = scaleX(trip.hourVal);

    // Step 1: horizontal line from previous point to the trip time
    points.push({ x: tripX, y: prevPoint.y });

    // Step 2: vertical rise to new total
    currentYVal = trip.totalAfter;
    points.push({ x: tripX, y: scaleY(currentYVal) });
  }

  // Extend line to current time / edge if done
  if (completedSteps > 0) {
    const lastX = points[points.length - 1].x;
    points.push({ x: Math.min(scaleX(maxHour), lastX + 35), y: scaleY(currentYVal) });
  }

  const svgPathD = points.length > 1 
    ? points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ')
    : `M ${scaleX(minHour)} ${scaleY(0)} L ${scaleX(7.0)} ${scaleY(0)}`;

  return (
    <section 
      id="arc-tap-game" 
      aria-label="Experience Contactless Fare Capping Step-Graph"
      className="w-full bg-[#FAFAFA] text-neutral-900 py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-neutral-200 select-none font-manrope"
    >
      <div className="w-full max-w-[1400px] mx-auto space-y-8">
        
        {/* Minimal Swiss Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#003461] pb-5 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#003461] bg-[#003461]/10 px-2.5 py-1 rounded mb-2">
              <Sparkles size={13} className="text-[#003461]" />
              Interactive Fare Telemetry
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#003461]">
              Experience Contactless Fare Capping
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl font-atkinson">
              Follow a single commuter across a full transit day. Tap your card or phone to watch cumulative fares automatically cap at <strong>${DAILY_CAP.toFixed(2)}</strong>.
            </p>
          </div>

          {/* Minimalist Stat Counters */}
          <div className="flex items-center gap-6 font-manrope">
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider block">Charged Today</span>
              <span className="text-2xl font-black text-[#003461] tabular-nums">
                ${currentTotal.toFixed(2)}
              </span>
            </div>
            <div className="w-px h-8 bg-neutral-300" />
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider block">Total Saved</span>
              <span className="text-2xl font-black text-emerald-600 tabular-nums">
                ${totalSaved.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleReset}
              className="p-2 text-neutral-400 hover:text-[#003461] hover:bg-neutral-100 rounded transition-colors cursor-pointer ml-2"
              title="Reset Sequence"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* Cockpit: Left Action Bar + Right Cartesian Line Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* =========================================================================
              LEFT COLUMN: Pure Tactile Tap Button + Clock (4 Cols)
             ========================================================================= */}
          <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-xl p-6 shadow-2xs flex flex-col justify-between items-center text-center relative overflow-hidden">
            
            {/* Clock Banner */}
            <div className="w-full pb-4 border-b border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                Transit Clock
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#003461] text-[#F4B223] rounded font-mono text-sm font-bold tracking-wider shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {clockTime}
              </div>
            </div>

            {/* Circular Tap Target Button */}
            <div className="my-8 flex flex-col items-center justify-center">
              <div className="relative">
                {/* Ripple ring animation on tap */}
                {tapRipple && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    animate={{ scale: 1.45, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border-4 border-emerald-500 pointer-events-none"
                  />
                )}

                <button
                  onClick={handleTap}
                  disabled={isFinished || isTapping}
                  aria-label={isFinished ? "Sequence Completed" : `Tap for ${nextTrip?.label || 'trip'}`}
                  className={`w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-200 cursor-pointer select-none focus:outline-none ${
                    isFinished
                      ? 'bg-neutral-100 border-2 border-neutral-300 text-neutral-400 cursor-not-allowed shadow-none'
                      : isTapping
                      ? 'bg-emerald-600 border-4 border-emerald-400 text-white scale-95 shadow-md'
                      : 'bg-[#003461] hover:bg-[#00264d] active:scale-95 border-4 border-[#F4B223] text-white hover:shadow-xl'
                  }`}
                >
                  {isFinished ? (
                    <>
                      <Check size={28} className="text-emerald-600 mb-1" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-600">Complete</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F4B223] mb-2 animate-ping" />
                      <span className="text-2xl font-black uppercase tracking-wider">TAP</span>
                      <span className="text-[10px] font-mono text-neutral-300 tracking-widest mt-0.5">
                        Step {completedSteps + 1} of {TRIP_SEQUENCE.length}
                      </span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs text-neutral-500 font-medium mt-4 max-w-[200px] leading-snug">
                {isFinished 
                  ? "All daily trips validated" 
                  : nextTrip 
                  ? `Ready for ${nextTrip.label}` 
                  : "Tap to simulate validator"}
              </span>
            </div>

            {/* Sequence Explanatory Card */}
            <div className="w-full pt-4 border-t border-neutral-100 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                Event Telemetry
              </span>
              <p className="text-xs text-neutral-700 leading-relaxed min-h-[44px]">
                {lastCompletedTrip ? (
                  <>
                    <strong className="text-[#003461]">{lastCompletedTrip.label}:</strong> {lastCompletedTrip.explanation}
                  </>
                ) : (
                  "Tap the circular button to record the morning commute on Route 008."
                )}
              </p>
            </div>

          </div>


          {/* =========================================================================
              RIGHT COLUMN: Clean Cartesian SVG Step-Graph (8 Cols)
             ========================================================================= */}
          <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-xl p-6 shadow-2xs flex flex-col justify-between">
            
            {/* Graph Header / Legend */}
            <div className="flex flex-wrap items-center justify-between pb-3 border-b border-neutral-100 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#003461] uppercase tracking-wide">
                  Cumulative Fare Trajectory
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-500 font-mono">06:00 to 24:00</span>
              </div>

              <div className="flex items-center gap-4 text-[11px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 bg-[#003461]" />
                  <span className="text-neutral-600">Actual Billed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-0.5 border-t-2 border-dashed border-[#F4B223]" />
                  <span className="text-[#B45309] font-bold">Daily Cap ($10.25)</span>
                </div>
              </div>
            </div>

            {/* Responsive SVG Chart */}
            <div className="w-full overflow-x-auto py-2">
              <svg 
                viewBox={`0 0 ${chartW} ${chartH}`}
                className="w-full h-auto min-w-[580px] overflow-visible"
              >
                {/* Horizontal Grid Lines */}
                {[0, 3, 6, 9, 10.25, 12].map((val) => {
                  const y = scaleY(val);
                  const isCap = val === 10.25;
                  return (
                    <g key={val}>
                      <line
                        x1={padLeft}
                        y1={y}
                        x2={chartW - padRight}
                        y2={y}
                        stroke={isCap ? '#F4B223' : '#E5E7EB'}
                        strokeWidth={isCap ? 1.8 : 1}
                        strokeDasharray={isCap ? '4 3' : undefined}
                      />
                      <text
                        x={padLeft - 8}
                        y={y + 4}
                        textAnchor="end"
                        className={`text-[10px] font-mono ${isCap ? 'fill-[#B45309] font-bold' : 'fill-neutral-400'}`}
                      >
                        ${val.toFixed(2)}
                      </text>
                    </g>
                  );
                })}

                {/* Daily Cap Horizon Banner */}
                <text
                  x={chartW - padRight - 6}
                  y={capY - 6}
                  textAnchor="end"
                  className="text-[10px] font-mono font-bold fill-[#B45309] uppercase tracking-wider"
                >
                  DAILY CAP LIMIT ($10.25)
                </text>

                {/* X-Axis Time Labels */}
                {[
                  { h: 6, label: '06:00' },
                  { h: 9, label: '09:00' },
                  { h: 12, label: '12:00' },
                  { h: 15, label: '15:00' },
                  { h: 18, label: '18:00' },
                  { h: 21, label: '21:00' },
                  { h: 24, label: '24:00' }
                ].map(({ h, label }) => {
                  const x = scaleX(h);
                  return (
                    <g key={h}>
                      <line
                        x1={x}
                        y1={chartH - padBottom}
                        x2={x}
                        y2={chartH - padBottom + 5}
                        stroke="#9CA3AF"
                        strokeWidth={1}
                      />
                      <text
                        x={x}
                        y={chartH - padBottom + 18}
                        textAnchor="middle"
                        className="text-[10px] font-mono fill-neutral-400"
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}

                {/* Area Fill Below Step Curve */}
                {completedSteps > 0 && (
                  <path
                    d={`${svgPathD} L ${points[points.length - 1].x} ${scaleY(0)} L ${scaleX(minHour)} ${scaleY(0)} Z`}
                    fill="url(#blueGradient)"
                    opacity="0.12"
                  />
                )}

                {/* SVG Gradient Definition */}
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#003461" />
                    <stop offset="100%" stopColor="#003461" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Active Step-Line */}
                <path
                  d={svgPathD}
                  fill="none"
                  stroke="#003461"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Plotted Trip Nodes */}
                {TRIP_SEQUENCE.slice(0, completedSteps).map((t, idx) => {
                  const cx = scaleX(t.hourVal);
                  const cy = scaleY(t.totalAfter);
                  const isCap = t.isCapReached;
                  const isTrans = t.isTransfer;

                  return (
                    <g key={t.step}>
                      {/* Outer pulse for active node */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={idx === completedSteps - 1 ? 9 : 6}
                        fill={isCap ? '#F4B223' : isTrans ? '#10B981' : '#003461'}
                        opacity={idx === completedSteps - 1 ? 0.35 : 0.2}
                      />
                      <circle
                        cx={cx}
                        cy={cy}
                        r={5}
                        fill={isCap ? '#F4B223' : isTrans ? '#10B981' : '#003461'}
                        stroke="#FFFFFF"
                        strokeWidth={2}
                      />
                      {/* Price callout above node */}
                      <text
                        x={cx}
                        y={cy - 10}
                        textAnchor="middle"
                        className={`text-[10px] font-mono font-bold ${
                          isCap ? 'fill-[#B45309]' : isTrans ? 'fill-emerald-600' : 'fill-[#003461]'
                        }`}
                      >
                        {isTrans ? 'FREE' : `+$${t.actualCharged.toFixed(2)}`}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Sequence Breadcrumb Track */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span className="font-bold text-[#003461] uppercase tracking-wider">
                Progress: {completedSteps} / {TRIP_SEQUENCE.length} Events Validated
              </span>
              <span>
                {currentTotal >= DAILY_CAP 
                  ? '⭐ Daily Cap Horizon Achieved' 
                  : `$${(DAILY_CAP - currentTotal).toFixed(2)} until rides become free`}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
