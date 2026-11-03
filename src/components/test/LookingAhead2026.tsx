import React, { useState } from 'react';
import {
  TurnstileFlipCard,
  TicketStubCard,
  BiPartingDoorsCard,
  ThermalMeltCard,
  DestinationRollsignCard,
  BlueprintLiftCard,
  SplitFlapRevealCard,
  SlidingHorizonCard,
  ShutterApertureCard,
  TrackSwitchCard,
} from './ActionCardVariants';

const targets = [
  {
    id: '1',
    title: 'Convenient',
    desc: 'Offer a rider-friendly and accessible transit service that adapts to the evolving needs of our growing city.',
    actions: [
      { 
        title: 'DATS Service Growth', 
        frontDesc: 'Expanding our dedicated accessible transit fleet.',
        desc: 'To keep up with growing rider demand, City Council approved a service package to increase DATS service in 2026. This will support the 98 per cent target for DATS accommodation rate, meaning riders can continue to access convenient and reliable service.' 
      },
      { 
        title: 'Procurement of 25 Conventional Buses', 
        frontDesc: 'Modernizing our fleet with new, high-efficiency vehicles.',
        desc: 'In 2026, ETS will procure 25 buses for service in 2027. These buses will be used to transition three On Demand Transit zones to conventional service due to ridership demand.' 
      },
      {
        title: 'Bike Rack Replacement',
        frontDesc: 'Upgrading bus bike racks for modern bikes.',
        desc: 'Funding from the City’s Climate Action Fund and the Canadian Public Transit Fund will support bus bike rack upgrades to better accommodate a range of modern bikes and make cycling-to-transit connections more accessible and reliable.'
      },
      {
        title: 'Windermere North Transit Centre',
        frontDesc: 'Planning and design of a new mobility hub.',
        desc: 'Development of this transit centre is entering the planning and design phases in 2026. This mobility hub will provide a critical connection between the Terwillegar Drive express bus service and local routes and On Demand Transit with the Terwillegar Drive express service. With support from the Canadian Public Transit Fund, funding has been allotted for improved integration of transit service in a rapidly growing area of the city.'
      },
      { 
        title: 'Valley Line West (VLW) Construction and Operator Selection', 
        frontDesc: 'Advancing the next major phase of our LRT network.',
        desc: 'Construction of the VLW LRT by Marigold Infrastructure Partners continues, with anticipated completion in 2028. This 14-kilometre extension will add 16 new stops to the Valley Line, running from downtown to Lewis Farms. Once construction is complete, Valley Line West and Valley Line Southeast will operate as one continuous service. The operator of the VLW will be selected in 2026.' 
      },
      { 
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
        title: '118 Avenue LRT Bridge Deck Renewal', 
        frontDesc: 'This work will extend its service life and is expected to be completed in October 2027.',
        desc: 'The bridge over 118 Avenue that provides structural support for the Coliseum LRT Station requires renewal. This work will extend its service life and is expected to be completed in October 2027.' 
      },
      { 
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
        title: 'Additional Transit Peace Officer deployment', 
        frontDesc: 'An additional 15 TPOs will be deployed later this year.',
        desc: 'As part of the updated security model, 15 new TPOs were added in early 2026 and an additional 15 TPOs will be deployed later this year to increase rider safety in transit spaces.' 
      },
      { 
        title: 'Integrated Control Centre', 
        frontDesc: 'Bringing together the control centres for bus, LRT, and security operations.',
        desc: 'Working with business partners in Integrated Infrastructure Services, ETS is advancing a project to bring together the control centres for bus, LRT, and security operations. This will improve integration and response time to incidents across the transit network, and prepare for the addition of new components of the network, such as Valley Line West and Capital Line South.' 
      },
      { 
        title: 'Automated Passenger Counter Equipment', 
        frontDesc: 'Installing automated passenger counters (APCs) on LRT cars.',
        desc: 'To better understand ridership trends, and with funding from the Canada Public Transit Fund, ETS is installing automated passenger counters (APCs) on its SD-160 LRT cars. APCs currently exist on a majority of our buses and allow ETS to make service and security adjustments based on ridership demand.' 
      },
      { 
        title: 'Cleaning Service Levels', 
        frontDesc: 'Maintain current levels of cleaning for LRT trains and stations.',
        desc: 'Edmonton City Council approved budget to maintain the current levels of cleaning for LRT trains and stations. This provides both a cleaner environment for riders but has also been shown to enhance perceptions of safety and comfort.' 
      },
      { 
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
        title: 'Accessibility Actions via CNIB', 
        frontDesc: 'Expand staff training and improvements to transit facilities.',
        desc: 'Building on the success of the “Get on Board” campaign in 2025, ETS plans to expand staff training and improvements to transit facilities to ensure accessibility for all riders. This includes specialized disability awareness training for ETS leadership.' 
      },
      { 
        title: 'Downtown Transit Space Activations', 
        frontDesc: 'Space activations designed to enhance the sense of belonging.',
        desc: 'As part of the Downtown Action Plan, ETS has a number of space activations planned for 2026. These activations are designed to enhance the sense of belonging, welcome and excitement within our transit spaces.' 
      },
      { 
        title: 'Heritage Festival at Hawrelak Park', 
        frontDesc: 'Extensive shuttle service during the festival.',
        desc: 'The Heritage Festival is expected to return to Hawrelak Park in 2026. ETS has historically provided an extensive shuttle service during the festival, providing thousands of Edmontonians access to explore the diverse cultures within the city.' 
      },
      { 
        title: 'Government Centre Station Renaming', 
        frontDesc: 'A new, permanent name which will better reflect the local community.',
        desc: 'The naming committee is anticipated to release a new, permanent name for the Government Centre Station in 2026, which will better reflect the local community.' 
      }
    ]
  }
];

// Fallback Standard Swiss Card for remaining items past #10
function StandardSwissActionCard({ action }: { action: any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="bg-[#002B50] p-6 cursor-pointer transition-colors duration-200 hover:bg-[#003866]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">{action.title}</h4>
          <p className="text-sm text-white/80 leading-relaxed font-atkinson">{action.frontDesc}</p>
        </div>
        <span className="font-manrope text-sm text-[#F4B223] font-bold shrink-0 pt-1">{isOpen ? '—' : '+'}</span>
      </div>
      {isOpen && (
        <div className="mt-6 pt-6 border-t border-white/10 text-white/90 text-sm sm:text-base leading-relaxed font-atkinson whitespace-pre-wrap">
          {action.desc}
        </div>
      )}
    </div>
  );
}

// Dispatcher that assigns the first 10 cards to the 10 distinct animation ideas
function renderAnimatedActionCard(action: any, globalIndex: number) {
  switch (globalIndex) {
    case 0:
      return <TurnstileFlipCard key={globalIndex} action={action} index={globalIndex} />;
    case 1:
      return <TicketStubCard key={globalIndex} action={action} index={globalIndex} />;
    case 2:
      return <BiPartingDoorsCard key={globalIndex} action={action} index={globalIndex} />;
    case 3:
      return <ThermalMeltCard key={globalIndex} action={action} index={globalIndex} />;
    case 4:
      return <DestinationRollsignCard key={globalIndex} action={action} index={globalIndex} />;
    case 5:
      return <BlueprintLiftCard key={globalIndex} action={action} index={globalIndex} />;
    case 6:
      return <SplitFlapRevealCard key={globalIndex} action={action} index={globalIndex} />;
    case 7:
      return <SlidingHorizonCard key={globalIndex} action={action} index={globalIndex} />;
    case 8:
      return <ShutterApertureCard key={globalIndex} action={action} index={globalIndex} />;
    case 9:
      return <TrackSwitchCard key={globalIndex} action={action} index={globalIndex} />;
    default:
      return <StandardSwissActionCard key={globalIndex} action={action} />;
  }
}

export default function LookingAhead2026() {
  let cardCounter = 0;

  return (
    <section className="w-full bg-[#003461] text-white py-24 px-6 sm:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-20">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 font-manrope">
            2026 Actions
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl font-atkinson">
            In 2026, ETS will undertake the following infrastructure projects and improvements. The first 10 cards demonstrate 10 unique, interactive content revelation mechanics.
          </p>
        </header>

        <div className="space-y-24">
          {targets.map((target) => (
            <div key={target.id} className="space-y-8">
              <div>
                <span className="font-manrope text-xs uppercase tracking-widest text-[#F4B223] block mb-1 font-semibold">
                  Objective {target.id}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4 font-manrope">
                  {target.title}
                </h3>
                <p className="text-base text-white/80 max-w-3xl leading-relaxed font-atkinson">
                  {target.desc}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {target.actions.map((action: any) => {
                  const currentIndex = cardCounter;
                  cardCounter++;
                  return renderAnimatedActionCard(action, currentIndex);
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
