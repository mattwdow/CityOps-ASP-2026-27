import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react';
import { useMotionPreference } from '../../context/MotionContext';

export default function Nav() {
  const prefersReducedMotion = useReducedMotion();
  const { animationsEnabled, toggleAnimations } = useMotionPreference();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const trainPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const clipPath = useMotionTemplate`inset(0 calc(100% - ${useTransform(scrollYProgress, [0, 1], [0, 100])}%) 0 0)`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldDisableMotion = prefersReducedMotion || !animationsEnabled;

  return (
    <nav className={`fixed top-12 left-0 w-full z-50 transition-colors duration-200 px-4 sm:px-8 py-3 ${scrolled ? 'bg-[#003461] shadow-md' : 'bg-[#003461]'}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mx-auto gap-2 lg:gap-8">
        <div className="vis-font-sans text-xs font-bold tracking-widest uppercase text-white whitespace-nowrap">
          ETS Annual Service Plan 2025/2026
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-4 lg:gap-6 gap-y-1 vis-font-sans text-xs uppercase tracking-wider text-white/80">
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#message">Message</a>
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#objectives">Objectives</a>
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#impact">By The Numbers</a>
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#results">Results 2025</a>
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#highlights">Highlights</a>
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#route-report-card">Report Card</a>
          <a className="hover:text-white hover:underline transition-colors whitespace-nowrap" href="#service-plan">Service Plan 2026</a>

          {/* Accessible Animation Toggle Button: Circular 'A' */}
          <button
            onClick={toggleAnimations}
            type="button"
            className={`w-5 h-5 rounded-none flex items-center justify-center text-[10px] font-sans font-bold transition-colors shrink-0 cursor-pointer ${
              animationsEnabled
                ? 'bg-white/20 text-white hover:bg-white/30'
                : 'bg-[#F4B223] text-[#003461]'
            }`}
            title={animationsEnabled ? 'Accessibility: Click to turn off animations' : 'Accessibility: Click to turn on animations'}
            aria-label={animationsEnabled ? 'Turn off page animations' : 'Turn on page animations'}
            aria-pressed={!animationsEnabled}
          >
            A
          </button>
        </div>
      </div>
      
      {/* Swiss Minimalist Hairline Progress Line */}
      {shouldDisableMotion ? null : (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[#F4B223]"
            style={{ clipPath }}
          />
        </div>
      )}
    </nav>
  );
}
