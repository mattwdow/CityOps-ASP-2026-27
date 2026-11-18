import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'motion/react';
import { useMotionPreference } from '../../../context/MotionContext';

interface RollingDigitProps {
  digit: number;
}

function DigitColumn({ digit }: RollingDigitProps) {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    // Each digit is 1em height
    y.set(-digit * 10); // percentage shift: 0 to -90%
  }, [digit, y]);

  return (
    <span className="inline-block h-[1em] overflow-hidden align-baseline leading-none">
      <motion.span
        style={{ y: springY }}
        className="flex flex-col select-none"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1em] flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface RollingNumberProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function RollingNumber({ value, suffix = '', decimals = 0, className = '' }: RollingNumberProps) {
  const osReduced = useReducedMotion();
  const { animationsEnabled } = useMotionPreference();
  const prefersReducedMotion = osReduced || !animationsEnabled;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  const formattedStr = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  if (prefersReducedMotion) {
    return <span className={className}>{formattedStr}{suffix}</span>;
  }

  return (
    <span ref={ref} className={`inline-flex items-baseline ${className}`} aria-label={`${formattedStr}${suffix}`}>
      {isInView ? (
        <>
          {formattedStr.split('').map((char, i) => {
            if (char >= '0' && char <= '9') {
              return <DigitColumn key={i} digit={parseInt(char, 10)} />;
            }
            return <span key={i} className="inline-block">{char}</span>;
          })}
          {suffix && <span className="inline-block ml-0.5">{suffix}</span>}
        </>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}

export default RollingNumber;
