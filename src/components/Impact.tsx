import { motion, useInView, animate, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';

function AnimatedNumber({ value, suffix = '', duration = 2, decimals = 0 }: { value: number, suffix?: string, duration?: number, decimals?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  const finalFormatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  useEffect(() => {
    if (isInView && ref.current) {
      if (prefersReducedMotion) {
        ref.current.textContent = `${finalFormatted}${suffix}`;
        return;
      }
      
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            const formatted = latest.toLocaleString('en-US', {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals
            });
            ref.current.textContent = `${formatted}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [value, duration, decimals, isInView, suffix, prefersReducedMotion, finalFormatted]);

  return (
    <>
      <span ref={ref} aria-hidden="true">{prefersReducedMotion ? `${finalFormatted}${suffix}` : `0${suffix}`}</span>
      <span className="sr-only">{finalFormatted}{suffix}</span>
    </>
  );
}

export default function Impact() {
  return (
    <section className="section-symphonic text-on-surface">
      {/* Hero Section */}
      <header className="max-w-content-narrow mx-auto px-gutter mb-section-gap text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F4B223] text-[#003461] rounded-full mb-6"
        >
          <span className="font-label-sm text-[17px] font-bold uppercase tracking-widest">Branch By The Numbers</span>
        </motion.div>
      </header>

      {/* 2025 Year in Review */}
      <section className="max-w-grid-wide mx-auto px-gutter mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6 border-b-2 border-primary-container pb-2 inline-block">2025 Year in Review</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 row-span-2 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Total bus and LRT ridership</span>
            <div className="font-display-xl text-display-xl text-primary font-bold">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] leading-none block">
                <AnimatedNumber value={61.8} suffix="M" decimals={1} />
              </span>
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">DATS trips</span>
            <div className="font-headline-md text-headline-md text-primary font-semibold">
              <AnimatedNumber value={996556} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Active Arc cards</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={2819060} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Fare Assistance passes</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={240044} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Food Collected (Stuff a Bus)</span>
            <div className="font-headline-md text-headline-md text-primary font-semibold">
              <AnimatedNumber value={26500} suffix=" kg" />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">On Demand Transit trips</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={732141} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">In-service hours</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={2229047} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-body-base font-bold text-body-base text-on-surface-variant">Satisfied ETS riders</span>
            <div className="font-headline-md text-headline-md text-primary font-bold">
              <AnimatedNumber value={71} suffix="%" />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-body-base font-bold text-body-base text-on-surface-variant">Satisfied DATS riders</span>
            <div className="font-headline-md text-headline-md text-primary font-bold">
              <AnimatedNumber value={91} suffix="%" />
            </div>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="max-w-grid-wide mx-auto px-gutter mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b-2 border-primary-container pb-2 inline-block">Network Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 row-span-2 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Years of transit service</span>
            <div className="font-display-xl text-display-xl text-primary font-bold">
              <AnimatedNumber value={117} duration={3} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Transit Operator FTEs</span>
            <div className="font-headline-md text-headline-md text-primary font-semibold">
              <AnimatedNumber value={1861} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Bus stops</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={5266} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Shelters</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={2385} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Transit centres</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={24} duration={1.5} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">LRT stops</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={29} duration={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Bus Service */}
      <section className="max-w-grid-wide mx-auto px-gutter mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b-2 border-primary-container pb-2 inline-block">Bus Service</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 auto-rows-[140px]">
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 row-span-2 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Total bus fleet size</span>
            <div className="font-display-xl text-display-xl text-primary font-bold">
              <span className="text-[80px] md:text-[100px] lg:text-[120px] leading-none block">
                <AnimatedNumber value={984} />
              </span>
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-3 transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Number of regular bus routes</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={118} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">School special</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={65} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">40-foot buses</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={880} />
            </div>
          </div>
          <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
            <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Articulated</span>
            <div className="font-headline-md text-headline-md text-on-surface font-semibold">
              <AnimatedNumber value={55} />
            </div>
          </div>
        </div>
      </section>

      {/* LRT Service and On Demand */}
      <section className="max-w-grid-wide mx-auto px-gutter mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LRT Service */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b-2 border-primary-container pb-2 inline-block">LRT Service</h2>
            <div className="grid grid-cols-2 gap-4 auto-rows-[120px]">
              <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 transition-all duration-300 hover:bg-black/[0.07]">
                <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">LRT track length</span>
                <div className="font-headline-md text-headline-md text-primary font-bold">
                  <AnimatedNumber value={40} suffix=" KM" />
                </div>
              </div>
              <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
                <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 text-xs">Capital/Metro Line Cars</span>
                <div className="font-headline-md text-headline-md text-primary font-semibold">
                  <AnimatedNumber value={94} />
                </div>
              </div>
              <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
                <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 text-xs">Valley Line Cars</span>
                <div className="font-headline-md text-headline-md text-primary font-semibold">
                  <AnimatedNumber value={26} />
                </div>
              </div>
            </div>
          </div>

          {/* On Demand and DATS */}
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b-2 border-primary-container pb-2 inline-block">On Demand and DATS</h2>
            <div className="grid grid-cols-2 gap-4 auto-rows-[120px]">
              <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-xl flex flex-col justify-center col-span-2 transition-all duration-300 hover:bg-black/[0.07]">
                <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">DATS registrants</span>
                <div className="font-headline-md text-headline-md text-primary font-bold">
                  <AnimatedNumber value={7106} />
                </div>
              </div>
              <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
                <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 text-xs">On Demand shuttles</span>
                <div className="font-headline-md text-headline-md text-on-surface font-semibold">
                  <AnimatedNumber value={54} />
                </div>
              </div>
              <div className="bg-black/5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-black/[0.07]">
                <span className="font-label-sm font-bold text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 text-xs">DATS vehicles</span>
                <div className="font-headline-md text-headline-md text-on-surface font-semibold">
                  <AnimatedNumber value={104} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
