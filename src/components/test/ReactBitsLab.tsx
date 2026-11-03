import React, { useState } from 'react';
import SplitText from './bits/SplitText';
import RollingNumber from './bits/RollingNumber';
import SpotlightCard from './bits/SpotlightCard';
import BlurText from './bits/BlurText';
import Magnet from './bits/Magnet';
import SplitFlap from './bits/SplitFlap';
import StepRail from './bits/StepRail';
import SpringDrawerItem from './bits/SpringDrawerItem';
import ParallaxWindow from './bits/ParallaxWindow';
import ShimmerBox from './bits/ShimmerBox';
import busWrapImg from '../../assets/buswrap-cropped.png';

export default function ReactBitsLab() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className="w-full bg-white text-neutral-900 py-24 px-6 sm:px-12 lg:px-16 border-t-2 border-neutral-100">
      <div className="max-w-[1400px] mx-auto space-y-20">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#003461] font-manrope">
            React Bits Animation Lab
          </h2>
          <p className="text-sm font-manrope text-neutral-500 uppercase tracking-widest mt-2">
            10 Isolated Sandbox Prototypes Built for City Operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 1. SplitText */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461]">
              1. Split-Text Rollout
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#003461] leading-tight">
              <SplitText text="Connecting communities and delivering accessible, safe, and reliable transit." />
            </div>
          </div>

          {/* 2. RollingNumber */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461]">
              2. Rolling Number Slot Display
            </span>
            <div className="text-5xl sm:text-6xl font-black text-[#003461] font-manrope">
              <RollingNumber value={61.8} decimals={1} suffix="M" />
            </div>
            <p className="font-manrope text-xs text-neutral-500 uppercase tracking-wider">
              Transit Passenger Trips in 2025
            </p>
          </div>

          {/* 3. SpotlightCard */}
          <SpotlightCard className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461]">
              3. Radial Cursor Spotlight
            </span>
            <h3 className="text-2xl font-bold text-[#003461] font-manrope">
              Tactile Boundary Awareness
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed font-manrope">
              Move your mouse over this panel to see the subtle 6% navy radial gradient track your cursor with zero border outlines.
            </p>
          </SpotlightCard>

          {/* 4. BlurText */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461]">
              4. Variable Blur Scroll Reveal
            </span>
            <div className="text-base sm:text-lg text-neutral-800 font-manrope leading-relaxed">
              <BlurText text="Our work this year will build on 2025 achievements, including the launch of tap to pay and additional service hours." />
            </div>
          </div>

          {/* 5. Magnet */}
          <div className="bg-[#F5FAFF] p-8 space-y-4 flex flex-col justify-between">
            <div>
              <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461] block mb-2">
                5. Cursor Magnet Pull
              </span>
              <p className="text-neutral-700 text-sm leading-relaxed font-manrope mb-6">
                Hover close to the button below to see the interactive spring attraction.
              </p>
            </div>
            <div>
              <Magnet>
                <button
                  type="button"
                  className="px-6 py-3 bg-[#003461] text-[#F4B223] font-manrope text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Explore Action Item
                </button>
              </Magnet>
            </div>
          </div>

          {/* 6. SplitFlap */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461] block mb-2">
              6. Mechanical Split-Flap Board
            </span>
            <div>
              <SplitFlap text="ROUTE 729" />
            </div>
            <p className="font-manrope text-xs text-neutral-500 uppercase tracking-wider">
              Transit Terminal Departure Flapper
            </p>
          </div>

          {/* 7. StepRail */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461] block mb-2">
              7. Hairline Progress Spine
            </span>
            <div className="flex items-center gap-8 h-36">
              <StepRail totalSteps={4} className="h-32" />
              <div className="space-y-4 font-manrope text-xs text-neutral-700">
                <p>• Station 01: Convenient</p>
                <p>• Station 02: Reliable</p>
                <p>• Station 03: Safe</p>
                <p>• Station 04: Accessible</p>
              </div>
            </div>
          </div>

          {/* 8. SpringDrawerItem */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461] block mb-2">
              8. Smooth Layout Spring Drawer
            </span>
            <SpringDrawerItem
              title="DATS Service Growth"
              frontSummary="Expanding our dedicated accessible transit fleet."
              detailedText="To keep up with growing rider demand, City Council approved a service package to increase DATS service in 2026."
              isOpen={drawerOpen}
              onToggle={() => setDrawerOpen(!drawerOpen)}
            />
          </div>

          {/* 9. ParallaxWindow */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461] block mb-2">
              9. Decoupled Parallax Image Window
            </span>
            <ParallaxWindow
              src={busWrapImg}
              alt="ETS Bus Wrap"
              className="h-44 w-full"
              speed={0.12}
            />
          </div>

          {/* 10. ShimmerBox */}
          <div className="bg-[#F5FAFF] p-8 space-y-4">
            <span className="font-manrope text-xs font-bold uppercase tracking-wider text-[#003461] block mb-2">
              10. Shimmer Silhouette Skeleton
            </span>
            <ShimmerBox className="h-44 w-full flex items-center justify-center p-6 text-center text-neutral-400 font-manrope text-xs tracking-widest uppercase">
              <span>[ Route Report Card — Live Telemetry Stream ]</span>
            </ShimmerBox>
          </div>
        </div>
      </div>
    </section>
  );
}
