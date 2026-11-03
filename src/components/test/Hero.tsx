import React, { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import busWrapImg from '../../assets/buswrap-cropped.png';

export type TransitionStyleId = 
  | 'hard-line'
  | 'angled-chamfer'
  | 'soft-gradient'
  | 'halftone-dots'
  | 'chevron-point'
  | 'curved-arch'
  | 'stepped-pixel'
  | 'asymmetric-slant'
  | 'torn-deckle'
  | 'double-cut';

interface TransitionOption {
  id: TransitionStyleId;
  name: string;
  category: string;
  desc: string;
}

const TRANSITION_OPTIONS: TransitionOption[] = [
  {
    id: 'hard-line',
    name: '01 • Hard Editorial Edge',
    category: 'Swiss Clean',
    desc: 'Pure Bauhaus zero-fuss planar split. Crisp architectural line with gold accent rule.',
  },
  {
    id: 'angled-chamfer',
    name: '02 • 45° Transit Chamfer',
    category: 'Architectural Angle',
    desc: 'Precision diagonal cut inspired by transit fleet aerodynamics and rapid corridor striping.',
  },
  {
    id: 'soft-gradient',
    name: '03 • Luminescent Film Fade',
    category: 'Atmospheric',
    desc: 'Linear multi-stop alpha mask blending Indigenous bus livery organically into clean paper white.',
  },
  {
    id: 'halftone-dots',
    name: '04 • Stippled Halftone Screen',
    category: 'Graphic Print',
    desc: 'Swiss newspaper print halftone perforation fading from solid artwork into paper dots.',
  },
  {
    id: 'chevron-point',
    name: '05 • Directional Chevron',
    category: 'Wayfinding',
    desc: 'Subtle downward transit arrowhead pointing directly toward the report title and content.',
  },
  {
    id: 'curved-arch',
    name: '06 • Inverted Architectural Arch',
    category: 'Civic Arch',
    desc: 'Sweeping parabolic vault inspired by modern LRT station canopy architecture.',
  },
  {
    id: 'stepped-pixel',
    name: '07 • Stepped Schedule Matrix',
    category: 'Modular Grid',
    desc: 'Multi-tiered staircase notch reminiscent of transit timetable columns and civic grid zoning.',
  },
  {
    id: 'asymmetric-slant',
    name: '08 • Dynamic Asymmetric Slant',
    category: 'Kinetic Angle',
    desc: 'Long sweeping 6-degree editorial bias creating forward velocity across the horizontal plane.',
  },
  {
    id: 'torn-deckle',
    name: '09 • Micro Sawtooth Perforation',
    category: 'Tactile Print',
    desc: 'Fine architectural ticket tear-off edge recalling transit transfer booklet slips.',
  },
  {
    id: 'double-cut',
    name: '10 • Dual-Offset Chevron Chamfer',
    category: 'Split Facet',
    desc: 'Complementary offset facet creating twin focal lines that guide the eye into central text.',
  },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const textMeasureRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState<number>(56);
  const [activeStyle, setActiveStyle] = useState<TransitionStyleId>('hard-line');

  // Dynamically calculate font size so "EDMONTON TRANSIT SERVICE" fills container width cleanly
  useEffect(() => {
    const calculateFontSize = () => {
      if (!titleContainerRef.current) return;
      const containerWidth = titleContainerRef.current.clientWidth;
      if (containerWidth <= 0) return;

      const targetSize = Math.max(18, Math.min(84, containerWidth / 15.2));
      setFontSize(targetSize);
    };

    calculateFontSize();
    const resizeObserver = new ResizeObserver(calculateFontSize);
    if (titleContainerRef.current) {
      resizeObserver.observe(titleContainerRef.current);
    }
    window.addEventListener('resize', calculateFontSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateFontSize);
    };
  }, []);

  const activeMeta = TRANSITION_OPTIONS.find((t) => t.id === activeStyle) || TRANSITION_OPTIONS[0];

  return (
    <div className="relative flex flex-col w-full h-[calc(100dvh-104px)] mt-[104px] bg-white overflow-hidden select-none font-sans">
      
      {/* 1. Full-Bleed Artwork Billboard - Strictly Dynamic Top Half (48-50% viewport height) */}
      <div className="relative w-full h-[48%] min-h-[220px] overflow-hidden bg-neutral-900 shrink-0">
        
        {/* Dynamic Image Container rendered according to transition style */}
        <div className="relative w-full h-full">
          <img 
            alt="Colorful Indigenous art wrapping an Edmonton Transit Service bus" 
            className="w-full h-full object-cover object-center block" 
            src={busWrapImg}
          />

          {/* Option 1: Hard Editorial Edge */}
          {activeStyle === 'hard-line' && (
            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#F4B223]" />
          )}

          {/* Option 2: 45° Transit Chamfer (Angled Clip) */}
          {activeStyle === 'angled-chamfer' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 60" 
                preserveAspectRatio="none" 
                className="w-full h-10 sm:h-14 block"
              >
                <polygon points="0,60 1440,0 1440,60" className="fill-white" />
                <line x1="0" y1="60" x2="1440" y2="0" stroke="#F4B223" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

          {/* Option 3: Luminescent Multi-Stop Gradient Fade */}
          {activeStyle === 'soft-gradient' && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,1) 100%)'
              }}
            />
          )}

          {/* Option 4: Halftone Dot Screen Perforation */}
          {activeStyle === 'halftone-dots' && (
            <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none overflow-hidden">
              <div 
                className="w-full h-full opacity-90"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 2.2px, transparent 2.2px)`,
                  backgroundSize: '10px 10px',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-4 bg-white" />
            </div>
          )}

          {/* Option 5: Downward Transit Chevron Point */}
          {activeStyle === 'chevron-point' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 60" 
                preserveAspectRatio="none" 
                className="w-full h-10 sm:h-14 block"
              >
                <polygon points="0,0 720,55 1440,0 1440,60 0,60" className="fill-white" />
                <polyline points="0,0 720,55 1440,0" fill="none" stroke="#F4B223" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

          {/* Option 6: Inverted Architectural Arch */}
          {activeStyle === 'curved-arch' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 80" 
                preserveAspectRatio="none" 
                className="w-full h-12 sm:h-16 block"
              >
                <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" className="fill-white" />
                <path d="M0,0 Q720,80 1440,0" fill="none" stroke="#F4B223" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

          {/* Option 7: Stepped Schedule Matrix */}
          {activeStyle === 'stepped-pixel' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 60" 
                preserveAspectRatio="none" 
                className="w-full h-10 sm:h-14 block"
              >
                <polygon points="0,40 288,40 288,20 576,20 576,5 864,5 864,20 1152,20 1152,40 1440,40 1440,60 0,60" className="fill-white" />
                <polyline points="0,40 288,40 288,20 576,20 576,5 864,5 864,20 1152,20 1152,40 1440,40" fill="none" stroke="#F4B223" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

          {/* Option 8: Dynamic Asymmetric Slant */}
          {activeStyle === 'asymmetric-slant' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 70" 
                preserveAspectRatio="none" 
                className="w-full h-11 sm:h-15 block"
              >
                <polygon points="0,20 1440,65 1440,70 0,70" className="fill-white" />
                <line x1="0" y1="20" x2="1440" y2="65" stroke="#F4B223" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

          {/* Option 9: Micro Sawtooth Perforation */}
          {activeStyle === 'torn-deckle' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 30" 
                preserveAspectRatio="none" 
                className="w-full h-6 sm:h-8 block"
              >
                <path d="M0,15 L30,0 L60,15 L90,0 L120,15 L150,0 L180,15 L210,0 L240,15 L270,0 L300,15 L330,0 L360,15 L390,0 L420,15 L450,0 L480,15 L510,0 L540,15 L570,0 L600,15 L630,0 L660,15 L690,0 L720,15 L750,0 L780,15 L810,0 L840,15 L870,0 L900,15 L930,0 L960,15 L990,0 L1020,15 L1050,0 L1080,15 L1110,0 L1140,15 L1170,0 L1200,15 L1230,0 L1260,15 L1290,0 L1320,15 L1350,0 L1380,15 L1410,0 L1440,15 L1440,30 L0,30 Z" className="fill-white" />
                <path d="M0,15 L30,0 L60,15 L90,0 L120,15 L150,0 L180,15 L210,0 L240,15 L270,0 L300,15 L330,0 L360,15 L390,0 L420,15 L450,0 L480,15 L510,0 L540,15 L570,0 L600,15 L630,0 L660,15 L690,0 L720,15 L750,0 L780,15 L810,0 L840,15 L870,0 L900,15 L930,0 L960,15 L990,0 L1020,15 L1050,0 L1080,15 L1110,0 L1140,15 L1170,0 L1200,15 L1230,0 L1260,15 L1290,0 L1320,15 L1350,0 L1380,15 L1410,0 L1440,15" fill="none" stroke="#F4B223" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

          {/* Option 10: Dual-Offset Chevron Chamfer */}
          {activeStyle === 'double-cut' && (
            <div className="absolute inset-x-0 bottom-[-1px] w-full overflow-hidden leading-none pointer-events-none">
              <svg 
                viewBox="0 0 1440 60" 
                preserveAspectRatio="none" 
                className="w-full h-10 sm:h-14 block"
              >
                <polygon points="0,30 480,0 960,45 1440,15 1440,60 0,60" className="fill-white" />
                <polyline points="0,30 480,0 960,45 1440,15" fill="none" stroke="#F4B223" strokeWidth="4" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          )}

        </div>
      </div>

      {/* 2. Minimalist Unenclosed Selection Dots on the Far Right */}
      <aside 
        aria-label="Image Transition Showcase Switcher"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2.5 pointer-events-auto"
      >
        {TRANSITION_OPTIONS.map((opt, idx) => {
          const isActive = opt.id === activeStyle;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveStyle(opt.id)}
              aria-label={opt.name}
              title={`${opt.name} (${opt.desc})`}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            >
              {/* Floating tooltip label appearing to the left on hover */}
              <div className="absolute right-7 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-1 group-hover:translate-x-0 whitespace-nowrap bg-neutral-900 text-white text-[11px] font-manrope font-semibold px-2.5 py-1 rounded shadow-lg">
                <span className="text-[#003461] bg-white font-mono mr-1.5 px-1 py-0.2 rounded text-[10px] font-bold">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                {opt.name.replace(/^\d+ • /, '')}
              </div>

              {/* Clean Dot: Gray when inactive, Edmonton Navy Blue (#003461) when active */}
              <motion.div
                className={`rounded-full transition-all duration-200 ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-[#003461] ring-3 ring-[#003461]/25 scale-110 shadow-sm'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-500 hover:scale-125'
                }`}
                animate={isActive ? { scale: [1, 1.2, 1.1] } : { scale: 1 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          );
        })}
      </aside>

      {/* 3. Main Title Canvas (Dynamically Fitted Edge-to-Edge in Bottom Half) */}
      <div className="relative w-full flex-1 flex flex-col justify-center items-center overflow-hidden min-h-0">
        <div 
          ref={titleContainerRef}
          className="w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-16 my-auto flex flex-col justify-center"
        >
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-start w-full"
          >
            {/* Transit Gold Accent Pip */}
            <div className="w-16 h-1 bg-[#F4B223] mb-4 transition-all duration-300"></div>

            {/* VIS Standard Headline: -10 tracking, leading = pt size (1.0), Prelo / Open Sans */}
            <h1
              ref={textMeasureRef}
              style={{ fontSize: `${fontSize}px` }}
              className="cursor-default font-black uppercase tracking-[-0.025em] leading-[1.0] whitespace-nowrap overflow-hidden text-ellipsis w-full vis-headline relative inline-block select-none"
            >
              <span className="oil-slick-text inline-block">
                Edmonton Transit Service
              </span>
            </h1>

            {/* VIS Standard Subtitle: 50% scale proportion, leading = 1.125, sentence case with complement accent */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-600 vis-title text-base sm:text-xl lg:text-2xl mt-4 font-semibold">
              <span>Annual Service Plan 2025/2026</span>
              <span className="text-neutral-300 font-light">•</span>
              <span className="text-[#005087] font-bold">City Operations</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Bottom Scroll Indicator & Down Arrow Cue */}
      <div className="w-full pb-3 sm:pb-5 pt-1 flex flex-col items-center justify-center shrink-0">
        <a 
          href="#message" 
          className="group flex flex-col items-center gap-1.5 text-neutral-400 hover:text-[#003461] transition-colors focus:outline-none"
          aria-label="Scroll down to Message from the Branch Manager"
        >
          <span className="font-manrope text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-[#003461] transition-colors">
            Scroll down to explore
          </span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-[#F4B223]" />
          </motion.div>
        </a>
      </div>

    </div>
  );
}
