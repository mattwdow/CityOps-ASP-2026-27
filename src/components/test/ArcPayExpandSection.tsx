import React, { useRef } from 'react';
import arcPayImg from '../../assets/Arc Pay.png';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

/**
 * Continuous Smooth-Interpolated Sticky Scrollytelling Section
 *
 * Direct, rapid 3-wheel-scroll expansion:
 *  - Runway shortened from 280vh to 160vh (equivalent to ~3 normal mouse wheel notches)
 *  - Width expands from 44vw to 100vw across [0, 0.85]
 *  - Height expands from 56vh to 100vh across [0, 0.85]
 *  - Corner Radius: 20px down to 0px
 *  - Every single wheel notch visibly zooms out the container proportionally.
 */
export default function ArcPayExpandSection() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Runway length calibrated to 200vh
  const cardWidth = useTransform(scrollYProgress, [0, 0.7], ['44vw', '100vw']);
  const cardHeight = useTransform(scrollYProgress, [0, 0.7], ['56vh', '100vh']);
  const cardRadius = useTransform(scrollYProgress, [0, 0.55], ['20px', '0px']);
  const scrimOpacity = useTransform(scrollYProgress, [0.1, 0.65], [0, 0.82]);
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [1.15, 1.0]);

  // Initial small badge title dissolves COMPLETELY and gets removed [0% -> 12%]
  const initialTitleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const initialTitleY = useTransform(scrollYProgress, [0, 0.12], [0, -40]);
  const initialTitleDisplay = useTransform(scrollYProgress, (pos) => (pos > 0.14 ? 'none' : 'flex'));

  // Expanded content emerges from 30% to 55%, then STAYS AT 100% OPACITY (clamp: true)
  // Zero fade out at the end of the scroll runway
  const expandedOpacity = useTransform(scrollYProgress, [0.30, 0.55, 1.0], [0, 1, 1], { clamp: true });
  const expandedY = useTransform(scrollYProgress, [0.30, 0.55, 1.0], [35, 0, 0], { clamp: true });
  const expandedDisplay = useTransform(scrollYProgress, (pos) => (pos < 0.25 ? 'none' : 'flex'));

  return (
    <section 
      ref={containerRef}
      aria-label="Arc Tap to Pay Continuous Feature Showcase"
      className="relative w-full bg-white text-neutral-900"
      style={{ height: prefersReduced ? 'auto' : '200vh' }}
    >
      {/* Pinned Sticky Visual Viewport (100vh) */}
      <div className="sticky top-0 w-full h-[100vh] flex items-center justify-center overflow-hidden bg-white z-10 pointer-events-none">
        
        {/* Progressively Expanding Card Frame */}
        <motion.div 
          style={prefersReduced ? {} : {
            width: cardWidth,
            height: cardHeight,
            borderRadius: cardRadius,
          }}
          className={`relative overflow-hidden shadow-2xl flex items-center justify-center bg-white ${
            prefersReduced ? 'w-full h-full rounded-none' : ''
          }`}
        >
          {/* Base Arc Pay Device Image */}
          <motion.img 
            src={arcPayImg}
            alt="Arc contactless tap to pay validator device"
            style={prefersReduced ? {} : { scale: imageScale }}
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />

          {/* Dark scrim overlay that darkens progressively */}
          <motion.div 
            style={prefersReduced ? { opacity: 0.82 } : { opacity: scrimOpacity }}
            className="absolute inset-0 pointer-events-none bg-[#001429]"
          />

          {/* Initial Small View Title: "Arc to Pay" */}
          <motion.div 
            style={prefersReduced ? { display: 'none' } : {
              display: initialTitleDisplay,
              opacity: initialTitleOpacity,
              y: initialTitleY,
            }}
            className="absolute inset-0 flex-col items-center justify-center p-6 text-center select-none z-20 pointer-events-none"
          >
            <div className="w-12 h-1 bg-[#F4B223] mb-3"></div>
            <h3 className="font-manrope text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Arc to Pay
            </h3>
            <span className="font-manrope text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-200 mt-2 bg-black/50 px-3.5 py-1 rounded-full backdrop-blur-md border border-white/20">
              Scroll down to expand
            </span>
          </motion.div>

          {/* Expanded View Content: Official Arc to Pay Text */}
          <motion.div 
            style={prefersReduced ? { opacity: 1, y: 0 } : {
              display: expandedDisplay,
              opacity: expandedOpacity,
              y: expandedY,
            }}
            className="absolute inset-0 flex-col items-center justify-center p-6 sm:p-12 text-center text-white z-30 pointer-events-auto"
          >
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              {/* Gold Accent Pip */}
              <div className="w-16 h-1.5 bg-[#F4B223] mb-4"></div>

              {/* Tagline */}
              <span className="font-manrope text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F4B223] mb-3">
                Regional Contactless Fare Payment
              </span>

              {/* Monumental Headline */}
              <h2 className="font-manrope text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                Arc Tap to Pay
              </h2>

              {/* Actual Arc to Pay Description */}
              <p className="font-atkinson text-base sm:text-xl text-neutral-100 leading-relaxed max-w-2xl font-normal mb-8 drop-shadow">
                Arc tap to pay allows riders in the Edmonton region to use physical or digital credit/debit cards (Visa, Mastercard, Amex, Interac) or mobile wallets (Apple Pay, Google Wallet, Samsung Wallet) directly on validators. Tap on and off every trip to ensure correct fare calculation and to receive daily/monthly fare capping.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-white/25 font-manrope text-xs sm:text-sm text-neutral-200">
                <div className="flex flex-col items-center">
                  <span className="text-neutral-300 text-[10px] uppercase tracking-wider">Accepted Cards</span>
                  <span className="font-bold text-white mt-0.5">Visa • Mastercard • Amex • Interac</span>
                </div>
                <div className="w-px h-8 bg-white/25 hidden sm:block"></div>
                <div className="flex flex-col items-center">
                  <span className="text-neutral-300 text-[10px] uppercase tracking-wider">Mobile Wallets</span>
                  <span className="font-bold text-white mt-0.5">Apple Pay • Google Wallet • Samsung Wallet</span>
                </div>
                <div className="w-px h-8 bg-white/25 hidden sm:block"></div>
                <div className="flex flex-col items-center">
                  <span className="text-neutral-300 text-[10px] uppercase tracking-wider">Fare Protection</span>
                  <span className="font-bold text-[#F4B223] mt-0.5">Automatic Daily and Monthly Capping</span>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
