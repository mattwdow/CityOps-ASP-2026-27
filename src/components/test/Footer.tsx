import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import newFooterImg from '../../assets/3983-1705-Edit.jpg';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[614px] flex flex-col justify-center items-center overflow-hidden bg-primary-container border-t-4 border-tertiary-fixed-dim">
      <div className="absolute inset-0 z-0 bg-primary-container">
        <img 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover mix-blend-overlay opacity-30 grayscale filter" 
          data-alt="Edmonton city skyline at dusk with transit elements, high contrast, moody atmospheric lighting, architectural details"
          src={newFooterImg}
        />
        <div className="absolute inset-0 bg-primary-container/85"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-content-narrow w-full px-gutter flex flex-col items-center text-center gap-12 py-24"
      >
        <h2 className="font-headline-lg text-headline-lg text-on-primary">
          Thank you for Riding with Us!
        </h2>
        <div className="w-[120px] h-[3px] bg-tertiary-fixed-dim mb-4"></div>
        
        <div className="flex flex-col gap-4">
          <h2 className="font-headline-lg text-headline-lg text-on-primary">
            Edmonton Transit Service
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80">
            2025/2026 Annual Service Plan
          </p>
        </div>
        
        <a className="group flex items-center gap-3 text-tertiary-fixed-dim hover:text-tertiary-fixed transition-colors duration-500 ease-out mt-8 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tertiary-fixed-dim rounded px-2 py-1" href="edmonton.ca/transit">
          <span className="font-label-sm text-label-sm tracking-[0.1em] uppercase">edmonton.ca/transit</span>
          <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-500 ease-out" size={24} />
        </a>
      </motion.div>

      <div className="relative z-10 w-full flex justify-center pb-8 mt-auto">
        <p className="font-body-base text-body-base text-on-primary/60 text-sm">
          © {new Date().getFullYear()} Edmonton Transit Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
