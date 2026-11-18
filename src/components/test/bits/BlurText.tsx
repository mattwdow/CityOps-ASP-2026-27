import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useMotionPreference } from '../../../context/MotionContext';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurText({ text, className = '', delay = 0.04 }: BlurTextProps) {
  const osReduced = useReducedMotion();
  const { animationsEnabled } = useMotionPreference();
  const prefersReducedMotion = osReduced || !animationsEnabled;

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em] align-top"
          initial={{ filter: 'blur(8px)', opacity: 0, y: 8 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: index * delay,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default BlurText;
