import { useRef } from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    title: 'Service Improvements',
    items: [
      { label: 'Peak frequency improvements:', text: ' Route 916 (Weekday AM Peak direction frequency to every 7/8 minutes), Route 920X (Weekday PM Peak frequency to every 12 minutes), Route 930X (Weekday AM Peak frequency to every 12 minutes).' },
      { label: 'Off-peak frequency improvements:', text: ' Route 53 (Weekday Midday frequency to every 20 minutes), Route 54 (Weekday Midday frequency to every 20 minutes), Route 56 (Weekday Early Evening frequency to every 20 minutes and Sunday Midday frequency to every 15 minutes).' },
      { label: 'Extra trip additions:', text: ' Route 56 (Weekday AM and PM Peak), Route 721 (Weekday Early Morning), Route 729 (Weekday AM Peak), Route 901 (Weekday Early Morning).' }
    ]
  },
  {
    title: 'Extensions and Reroutes',
    items: [
      { label: 'Route 52:', text: ' Rerouted between 107 Avenue and 111 Avenue from 149 Street to 156 Street to increase access to industrial areas based on rider feedback and current ridership patterns.' },
      { label: 'Route 111:', text: ' Rerouted to Westmount Transit Centre travelling westbound based on ridership demand.' },
      { label: 'Route 128:', text: ' Rerouted onto Northgate Centre property to increase access to commercial and employment opportunities.' },
      { label: 'Route 516:', text: ' Extended to 17 Street and 19 Avenue to respond to development and population growth in the Aster neighbourhood.' },
      { label: 'Route 521:', text: ' Extended to Orchards Boulevard and Orchards Road to respond to development and population growth in the Orchards at Ellerslie neighbourhood.' }
    ]
  },
  {
    title: 'Span of Service and School Improvements',
    items: [
      { label: 'Span of service improvements:', text: ' Routes 52 and 53 (Weekday Early Morning service begins 30 minutes earlier), Route 54 (Weekday PM Peak extended one hour later and Sunday Morning service begins one hour earlier), Route 107 (Saturday and Sunday Morning service added and service extended until midnight on Weekdays, Saturdays and Sundays), Route 521 (Weekday Late Evening service added).' },
      { label: 'School service improvements:', text: ' New school specials and trips to serve St. Carlo Acutis and Father Michael McCaffery schools. Additional bus capacity on Routes 56, 707, 718 and 926 to respond to increased student enrollment at Dr. Anne Anderson and Elder Dr. Francis Whiskeyjack schools.' }
    ]
  },
  {
    title: 'Service Reductions',
    items: [
      { label: 'Peak frequency reductions:', text: ' Route 3 (Weekday AM and PM Peak to every 12 minutes), Route 508 (Weekday AM and PM Peak to every 20 minutes), Route 916 (Weekday AM and PM Off-peak direction to every 20 minutes), Route 917 (Weekday AM and PM Off-peak direction to every 30 minutes).' },
      { label: 'Off-peak frequency reductions:', text: ' Route 113 (Saturday and Sunday Late Evening to 60 minutes), Route 501 (Saturday and Sunday Morning to 60 minutes), Route 721 (Sunday Late Evening to 60 minutes), Route 722 (Sunday Late Evening to 60 minutes).' },
      { label: 'Individual trip cancellations:', text: ' Weekday first trips (Routes 130X, 150X, 512, 700X, 701, 703, 706, 724, 904 and 909), Weekday last trips (Routes 1, 130X, 140X, 150X, 700X, 715, 721, 902, 903, 904, 913 and 914), Saturday first trips (Routes 701, 909 and 914), Saturday last trips (Routes 1, 701, 707, 708 and 918), Sunday first trips (Routes 113, 701 and 708), Sunday last trips (Route 113).' },
      { label: 'Span of service reductions:', text: ' Route 9 (Weekday AM Peak direction short trips begin 30 min later), Route 101 (Sunday AM and Late Evening cancelled), Route 124 (Late Evening cancelled), Route 501 (Early AM begins 30 min later), Route 703, 706, 713, 904, 909, 917 (Late Evening / Early Evening service cancelled/reduced). Route 707 and 916 (AM Peak ends 30 min earlier).' },
      { label: 'Route cancellations:', text: ' Route 522 (Partially replaced by On-Demand), Route 676 (St. Thomas More school special - alternate service on Routes 7, 914, 915).' }
    ]
  }
];

const renderBoldRoutes = (text: string) => {
  const parts = text.split(/(Routes?\s+\d+[a-zA-Z]?(?:(?:,\s*|\s+and\s+)\d+[a-zA-Z]?)*)/ig);
  return parts.map((part, index) => {
    if (part.match(/^(Routes?\s+\d+[a-zA-Z]?(?:(?:,\s*|\s+and\s+)\d+[a-zA-Z]?)*)$/i)) {
      return <strong key={index} className="font-bold text-on-surface">{part}</strong>;
    }
    return part;
  });
};

export default function RouteChanges() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-symphonic bg-gradient-to-b from-transparent from-50% to-[#003461]">
      <div className="max-w-grid-wide mx-auto px-gutter">
        
        <div ref={containerRef} className="relative mb-20">
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              <motion.h2 
                className="font-headline-lg text-headline-lg text-primary mb-4 md:mb-8"
              >
                ETS Service Plan 2025-26
              </motion.h2>
              
              <div className="font-body-base md:font-body-lg text-body-base md:text-body-lg text-on-surface-variant space-y-4 md:space-y-6">
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  ETS continues to see positive trends in overall ridership, requiring service adjustments to meet evolving needs.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  After several years of high ridership growth, ridership levelled off in 2025, due in part to factors like the province-wide teachers' strike in October and major construction projects impacting route performance. While Edmonton continues to expand, population growth has been modest compared to previous years. Increased vehicle sales within the province suggest that an increase in personal vehicles may potentially be offsetting ridership growth, with lower fuel prices and the elimination of the federal carbon tax helping to make driving more affordable.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  Despite this plateau in ridership growth, there are many areas and routes that continue to experience ridership pressures. Some routes face overcrowding, while others in rapidly growing areas are underserved. The combination of more riders and traffic congestion can reduce transit reliability and increase travel delays. New junior and senior high schools require school specials and more trips on adjacent bus routes to accommodate growing travel demand.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  In 2025, ETS added 50,000 annual service hours to the network, supplied by 20 new buses. The additional service helped respond to ridership demand and improve service reliability. Also in 2025, City Council approved a plan to purchase 25 buses to transition three On Demand Transit zones to conventional transit. This transition will take place in 2027 once the new buses are delivered.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                  With these fleet additions, ETS garages are at capacity. Until the new Southeast Transit Garage opens, there will be limited opportunities to add more service.
                </motion.p>
              </div>
            </div>

            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#F4B223]/5 border-l-4 border-[#F4B223] text-on-surface p-8 md:p-10 rounded-r-xl rounded-l-sm"
              >
                <h3 className="font-headline-md text-headline-sm md:text-headline-md font-bold mb-6 md:mb-8">2025 SUCCESS STORIES</h3>
                <ul className="space-y-5 md:space-y-6 font-body-sm md:font-body-base text-body-sm md:text-body-base leading-[1.7] md:leading-[1.8]">
                  <li className="flex gap-3">
                    <span className="font-bold">»</span>
                    <div>
                      <span className="font-bold">Route 729 Success:</span> High first-year ridership has triggered scheduled service expansions for 2026.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">»</span>
                    <div>
                      <span className="font-bold">BRT Proof of Concept:</span> Express Route 31 recorded 21% year-over-year growth (Sept 2024–2025), validating the demand for additional high-speed corridors.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">»</span>
                    <div>
                      <span className="font-bold">Crosstown Route Performance:</span> Continuous ridership increases on crosstown routes are being met with annual service additions.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">»</span>
                    <div>
                      <span className="font-bold">Route 747 Growth:</span> A 13% increase in ridership drove the decision to increase frequency across all off-peak time periods.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">»</span>
                    <div>
                      <span className="font-bold">On Demand Reliability:</span> System improvements reduced booking denials ("seat unavailable"), and stabilized the completed trip volume, improving rider access and reliability.
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Existing Route Changes Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-surface rounded-xl p-8 shadow-sm border border-outline-variant/30 flex flex-col h-full"
            >
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{step.title}</h3>
              {step.desc && <p className="font-body-base text-body-base text-on-surface-variant mb-6 flex-grow">{step.desc}</p>}
              <dl className="space-y-6 mt-4">
                {step.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start">
                    {item.label && (
                      <dt className="font-headline-sm text-sm font-bold text-primary sm:w-[40%] lg:w-1/3 flex-shrink-0">
                        <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-md inline-block w-full sm:w-auto">
                          {item.label.replace(/:$/, '')}
                        </span>
                      </dt>
                    )}
                    <dd className="font-body-base text-body-base text-on-surface-variant flex-1 leading-relaxed sm:pt-1">
                      {renderBoldRoutes(item.text)}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


