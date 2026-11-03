import { motion } from 'motion/react';
import carrieImg from '../../assets/carrie-hotton-macdonald.png';

export default function Message() {
  return (
    <section className="relative w-full bg-white text-neutral-900 py-20 px-6 sm:px-12 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Typographic Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 w-full text-center flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.025em] text-[#005087] vis-headline text-center">
            Message From The Branch Manager
          </h2>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden bg-[#005087] rounded-sm shrink-0 shadow-sm border border-neutral-200">
              <img 
                src={carrieImg} 
                alt="Carrie Hotton-MacDonald, Branch Manager, ETS" 
                className="w-full h-full object-cover object-top block"
              />
            </div>
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-bold text-[#005087] tracking-tight vis-title leading-[1.125]">Carrie Hotton-MacDonald</p>
              <p className="vis-meta text-xs text-neutral-600 tracking-widest mt-1">Branch Manager, ETS</p>
            </div>
          </div>
        </motion.div>

        {/* VIS Standards Compliant Multi-Column Editorial Layout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Max 4 columns / reading measure constraint, 1.5 leading, strictly flush-left ragged-right */}
          <div className="columns-1 md:columns-2 gap-12 lg:gap-16 text-neutral-800 text-base sm:text-lg text-left">
            {/* Introductory Callout in complement color */}
            <p className="vis-body text-xl md:text-2xl font-semibold text-[#005087] mb-8 leading-[1.25] break-inside-avoid">
              I am excited to present this year’s Annual Service Plan for Edmonton Transit Service. This report highlights a few examples of projects we will be delivering in 2026 to help make our transit service even more convenient, reliable, safe, accessible and inclusive.
            </p>
            
            <p className="vis-body-serif mb-6 break-inside-avoid leading-[1.5] text-neutral-800">
              Our work this year will build on 2025 achievements, including the launch of our “tap to pay” option for fare payment, implementation of additional bus service hours, LRT accessibility improvements and our work with the community.
            </p>
            
            <p className="vis-body-serif mb-6 break-inside-avoid leading-[1.5] text-neutral-800">
              Transit ridership reached 61.8 million completed trips in 2025, from 61.6 million in 2024. This reflects a slower period of growth and things like reduced ridership during the October teachers’ strike. Throughout the year, we saw many successes across the network, including high ridership during the year of new bus Route 729.
            </p>
            
            <p className="vis-body-serif mb-6 break-inside-avoid leading-[1.5] text-neutral-800">
              As a result, we’ll ensure we have adequate capacity on these high-demand routes in 2026 by reinvesting service hours from some routes that have not met minimum performance targets identified in our service standards.
            </p>
            
            <p className="vis-body-serif mb-6 break-inside-avoid leading-[1.5] text-neutral-800">
              We have many capital projects continuing this year, including work related to service expansion for the Valley Line West and Capital Line South Extension, as well as planning and design for Bus Rapid Transit and implementation of Transit Priority Measures.
            </p>
            
            <p className="vis-body-serif mb-6 break-inside-avoid leading-[1.5] text-neutral-800">
              Thank you to our employees, service partners, community groups, transit riders, and City Council for making 2025 a memorable year. I look forward to engaging with you throughout 2026 and seeing you out in our buses and trains!
            </p>
            
            <div className="mt-8 break-inside-avoid pt-4">
              <span className="font-signature text-3xl md:text-4xl text-[#005087] inline-block leading-none">
                Carrie Hotton-MacDonald
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
