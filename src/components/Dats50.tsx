import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import React, { useRef } from 'react';
import dogImg from '../assets/dog.png';

function TiltContainer({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1deg", "-1deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1deg", "1deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const posX = (e.clientX - rect.left - midX) / rect.width;
    const posY = (e.clientY - rect.top - midY) / rect.height;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 bg-[#F4B223]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl rounded-xl -z-10" />
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full h-full"
      >
         {children}
      </div>
    </motion.div>
  );
}

export default function Dats50() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-8 section-symphonic w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 order-2 lg:order-1 flex flex-col space-y-8"
      >
        <div className="self-start inline-flex items-center justify-center px-4 py-1.5 bg-[#F4B223] text-[#003461] rounded-full mb-6">
          <span className="font-label-sm text-[17px] font-bold uppercase tracking-widest">
            Highlights From 2025
          </span>
        </div>
        
        <div className="space-y-6">
          <h2 className="font-display-xl text-5xl md:text-6xl lg:text-[80px] font-light leading-tight tracking-tight text-primary">
            DATS turns 50!
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="font-body-base text-[18px] leading-relaxed text-on-surface-variant space-y-6">
          <p>
            In 1975, ETS began piloting a paratransit service known today as Dedicated Accessible Transit Service (DATS). On May 5, ETS staff, riders and family members celebrated 50 years of providing public transit access to Edmontonians who cannot use conventional bus or LRT due to a physical or cognitive disability.
          </p>
          <p>
            This incredible journey of half a century would not have been possible without the unwavering dedication and hard work of the DATS team, our valued contractor staff, and supportive community partners.
          </p>
          <p className="font-medium text-on-surface">
            Their commitment to enhancing the DATS rider experience over the years has made a difference in the lives of the 7,106 current riders, and the countless others over the decades.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-7 order-1 lg:order-2 w-full"
        style={{ perspective: "1000px" }}
      >
        <TiltContainer className="h-[512px] min-h-[400px] lg:h-[819px] w-full rounded-xl">
          <div className="absolute inset-0 bg-surface-container-highest rounded-xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <img 
            alt="Black labrador sitting and wearing an orange DATS 50 Years anniversary vest" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl border border-outline-variant/20 shadow-sm" 
            src={dogImg}
          />
        </TiltContainer>
      </motion.div>
    </section>
  );
}
