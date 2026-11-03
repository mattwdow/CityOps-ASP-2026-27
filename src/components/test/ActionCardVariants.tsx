import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CardProps {
  action: {
    title: string;
    frontDesc: string;
    desc: string;
  };
  index: number;
}

// 1. 3D Directional Turnstile Flip
export function TurnstileFlipCard({ action }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative h-64 cursor-pointer select-none [perspective:1000px]"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 22 }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 bg-[#002B50] p-6 flex flex-col justify-between [backface-visibility:hidden]">
          <div>
            <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
              Animation 1: Turnstile Flip (3D)
            </span>
            <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
            <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
          </div>
          <span className="text-xs font-manrope font-semibold text-[#F4B223]">Click to Flip Turnstile →</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-[#003866] p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="overflow-y-auto pr-1">
            <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
              Operational Specification
            </span>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
          </div>
          <span className="text-xs font-manrope font-semibold text-[#F4B223] pt-2">← Flip Back</span>
        </div>
      </motion.div>
    </div>
  );
}

// 2. Perforated Ticket Stub Slide
export function TicketStubCard({ action }: CardProps) {
  const [isTorn, setIsTorn] = useState(false);
  return (
    <div
      onClick={() => setIsTorn(!isTorn)}
      className="relative h-64 bg-[#002B50] p-6 cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      <div className="relative z-10">
        <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
          Animation 2: Perforated Ticket Stub
        </span>
        <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
        <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
      </div>

      <div className="w-full border-t border-dashed border-[#F4B223]/50 my-2 relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-manrope uppercase tracking-widest text-[#F4B223]">Transfer Stub</span>
        <span className="text-xs font-manrope font-bold text-[#F4B223]">{isTorn ? 'Torn [-]' : 'Tear [+]'}</span>
      </div>

      <motion.div
        animate={{ y: isTorn ? 0 : '100%', opacity: isTorn ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 bg-[#003866] p-6 z-20 flex flex-col justify-between"
      >
        <div className="overflow-y-auto pr-1">
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Ticket Details
          </span>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223] pt-2">Reattach Stub ↑</span>
      </motion.div>
    </div>
  );
}

// 3. LRT Bi-Parting Pneumatic Doors
export function BiPartingDoorsCard({ action }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative h-64 bg-[#001D38] cursor-pointer overflow-hidden"
    >
      {/* Interior Car Briefing */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between bg-[#002B50]">
        <div className="overflow-y-auto pr-1">
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Carriage Interior Briefing
          </span>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223] pt-2">Close Carriage Doors</span>
      </div>

      {/* Left Door */}
      <motion.div
        animate={{ x: isOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#003461] border-r border-[#F4B223]/30 p-6 flex flex-col justify-between z-20 overflow-hidden"
      >
        <div>
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Anim 3: Pneumatic Doors
          </span>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
        </div>
        <span className="text-xs font-manrope text-white/70">Door L</span>
      </motion.div>

      {/* Right Door */}
      <motion.div
        animate={{ x: isOpen ? '100%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#003461] border-l border-[#F4B223]/30 p-6 flex flex-col justify-between z-20 overflow-hidden"
      >
        <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
        <span className="text-xs font-manrope font-bold text-[#F4B223] self-end">Step Aboard →</span>
      </motion.div>
    </div>
  );
}

// 4. Thermal Passenger Density Melt
export function ThermalMeltCard({ action }: CardProps) {
  const [isMelted, setIsMelted] = useState(false);
  return (
    <div
      onClick={() => setIsMelted(!isMelted)}
      className="relative h-64 bg-[#002B50] p-6 cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      <div>
        <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
          Animation 4: Thermal Melt Bleed
        </span>
        <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
        <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
      </div>
      <span className="text-xs font-manrope font-semibold text-[#F4B223]">Trigger Thermal Scan →</span>

      {/* Melt Overlay */}
      <motion.div
        animate={{
          clipPath: isMelted ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
          opacity: isMelted ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-br from-[#003461] via-[#004B87] to-[#00213d] p-6 z-20 flex flex-col justify-between"
      >
        <div className="overflow-y-auto pr-1">
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Thermal Sensor Data
          </span>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223] pt-2">Reset Sensor Scan</span>
      </motion.div>
    </div>
  );
}

// 5. Vintage Destination Rollsign Crank
export function DestinationRollsignCard({ action }: CardProps) {
  const [isRolled, setIsRolled] = useState(false);
  return (
    <div
      onClick={() => setIsRolled(!isRolled)}
      className="relative h-64 bg-[#00213d] border-t-2 border-b-2 border-white/20 p-6 cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block z-30">
        Animation 5: Destination Rollsign
      </span>

      {/* Rollsign Roller Window */}
      <div className="relative h-44 overflow-hidden">
        {/* Front Roll Frame */}
        <motion.div
          animate={{ y: isRolled ? '-120%' : '0%' }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 flex flex-col justify-center"
        >
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope uppercase">{action.title}</h4>
          <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
          <span className="text-xs font-manrope text-[#F4B223] mt-3">Crank Rollsign Down ↓</span>
        </motion.div>

        {/* Back Roll Frame */}
        <motion.div
          animate={{ y: isRolled ? '0%' : '120%' }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 flex flex-col justify-between overflow-y-auto pr-1"
        >
          <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
          <span className="text-xs font-manrope text-[#F4B223] pt-2">Crank Back ↑</span>
        </motion.div>
      </div>
    </div>
  );
}

// 6. Architectural Blueprint Trace Lift
export function BlueprintLiftCard({ action }: CardProps) {
  const [isLifted, setIsLifted] = useState(false);
  return (
    <div
      onClick={() => setIsLifted(!isLifted)}
      className="relative h-64 bg-[#001D38] cursor-pointer overflow-hidden p-6 flex flex-col justify-between"
    >
      {/* Base Layer */}
      <div className="overflow-y-auto pr-1">
        <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
          Engineering Specification Underlay
        </span>
        <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
      </div>
      <span className="text-xs font-manrope font-semibold text-[#F4B223] pt-2">Drop Blueprint Trace Layer</span>

      {/* Top Tracing Paper Overlay */}
      <motion.div
        animate={{
          clipPath: isLifted ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: isLifted ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-[#002B50] p-6 flex flex-col justify-between z-20"
      >
        <div>
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Animation 6: Blueprint Trace Lift
          </span>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
          <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223]">Lift Tracing Paper ↗</span>
      </motion.div>
    </div>
  );
}

// 7. Mechanical Split-Flap Cascading Text
export function SplitFlapRevealCard({ action }: CardProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  return (
    <div
      onClick={() => setIsRevealed(!isRevealed)}
      className="relative h-64 bg-[#002B50] p-6 cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      <div>
        <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
          Animation 7: Cascading Split-Flap
        </span>
        <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
        <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
      </div>

      <AnimatePresence mode="wait">
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#00213d] p-6 flex flex-col justify-between z-20"
          >
            <div className="overflow-y-auto pr-1">
              <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
                Flapper Telemetry
              </span>
              <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
            </div>
            <span className="text-xs font-manrope font-semibold text-[#F4B223]">Reset Split-Flap Board</span>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="text-xs font-manrope font-semibold text-[#F4B223]">Cycle Split-Flap Display →</span>
    </div>
  );
}

// 8. Sliding Horizon Split-Level Drawer
export function SlidingHorizonCard({ action }: CardProps) {
  const [isSlid, setIsSlid] = useState(false);
  return (
    <div
      onClick={() => setIsSlid(!isSlid)}
      className="relative h-64 bg-[#002B50] cursor-pointer overflow-hidden p-6 flex flex-col justify-between"
    >
      <div>
        <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
          Animation 8: Sliding Horizon
        </span>
        <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
        <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
      </div>
      <span className="text-xs font-manrope font-semibold text-[#F4B223]">Slide Horizon Panel →</span>

      <motion.div
        animate={{ x: isSlid ? 0 : '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[#003866] p-6 z-20 flex flex-col justify-between"
      >
        <div className="overflow-y-auto pr-1">
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Horizon Narrative Briefing
          </span>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223]">← Slide Out Horizon</span>
      </motion.div>
    </div>
  );
}

// 9. Concentric Shutter Aperture
export function ShutterApertureCard({ action }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative h-64 bg-[#001D38] cursor-pointer overflow-hidden p-6 flex flex-col justify-between"
    >
      {/* Interior */}
      <div className="overflow-y-auto pr-1">
        <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
          Aperture Focus Telemetry
        </span>
        <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
      </div>
      <span className="text-xs font-manrope font-semibold text-[#F4B223]">Close Shutter Iris</span>

      {/* 4 Geometric Shutter Blades */}
      <motion.div
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[#002B50] p-6 z-20 flex flex-col justify-between"
      >
        <div>
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Animation 9: Shutter Aperture
          </span>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
          <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223]">Open Shutter Lens ⊙</span>
      </motion.div>
    </div>
  );
}

// 10. Monorail Track Lateral Crossover Switch
export function TrackSwitchCard({ action }: CardProps) {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <div
      onClick={() => setIsSwitched(!isSwitched)}
      className="relative h-64 bg-[#002B50] cursor-pointer overflow-hidden p-6 flex flex-col justify-between"
    >
      {/* Main Track Face */}
      <motion.div
        animate={{ x: isSwitched ? '-110%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 p-6 flex flex-col justify-between z-10"
      >
        <div>
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Animation 10: Track Crossover Switch
          </span>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
          <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223]">Switch Track Crossover ⇄</span>
      </motion.div>

      {/* Siding Track Face */}
      <motion.div
        animate={{ x: isSwitched ? '0%' : '110%' }}
        transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
        className="absolute inset-0 bg-[#003866] p-6 flex flex-col justify-between z-20"
      >
        <div className="overflow-y-auto pr-1">
          <span className="font-manrope text-[11px] font-bold uppercase tracking-wider text-[#F4B223] block mb-2">
            Crossover Siding Briefing
          </span>
          <p className="text-xs sm:text-sm text-white leading-relaxed font-atkinson whitespace-pre-wrap">{action.desc}</p>
        </div>
        <span className="text-xs font-manrope font-semibold text-[#F4B223]">Switch Back to Mainline ⇄</span>
      </motion.div>
    </div>
  );
}
