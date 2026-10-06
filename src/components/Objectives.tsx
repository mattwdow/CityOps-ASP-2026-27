import { motion } from 'motion/react';

const objectives = [
  {
    id: '1',
    title: 'Convenient',
    description: 'Offering a rider-friendly and accessible transit service with well-planned routes and schedules, flexible fare payment methods, and easy-to-navigate transit spaces.'
  },
  {
    id: '2',
    title: 'Reliable',
    description: 'Providing consistent, on-time service with minimal disruptions, ensuring predictable and dependable transportation for all riders.'
  },
  {
    id: '3',
    title: 'Safe',
    description: 'Continuing to implement and maintain comprehensive safety protocols and security measures across all aspects of Edmonton’s transit network.'
  },
  {
    id: '4',
    title: 'Accessible and Inclusive',
    description: 'Ensuring diverse communities have equitable and dignified access to transportation through universally designed services, vehicles, and information.'
  }
];

export default function Objectives() {
  return (
    <section className="section-symphonic px-gutter flex flex-col items-center justify-center">
      <div className="w-full max-w-grid-wide mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-content-narrow mx-auto mb-section-gap"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F4B223] text-[#003461] rounded-full mb-6 text-center">
            <span className="font-label-sm text-[17px] font-bold uppercase tracking-widest">Branch Objectives</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm lg:text-headline-md text-primary-container">
            These are the four service objectives that guide Edmonton Transit Service
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, i) => (
            <motion.article 
              key={obj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-surface-container-lowest rounded-xl outline outline-1 outline-outline-variant p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-[#F4B223] flex items-center justify-center mb-8">
                <span className="font-label-sm text-label-sm text-[#003461]">{obj.id}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary-container !text-[24px] mb-4">
                {obj.title}
              </h3>
              <p className="font-body-base text-body-base text-on-surface-variant">
                {obj.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-tertiary-fixed-dim origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
