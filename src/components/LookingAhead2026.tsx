import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Accessibility, 
  Bus, 
  Train, 
  Ticket, 
  Hammer, 
  AlertTriangle, 
  ShieldCheck, 
  Cctv, 
  RadioTower, 
  TrainFront, 
  Sparkles, 
  Route, 
  PartyPopper, 
  TreePine, 
  Signpost,
  Bike,
  MapPin
} from 'lucide-react';

const targets = [
  {
    id: '1',
    title: 'Convenient',
    desc: 'Offer a rider-friendly and accessible transit service that adapts to the evolving needs of our growing city.',
    actions: [
      { 
        icon: Accessibility, 
        title: 'DATS Service Growth', 
        frontDesc: 'Expanding our dedicated accessible transit fleet.',
        desc: 'To keep up with growing rider demand, City Council approved a service package to increase DATS service in 2026. This will support the 98 per cent target for DATS accommodation rate, meaning riders can continue to access convenient and reliable service.' 
      },
      { 
        icon: Bus, 
        title: 'Procurement of 25 Conventional Buses', 
        frontDesc: 'Modernizing our fleet with new, high-efficiency vehicles.',
        desc: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand.' 
      },
      {
        icon: Bike,
        title: 'Bike Rack Replacement',
        frontDesc: 'Upgrading bus bike racks for modern bikes.',
        desc: 'Funding from the City’s Climate Action Fund and the Canadian Public Transit Fund will support bus bike rack upgrades to better accommodate a range of modern bikes and make cycling-to-transit connections more accessible and reliable.'
      },
      {
        icon: MapPin,
        title: 'Windermere North Transit Centre',
        frontDesc: 'Planning and design of a new mobility hub.',
        desc: 'Development of this transit centre is entering the planning and design phases in 2026. This mobility hub will provide a critical connection between the Terwillegar Drive express bus service and local routes and On Demand Transit with the Terwillegar Drive express service. With support from the Canadian Public Transit Fund, funding has been allotted for improved integration of transit service in a rapidly growing area of the city.'
      },
      { 
        icon: Train, 
        title: 'Valley Line West (VLW) Construction and Operator Selection', 
        frontDesc: 'Advancing the next major phase of our LRT network.',
        desc: 'Construction of the VLW LRT by Marigold Infrastructure Partners continues, with anticipated completion in 2028. This 14-kilometre extension will add 16 new stops to the Valley Line, running from downtown to Lewis Farms. Once construction is complete, Valley Line West and Valley Line Southeast will operate as one continuous service. The operator of the VLW will be selected in 2026.' 
      },
      { 
        icon: Ticket, 
        title: 'Route 747 Multi-day Passes', 
        frontDesc: 'Introducing flexible fare options for frequent airport commuters.',
        desc: 'In collaboration with regional partners, ETS will introduce Airport + ETS three-day and five-day Arc passes. These passes include unlimited access on Route 747 and across the ETS network providing a convenient fare payment option for visitors to our city.' 
      }
    ]
  },
  {
    id: '2',
    title: 'Reliable',
    desc: 'Provide consistent, on-time service with minimal disruptions, ensuring predictable and dependable transportation for all riders.',
    actions: [
      { 
        icon: Hammer, 
        title: '118 Avenue LRT Bridge Deck Renewal', 
        frontDesc: 'This work will extend its service life and is expected to be completed in October 2027.',
        desc: 'The bridge over 118 Avenue that provides structural support for the Coliseum LRT Station requires renewal. This work will extend its service life and is expected to be completed in October 2027.' 
      },
      { 
        icon: AlertTriangle, 
        title: 'Transit Priority Measures', 
        frontDesc: 'Advancing transit priority measures at 101 Street and Whyte Avenue.',
        desc: 'Building on the work in 2025 that introduced a bus lane along 101 Street north of Downtown, the City is advancing transit priority measures at two additional locations:\n• 101 Street between Jasper Avenue and 102A Avenue\n• Whyte Avenue between 99 Street and 109 Street\nThese measures improve the reliability and speed of our bus routes, providing Edmontonians with an enhanced level of transit service.' 
      }
    ]
  },
  {
    id: '3',
    title: 'Safe',
    desc: 'Continue to implement and maintain comprehensive safety protocols and security measures across all aspects of Edmonton’s transit network.',
    actions: [
      { 
        icon: ShieldCheck, 
        title: 'Additional Transit Peace Officer deployment', 
        frontDesc: 'An additional 15 TPOs will be deployed later this year.',
        desc: 'As part of the updated security model, 15 new TPOs were added in early 2026 and an additional 15 TPOs will be deployed later this year to increase rider safety in transit spaces.' 
      },
      { 
        icon: Cctv, 
        title: 'Integrated Control Centre', 
        frontDesc: 'Bringing together the control centres for bus, LRT, and security operations.',
        desc: 'Working with business partners in Integrated Infrastructure Services, ETS is advancing a project to bring together the control centres for bus, LRT, and security operations. This will improve integration and response time to incidents across the transit network, and prepare for the addition of new components of the network, such as Valley Line West and Capital Line South.' 
      },
      { 
        icon: TrainFront, 
        title: 'Automated Passenger Counter Equipment', 
        frontDesc: 'Installing automated passenger counters (APCs) on LRT cars.',
        desc: 'To better understand ridership trends, and with funding from the Canada Public Transit Fund, ETS is installing automated passenger counters (APCs) on its SD-160 LRT cars. APCs currently exist on a majority of our buses and allow ETS to make service and security adjustments based on ridership demand.' 
      },
      { 
        icon: Sparkles, 
        title: 'Cleaning Service Levels', 
        frontDesc: 'Maintain current levels of cleaning for LRT trains and stations.',
        desc: 'Edmonton City Council approved budget to maintain the current levels of cleaning for LRT trains and stations. This provides both a cleaner environment for riders but has also been shown to enhance perceptions of safety and comfort.' 
      },
      { 
        icon: RadioTower, 
        title: 'Cellular Access in LRT Tunnels', 
        frontDesc: 'Telus will design and install a 5G network in Edmonton\'s LRT tunnels.',
        desc: 'Cellular service is coming to Edmonton\'s LRT tunnels and underground stations. Telus will design and install a 5G network, accessible to all providers by the end of 2026.' 
      }
    ]
  },
  {
    id: '4',
    title: 'Accessible and Inclusive',
    desc: 'Ensuring Edmonton\'s diverse communities have equitable and dignified access to transportation.',
    actions: [
      { 
        icon: Route, 
        title: 'Accessibility Actions via CNIB', 
        frontDesc: 'Expand staff training and improvements to transit facilities.',
        desc: 'Building on the success of the “Get on Board” campaign in 2025, ETS plans to expand staff training and improvements to transit facilities to ensure accessibility for all riders. This includes specialized disability awareness training for ETS leadership.' 
      },
      { 
        icon: PartyPopper, 
        title: 'Downtown Transit Space Activations', 
        frontDesc: 'Space activations designed to enhance the sense of belonging.',
        desc: 'As part of the Downtown Action Plan, ETS has a number of space activations planned for 2026. These activations are designed to enhance the sense of belonging, welcome and excitement within our transit spaces.' 
      },
      { 
        icon: TreePine, 
        title: 'Heritage Festival at Hawrelak Park', 
        frontDesc: 'Extensive shuttle service during the festival.',
        desc: 'The Heritage Festival is expected to return to Hawrelak Park in 2026. ETS has historically provided an extensive shuttle service during the festival, providing thousands of Edmontonians access to explore the diverse cultures within the city.' 
      },
      { 
        icon: Signpost, 
        title: 'Government Centre Station Renaming', 
        frontDesc: 'A new, permanent name which will better reflect the local community.',
        desc: 'The naming committee is anticipated to release a new, permanent name for the Government Centre Station in 2026, which will better reflect the local community.' 
      }
    ]
  }
];

function FlipCard({ action, index }: { action: any, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F4B223] rounded-xl h-full"
      onClick={() => setIsFlipped(!isFlipped)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFlipped(!isFlipped); }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative grid"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Front */}
        <div 
          className="col-start-1 row-start-1 h-full bg-[#003461] border border-[#F4B223] rounded-xl p-8 flex flex-col items-start justify-start hover:border-[#F4B223]/80 hover:shadow-[0_0_15px_rgba(244,178,35,0.2)] transition-all duration-500 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
        >
            <div className="absolute -right-10 -bottom-10 opacity-5 text-white">
              <action.icon size={150} strokeWidth={1} />
            </div>
            <div className="text-[#F4B223] mb-6 relative z-10 w-full flex justify-between items-start">
              <action.icon size={36} strokeWidth={1.5} />
            </div>
            <h3 className="font-headline-md text-[24px] mb-4 text-[#F9F9F6] leading-tight relative z-10">
              {action.title}
            </h3>
            <p className="font-body-base text-white/80 relative z-10">
              {action.frontDesc}
            </p>
          </div>
          
          {/* Back */}
          <div 
            className="col-start-1 row-start-1 h-full bg-[#004274] border border-transparent rounded-xl p-8 flex flex-col items-start justify-center relative z-10 overflow-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="font-body-base text-white/90 relative z-10 leading-relaxed whitespace-pre-wrap">
              {action.desc}
            </p>
          </div>
      </motion.div>
    </motion.div>
  );
}

export default function LookingAhead2026() {
  return (
    <section className="section-symphonic px-gutter bg-[#003461]">
      {/* LEGIBILITY Check: Ensure text-secondary-container provides sufficient contrast against the Navy Blue (#003461) global background. Consider using text-white or text-white/80 if it appears too dark. */}
      <div className="max-w-content-narrow mx-auto text-on-primary">
        <header className="mb-section-gap">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F4B223] text-[#003461] rounded-full mb-6 font-label-sm text-[17px] font-bold uppercase tracking-widest"
          >
            Service Plan 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline-lg text-headline-lg text-[#F4B223] mb-4 md:mb-8"
          >
            2026 Actions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body-lg text-white/90 leading-relaxed max-w-3xl"
          >
            In 2026, ETS will undertake the following infrastructure projects and improvements.<br /><br /><strong className="text-[#F4B223] text-3xl md:text-4xl">Click Each Tile to Read More!</strong>
          </motion.p>
        </header>

        <div className="space-y-32">
          {targets.map((target, idx) => (
            <motion.div 
              key={target.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display-xl text-[#F4B223] mb-8 font-light !text-[48px] md:!text-[64px]">
                {target.title}
              </h2>
              <p className="font-body-lg text-white/90 leading-relaxed max-w-3xl mb-12">
                {target.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {target.actions.map((action, i) => (
                  <FlipCard key={i} action={action} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
