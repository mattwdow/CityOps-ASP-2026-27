import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import busWrapImg from '../assets/buswrap2025.jpg';
import heroBgImg from '../assets/Screenshot 2026-04-28 102824.png';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col w-full overflow-hidden relative pt-28">
      <motion.div 
        className="relative w-full overflow-hidden group h-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{ y: prefersReducedMotion ? 0 : y, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <div className="w-full overflow-hidden bg-black/10">
          <img 
            alt="Colorful Indigenous art wrapping an Edmonton Transit Service bus" 
            className="w-full h-auto block transform transition-transform duration-[2000ms] ease-out group-hover:scale-105 -mt-[15%]" 
            src={busWrapImg}
          />
        </div>
      </motion.div>

      <div className="bg-tertiary-fixed-dim text-white px-8 sm:px-16 py-3 flex items-center relative z-10">
        <span className="font-bold tracking-[0.1em] uppercase text-sm ml-6">City Operations</span>
      </div>

      <div className="relative w-full">
        <div className="w-full overflow-hidden leading-zero">
          <img 
            alt="" 
            aria-hidden="true"
            className="w-full h-auto object-cover" 
            src={heroBgImg}
          />
        </div>
        
        <div className="absolute top-0 left-0 w-full text-white px-8 sm:px-16 py-12 sm:py-20 overflow-hidden bg-[#003461]/80 h-full">
          <div className="absolute left-0 top-1/4 w-8 h-6 bg-tertiary-fixed-dim mt-12 hidden md:block"></div>
          <div className="absolute left-0 top-[45%] w-8 h-2 bg-white/80 hidden md:block"></div>
          
          <motion.div 
            className="relative z-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-bold uppercase mb-4 leading-tight tracking-tight drop-shadow-sm">
              Edmonton Transit<br/>Service
            </h1>
            <h2 className="text-xl sm:text-3xl font-light mt-6 text-white">2025/2026 <span className="font-bold text-white">Annual Service Plan</span></h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
