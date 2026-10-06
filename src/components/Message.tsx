import { motion } from 'motion/react';

export default function Message() {
  return (
    <section className="relative w-full bg-transparent border-t-4 border-tertiary-fixed-dim pb-16 lg:pb-32 px-gutter pt-8">
      <div className="w-full max-w-grid-wide mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-6">
            <div className="w-full flex justify-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F4B223] text-[#003461] rounded-full mb-6 text-center shadow-md">
                <span className="font-label-sm text-[17px] font-bold uppercase tracking-widest">Message From The Branch Manager</span>
              </div>
            </div>
            
            <div className="flex items-center gap-10 shrink-0">
              <div className="relative w-[168px] h-[168px] overflow-hidden rounded-full border-2 border-white/20 bg-surface-container-highest flex items-center justify-center text-center p-3 shadow-lg">
                <span className="text-[15px] font-bold uppercase tracking-tighter text-on-surface-variant">Picture of Carrie</span>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/40">
                <p className="text-2xl font-semibold text-[#003461] uppercase tracking-wide">Carrie Hotton-MacDonald</p>
                <p className="text-lg text-[#004b87]/80 mt-3 uppercase tracking-widest">Branch Manager, ETS</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-container-lowest p-8 md:p-12 lg:p-16 border border-surface-variant rounded-lg shadow-sm relative w-full"
        >
          <div className="relative z-10 columns-1 md:columns-2 gap-12 lg:gap-16">
            <p className="font-body-lg text-body-lg text-on-surface font-medium mb-8 leading-relaxed break-inside-avoid">
              I am excited to present this year’s Annual Service Plan for Edmonton Transit Service. This report highlights a few examples of projects we will be delivering in 2026 to help make our transit service even more convenient, reliable, safe, accessible and inclusive.
            </p>
            <div className="w-16 h-[1px] bg-outline-variant mb-8 break-inside-avoid"></div>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6 leading-relaxed break-inside-avoid">
              Our work this year will build on 2025 achievements, including the launch of our “tap to pay” option for fare payment, implementation of additional bus service hours, LRT accessibility improvements and our work with the community.
            </p>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6 leading-relaxed break-inside-avoid">
              Transit ridership reached 61.8 million completed trips in 2025, from 61.6 million in 2024. This reflects a slower period of growth and things like reduced ridership during the October teachers’ strike. Throughout the year, we saw many successes across the network, including high ridership during the year of new bus Route 729.
            </p>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6 leading-relaxed break-inside-avoid">
              As a result, we’ll ensure we have adequate capacity on these high-demand routes in 2026 by reinvesting service hours from some routes that have not met minimum performance targets identified in our service standards.
            </p>
            <p className="font-body-base text-body-base text-on-surface-variant mb-6 leading-relaxed break-inside-avoid">
              We have many capital projects continuing this year, including work related to service expansion for the Valley Line West and Capital Line South Extension, as well as planning and design for Bus Rapid Transit and implementation of Transit Priority Measures.
            </p>
            <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed break-inside-avoid">
              Thank you to our employees, service partners, community groups, transit riders, and City Council for making 2025 a memorable year. I look forward to engaging with you throughout 2026 and seeing you out in our buses and trains!
            </p>
            <div className="mt-12 break-inside-avoid pl-4">
              <span className="font-signature text-[2.5rem] md:text-[3rem] text-on-surface inline-block -rotate-3 leading-none opacity-90">Carrie Hotton-MacDonald</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
