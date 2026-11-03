import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SplitFlapProps {
  text: string;
  className?: string;
  textColor?: string;
  bgColor?: string;
}

export function SplitFlap({
  text,
  className = '',
  textColor = 'text-[#F4B223]',
  bgColor = 'bg-[#00213d]',
}: SplitFlapProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -.';

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayChars(text.toUpperCase().split(''));
      return;
    }

    const target = text.toUpperCase().split('');
    const current = target.map(() => ' ');
    setDisplayChars([...current]);

    let step = 0;
    const interval = setInterval(() => {
      let allSettled = true;
      for (let i = 0; i < target.length; i++) {
        if (current[i] !== target[i]) {
          allSettled = false;
          if (step > i * 2) {
            current[i] = target[i];
          } else {
            current[i] = chars[Math.floor(Math.random() * chars.length)];
          }
        }
      }
      setDisplayChars([...current]);
      step++;
      if (allSettled) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [text, prefersReducedMotion]);

  return (
    <div className={`inline-flex flex-wrap gap-1 font-manrope font-bold ${className}`}>
      {displayChars.map((char, index) => (
        <span
          key={index}
          className={`inline-flex items-center justify-center w-7 h-9 sm:w-9 sm:h-12 ${bgColor} ${textColor} text-base sm:text-xl border-t border-b border-black/40 shadow-inner select-none`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export default SplitFlap;
