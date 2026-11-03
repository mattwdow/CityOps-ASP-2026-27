import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Lightbulb, ArrowRight } from 'lucide-react';
import routesData from '../../data/route_silhouettes.json';

interface RouteSilhouette {
  id: string;
  short_name: string;
  name: string;
  grade: string;
  stability_class: string;
  length_km: number;
  trips: number;
  coords: [number, number][]; // [lat, lng]
}

// Convert [lat, lng] points to normalized SVG path coordinates
function coordsToSvgPath(coords: [number, number][], width = 500, height = 340, padding = 36): string {
  if (!coords || coords.length < 2) return '';

  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  coords.forEach(([lat, lng]) => {
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  });

  const spanLng = maxLng - minLng || 0.001;
  const spanLat = maxLat - minLat || 0.001;

  // Preserve geographic aspect ratio (Edmonton is ~53.54°N, cos(53.54°) ~ 0.594)
  const latScale = 1.0;
  const lngScale = Math.cos((53.54 * Math.PI) / 180);

  const geoWidth = spanLng * lngScale;
  const geoHeight = spanLat * latScale;

  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  const scale = Math.min(innerW / geoWidth, innerH / geoHeight);
  const offsetX = padding + (innerW - geoWidth * scale) / 2;
  const offsetY = padding + (innerH - geoHeight * scale) / 2;

  const points = coords.map(([lat, lng]) => {
    const x = offsetX + (lng - minLng) * lngScale * scale;
    // Invert Y because latitude goes up, SVG Y goes down
    const y = height - (offsetY + (lat - minLat) * latScale * scale);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  return `M ${points.join(' L ')}`;
}

// Fisher-Yates array shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper to determine route display formatting (LRT vs regular bus) - Pure rectangular badge, no rounded pills
function getRouteMeta(shortName: string) {
  const isLrt = ['Capital', 'Metro', 'Valley'].includes(shortName);
  return {
    isLrt,
    badgeText: isLrt ? 'LRT' : shortName,
    badgeBg: isLrt ? 'bg-amber-400 text-stone-950 font-black' : 'bg-white/10 text-stone-200 font-semibold',
  };
}

export default function RouteGuesser() {
  // 1. Filter out irregular replacement routes (e.g. CapRep / 071) and keep regular bus routes + LRT
  const eligibleRoutes = useMemo(() => {
    return (routesData as RouteSilhouette[]).filter(r => {
      const name = r.name.toLowerCase();
      const shortName = r.short_name.toLowerCase();
      if (name.includes('replacement') || shortName.includes('rep') || r.id === '071') {
        return false;
      }
      return true;
    });
  }, []);

  // Deck of routes shuffled for session play
  const [deck, setDeck] = useState<RouteSilhouette[]>(() => shuffleArray(eligibleRoutes));
  const [deckIndex, setDeckIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Active target route
  const currentRoute = deck[deckIndex % deck.length] || eligibleRoutes[0];

  // Pick 3 random wrong options from all other eligible routes and shuffle choices
  const options = useMemo(() => {
    if (!currentRoute) return [];
    const pool = eligibleRoutes.filter(r => r.id !== currentRoute.id);
    const randomThreeWrong = shuffleArray(pool).slice(0, 3);
    return shuffleArray([currentRoute, ...randomThreeWrong]);
  }, [currentRoute, eligibleRoutes, deckIndex]);

  const svgPath = useMemo(() => {
    return coordsToSvgPath(currentRoute.coords);
  }, [currentRoute]);

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);

    if (optionId === currentRoute.id) {
      setScore(prev => prev + 100 + (streak * 25));
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    setShowHint(false);

    if (deckIndex + 1 >= deck.length) {
      setDeck(shuffleArray(eligibleRoutes));
      setDeckIndex(0);
    } else {
      setDeckIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setDeck(shuffleArray(eligibleRoutes));
    setDeckIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setShowHint(false);
  };

  const isCorrect = selectedOption === currentRoute.id;

  return (
    <section id="route-guesser" className="w-full bg-[#030914] text-stone-100 py-16 px-4 sm:px-8 lg:px-12 select-none font-manrope">
      <div className="w-full max-w-[1240px] mx-auto space-y-10 font-manrope">
        
        {/* Swiss Minimalist Header: Strict Manrope typography, zero pill shapes */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-4 gap-6 font-manrope">
          <div className="space-y-1">
            <div className="flex items-center gap-3 font-manrope">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F4B223] font-bold">
                Edmonton Transit Service
              </span>
              <span className="text-stone-600 text-xs">•</span>
              <span className="text-[11px] text-stone-400 font-medium">
                Route #{deckIndex + 1} of {deck.length}
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-manrope">
              Route Guesser
            </h3>
            <p className="text-sm text-stone-400 font-normal max-w-lg pt-1 font-manrope">
              Identify the Edmonton bus corridor or LRT line by its raw geometry.
            </p>
          </div>

          {/* Minimalist Score & HUD */}
          <div className="flex items-center gap-6 self-start md:self-auto font-manrope text-xs">
            <div className="flex items-baseline gap-2">
              <span className="text-stone-500 uppercase tracking-widest text-[10px] font-semibold">Score</span>
              <span className="text-xl font-bold text-white tracking-tight">{score}</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-stone-500 uppercase tracking-widest text-[10px] font-semibold">Streak</span>
              <span className="text-xl font-bold text-[#F4B223] tracking-tight">{streak}</span>
            </div>

            <button
              onClick={handleReset}
              title="Reset Game"
              className="p-2 text-stone-400 hover:text-white hover:bg-white/5 rounded-none transition-colors cursor-pointer"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Primary Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-manrope">
          
          {/* Visual Display: Pure Geometry Silhouette */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Silhouette Canvas */}
            <div className="relative bg-[#07111e] rounded-none p-6 overflow-hidden min-h-[380px] flex flex-col items-center justify-center transition-all duration-300">
              {/* Subtle Swiss grid points */}
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
                  backgroundSize: '28px 28px'
                }}
              />

              {/* Action Bar inside Silhouette Canvas */}
              <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10 font-manrope">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                  True Geographic Aspect Ratio
                </span>

                {/* Hint Button: Flat Swiss aesthetic, no rounded pill */}
                <button
                  onClick={() => setShowHint(prev => !prev)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                    showHint 
                      ? 'bg-[#F4B223] text-stone-950 font-bold' 
                      : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Lightbulb size={13} className={showHint ? 'text-stone-950' : 'text-[#F4B223]'} />
                  <span>{showHint ? 'Hide Clue' : 'Corridor Clue'}</span>
                </button>
              </div>

              {/* Clue Banner */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-16 left-6 right-6 bg-stone-900/95 p-3 rounded-none text-xs text-stone-200 z-10 font-manrope border-l-2 border-[#F4B223]"
                  >
                    <span className="text-[#F4B223] font-bold uppercase text-[10px] tracking-wider block mb-0.5">
                      Corridor Telemetry:
                    </span>
                    Total length: <strong>{currentRoute.length_km} km</strong> • Scheduled weekday trips: <strong>{currentRoute.trips}</strong>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* SVG Vector Path */}
              <div className="w-full flex items-center justify-center py-6">
                <svg 
                  viewBox="0 0 500 340" 
                  className="w-full max-w-[480px] h-[280px] overflow-visible drop-shadow-[0_0_24px_rgba(244,178,35,0.35)]"
                >
                  <path
                    d={svgPath}
                    fill="none"
                    stroke="#F4B223"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.2"
                  />
                  <path
                    d={svgPath}
                    fill="none"
                    stroke={isAnswered ? (isCorrect ? '#10B981' : '#F4B223') : '#ffffff'}
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors duration-300"
                  />
                </svg>
              </div>

              {/* Bottom Subtle Metadata */}
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[11px] text-stone-400 font-manrope">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-emerald-400/80 animate-pulse" />
                  <span className="font-medium">{currentRoute.length_km} km Corridor</span>
                </div>
                <span className="font-semibold uppercase tracking-wider text-[10px]">North ▲</span>
              </div>
            </div>

          </div>

          {/* Right Column: Multiple Choice Options */}
          <div className="lg:col-span-5 space-y-4 font-manrope">
            <div className="pb-1 font-manrope">
              <span className="text-xs uppercase tracking-[0.2em] text-[#F4B223] font-bold block">
                Select Corridor
              </span>
              <p className="text-xs text-stone-400 mt-0.5 font-medium">
                Which route matches this geometry?
              </p>
            </div>

            {/* 4 Borderless Choice Rows - Square/Zero-pill geometry */}
            <div className="space-y-2">
              {options.map((option) => {
                const isSelected = selectedOption === option.id;
                const isTheCorrectOne = option.id === currentRoute.id;
                const { badgeText, badgeBg } = getRouteMeta(option.short_name);

                let rowBg = 'bg-stone-900/50 hover:bg-[#F4B223]/15 text-stone-200 hover:text-white';
                let icon = null;

                if (isAnswered) {
                  if (isTheCorrectOne) {
                    rowBg = 'bg-emerald-600/25 text-emerald-200 font-bold border-l-2 border-emerald-400';
                    icon = <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />;
                  } else if (isSelected && !isTheCorrectOne) {
                    rowBg = 'bg-rose-950/40 text-rose-300 border-l-2 border-rose-500';
                    icon = <XCircle size={18} className="text-rose-400 shrink-0" />;
                  } else {
                    rowBg = 'bg-stone-950/20 text-stone-600 opacity-40';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-none text-left flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer font-manrope ${rowBg}`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 font-manrope">
                      <span className={`h-8 min-w-[36px] px-2 rounded-none text-xs flex items-center justify-center shrink-0 font-bold ${badgeBg}`}>
                        {badgeText}
                      </span>
                      <span className="text-sm font-semibold tracking-tight truncate">
                        {option.name}
                      </span>
                    </div>
                    {icon}
                  </button>
                );
              })}
            </div>

            {/* Post-Choice Feedback Banner */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-5 rounded-none mt-4 font-manrope ${
                    isCorrect ? 'bg-emerald-950/30 text-emerald-100 border-l-4 border-emerald-400' : 'bg-stone-900/80 text-stone-200 border-l-4 border-[#F4B223]'
                  }`}
                >
                  <div className="flex items-center justify-between font-manrope">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#F4B223]">
                      {isCorrect ? 'Correct Line' : 'Not This Line'}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider">
                      Grade {currentRoute.grade} • {currentRoute.stability_class}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 mt-2 leading-relaxed font-manrope">
                    <strong>{currentRoute.name}</strong> extends {currentRoute.length_km} km across Edmonton with {currentRoute.trips} scheduled weekday trips.
                  </p>

                  <div className="pt-4 mt-4 border-t border-white/10 flex justify-end font-manrope">
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#F4B223] text-stone-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors cursor-pointer font-manrope"
                    >
                      <span>Next Route</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
