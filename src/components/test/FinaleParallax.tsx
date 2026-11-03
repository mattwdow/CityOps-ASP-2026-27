import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import footerImg from '../../assets/footer.png';

export default function FinaleParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[50vh] md:h-[60vh] xl:h-[70vh] overflow-hidden flex justify-center items-center"
    >
      <motion.img 
        style={{ y: prefersReducedMotion ? 0 : y, filter: 'contrast(1.1) brightness(1.05) saturate(1.1)' }}
        alt="" 
        aria-hidden="true"
        className="absolute inset-0 w-full h-[140%] -top-[20%] object-cover block origin-center" 
        src={footerImg}
      />
      {/* Subtle dark vignette overlay blending into the previous section and footer */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#003461] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#004b87] to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </div>
  );
}
