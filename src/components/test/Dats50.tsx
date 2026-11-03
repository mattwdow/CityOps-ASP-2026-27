import { motion } from 'motion/react';
import dogImg from '../../assets/dog.png';

export default function Dats50() {
  return (
    <section className="w-full bg-[#F5FAFF] text-[#161C21] py-24 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col space-y-8"
        >
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#003461] leading-none">
              DATS turns 50!
            </h2>
          </div>
          
          <div className="text-base sm:text-lg text-neutral-800 space-y-6 leading-relaxed">
            <p>
              In 1975, ETS began piloting a paratransit service known today as Dedicated Accessible Transit Service (DATS). On May 5, ETS staff, riders and family members celebrated 50 years of providing public transit access to Edmontonians who cannot use conventional bus or LRT due to a physical or cognitive disability.
            </p>
            <p>
              This incredible journey of half a century would not have been possible without the unwavering dedication and hard work of the DATS team, our valued contractor staff, and supportive community partners.
            </p>
            <p className="font-semibold text-[#003461]">
              Their commitment to enhancing the DATS rider experience over the years has made a difference in the lives of the 7,106 current riders, and the countless others over the decades.
            </p>
          </div>
        </motion.div>

        {/* Photo Column: Borderless Swiss Editorial Presentation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 w-full overflow-hidden"
        >
          <img 
            alt="Black labrador sitting and wearing an orange DATS 50 Years anniversary vest" 
            className="w-full h-auto object-cover block" 
            src={dogImg}
          />
        </motion.div>
      </div>
    </section>
  );
}
