import { motion } from 'motion/react';

const objectives = [
  {
    id: '01',
    title: 'Convenient',
    description: 'Offering a rider-friendly and accessible transit service with well-planned routes and schedules, flexible fare payment methods, and easy-to-navigate transit spaces.'
  },
  {
    id: '02',
    title: 'Reliable',
    description: 'Providing consistent, on-time service with minimal disruptions, ensuring predictable and dependable transportation for all riders.'
  },
  {
    id: '03',
    title: 'Safe',
    description: 'Continuing to implement and maintain comprehensive safety protocols and security measures across all aspects of Edmonton’s transit network.'
  },
  {
    id: '04',
    title: 'Accessible and Inclusive',
    description: 'Ensuring diverse communities have equitable and dignified access to transportation through universally designed services, vehicles, and information.'
  }
];

export default function Objectives() {
  return (
    <section className="w-full bg-[#F5FAFF] text-[#161C21] py-24 px-6 sm:px-12 lg:px-16">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* VIS Typographic Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-[-0.025em] text-[#005087] leading-[1.0] vis-headline">
            Service Objectives
          </h2>
          <p className="text-base sm:text-xl font-normal text-neutral-600 mt-3 vis-title leading-[1.125]">
            These are the four service objectives that guide Edmonton Transit Service.
          </p>
        </motion.div>

        {/* 4-Column Grid: Leading 1.5, Flush-Left Ragged-Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {objectives.map((obj, i) => (
            <motion.article 
              key={obj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col text-left"
            >
              {/* Bold Tabular Number */}
              <div className="vis-font-sans text-3xl font-black text-[#F4B223] mb-4">
                {obj.id}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#005087] mb-3 tracking-tight leading-[1.125] vis-title">
                {obj.title}
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-[1.5] vis-body">
                {obj.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
