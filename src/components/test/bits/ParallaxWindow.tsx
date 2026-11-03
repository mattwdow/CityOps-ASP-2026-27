import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface ParallaxWindowProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1
}

export function ParallaxWindow({ src, alt, className = '', speed = 0.15 }: ParallaxWindowProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        style={{ y: prefersReducedMotion ? 0 : y, scale: 1.15 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover block"
      />
    </div>
  );
}

export default ParallaxWindow;
