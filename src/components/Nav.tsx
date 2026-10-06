import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react';
import { TrainFront } from 'lucide-react';

export default function Nav() {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const trainPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Create a clip path that reveals from left to right
  const clipPath = useMotionTemplate`inset(0 calc(100% - ${useTransform(scrollYProgress, [0, 1], [0, 100])}%) 0 0)`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-center px-2 md:px-8 min-h-16 py-2 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-md border-b-0' : 'bg-primary border-b border-white/20'}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mx-auto gap-2 lg:gap-8">
        <div className="text-[clamp(10px,2vw,16px)] font-bold tracking-wider uppercase text-white whitespace-nowrap flex-shrink-0 text-center">
          ETS Annual Service Plan 25/26
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-2 md:gap-x-4 lg:gap-6 gap-y-1 font-['Inter'] tracking-tight font-light text-[clamp(8px,1.2vw,13px)]">
          <a className="text-white/80 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded" href="#message">Message From The Branch Manager</a>
          <a className="text-white/80 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded" href="#objectives">Branch Objectives</a>
          <a className="text-white/80 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded" href="#impact">Branch By The Numbers</a>
          <a className="text-white/80 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded" href="#results">Results From 2025</a>
          <a className="text-white/80 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded" href="#highlights">Highlights From 2025</a>
          <a className="text-white/80 hover:text-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded" href="#service-plan">Service Plan 2026</a>
        </div>
      </div>
      
      {/* Transit Line Progress Indicator */}
      {prefersReducedMotion ? null : (
        <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-surface-variant/80 border-b border-outline/20">
          {/* Unfilled Station Dots */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-[10%] xl:px-[20%] z-0">
            {[...Array(6)].map((_, i) => (
              <div key={`empty-${i}`} className="w-2.5 h-2.5 rounded-full bg-white border-2 border-surface-variant/80 shadow-sm" />
            ))}
          </div>
          
          {/* Active Line & Filled Dots Overlay */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full z-10"
            style={{ clipPath }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#00A1E4]" />
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-[10%] xl:px-[20%]">
              {[...Array(6)].map((_, i) => (
                <div key={`filled-${i}`} className="w-2.5 h-2.5 rounded-full bg-[#00A1E4] border-2 border-white shadow-sm" />
              ))}
            </div>
          </motion.div>
          
          {/* Moving Train */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white rounded-full p-0.5 shadow-md border-2 border-[#00A1E4]"
            style={{ left: trainPosition }}
          >
            <TrainFront size={14} className="text-[#00A1E4]" />
          </motion.div>
        </div>
      )}
    </nav>
  );
}
