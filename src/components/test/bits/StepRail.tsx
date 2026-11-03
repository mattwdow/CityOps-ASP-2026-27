import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface StepRailProps {
  totalSteps?: number;
  activeStep?: number;
  className?: string;
}

export function StepRail({ totalSteps = 4, className = '' }: StepRailProps) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <div className={`relative flex flex-col items-center h-full ${className}`}>
      {/* Background Track */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-neutral-200" />

      {/* Active Line */}
      <motion.div
        className="absolute top-0 w-[2px] bg-[#F4B223] origin-top"
        style={{ scaleY, height: '100%' }}
      />

      {/* Node Indicators */}
      <div className="relative z-10 flex flex-col justify-between h-full py-2">
        {[...Array(totalSteps)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-white border-2 border-[#003461] transition-transform duration-300 hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
}

export default StepRail;
