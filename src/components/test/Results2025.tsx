import { motion } from 'motion/react';
import React from 'react';
import arcPay from '../../assets/Arc Pay.png';
import lornaAward from '../../assets/Lorna.png';
import cottImg from '../../assets/COTT.png';
import transitCenter from '../../assets/Transit Centre.png';
import SpotlightCard from './bits/SpotlightCard';

const results = [
  {
    id: '1',
    title: 'Convenient',
    description: 'In 2025, ETS prioritized initiatives to make transit a more seamless part of daily life. By reducing friction at the fare box and simplifying the digital experience, we aim to ensure the system is easy to use for all Edmontonians.',
    actions: [
      { title: 'Arc Tap to Pay', desc: 'Expanded contactless payment across the entire fleet.' },
      { title: 'Ticket to Ride', desc: 'New simplified ticketing options for occasional riders.' },
      { title: 'Updated ETS Trip Planner', desc: 'Overhauled digital interface for more intuitive navigation.' },
    ],
    metrics: [
      { measure: 'Rider Satisfaction with Arc', target: '≥ 80%', result: '71%', trend: 'below', trendLabel: '▼' },
      { measure: 'Rider Satisfaction with Availability to Find Information', target: '≥ 80%', result: '73%', trend: 'below', trendLabel: '▼' },
      { measure: 'Rider Satisfaction with Number of Transfers', target: '≥ 80%', result: '66%', trend: 'below', trendLabel: '▼' },
    ],
    breakout: {
      type: 'split',
      bgColor: 'bg-[#F5FAFF]',
      textColor: 'text-neutral-900',
      title: 'Arc Tap to Pay',
      desc: 'Arc tap to pay allows riders in the Edmonton region to use physical or digital credit/debit cards (Visa, Mastercard, Amex, Interac) or mobile wallets (Apple Pay, Google Wallet, Samsung Wallet) directly on validators. Tap on and off every trip to ensure correct fare calculation and to receive daily/monthly fare capping',
      img: arcPay,
    }
  },
  {
    id: '2',
    title: 'Reliable',
    description: 'Provide consistent, on-time service with minimal disruptions, ensuring predictable and dependable transportation for all riders.',
    actions: [
      { title: 'Transit Priority Measures', desc: 'Planning, design and implementation along seven major corridors like Jasper Avenue and 97 Street, including bus priority lights, dedicated lanes, and signal timing changes.' },
      { title: 'Light Rail Train (LRT) Replacement', desc: 'Hyundai Rotem selected to build the next generation of LRVs to replace U1 LRT cars, improving fleet reliability.' },
      { title: 'New Bus Hours in April 2025', desc: 'Added 1,400 weekly service hours (50,000 annually) to improve reliability, frequency, and coverage.' },
    ],
    metrics: [
      { measure: 'Rider Satisfaction with Bus/Train Arriving On-Time', target: '≥ 80%', result: '73%', trend: 'below', trendLabel: '▼' },
      { measure: 'Bus On-Time Performance', target: '≥ 90%', result: '83%', trend: 'below', trendLabel: '▼' },
      { measure: 'LRT On-Time Performance', target: '≥ 90%', result: '85%', trend: 'below', trendLabel: '▼' },
      { measure: 'DATS On-Time Performance', target: '≥ 90%', result: '90%', trend: 'met', trendLabel: '▲' },
    ],
    breakout: {
      type: 'split',
      bgColor: 'bg-[#F4B223]',
      textColor: 'text-[#003461]',
      tagInfo: 'Award Recognition',
      title: 'Lorna Stewart Corporate Leadership Award',
      desc: "ETS is honoured to be the inaugural recipient of the CUTA Lorna Stewart Corporate Leadership Award for our work on the 'Get On Board' campaign. This award recognizes our partnership with the Canadian National Institute of the Blind (CNIB) to reduce barriers for riders with sight loss. It celebrates a service-wide effort to build a more inclusive system.\n\nThe first phase of the Get On Board campaign included: Enhancing LRT audio announcements, Improving high-contrast curbs and emergency alarm strips, Re-tiling edges of benches in LRT stations to improve visibility, Promoting rider respect and consideration through a public campaign.\n\nThis award is named in memory of Lorna Stewart, a former ETS employee and a tireless advocate for accessibility. Her legacy inspires our ongoing commitment to fostering an 'accessibility first' culture.",
      img: lornaAward,
    }
  },
  {
    id: '3',
    title: 'Safe',
    description: 'Continue to implement and maintain comprehensive safety protocols and security measures across all aspects of Edmonton’s transit network, enabling the physical and psychological wellbeing of riders and employees.',
    actions: [
      { title: 'Enhanced Transit Safety and Security Plan', desc: 'Adding 30 more Transit Peace Officers (TPOs) for a total of 126 by 2026, and actively removing Commissionaire security guards to centralize professional response teams.' },
      { title: "Wa'awiyagabi Outreach Space", desc: 'Opened at Central LRT Station, providing a centralized hub for outreach workers and TPOs to serve the community.' },
      { title: '"Here to Help" Campaign', desc: 'High-visibility patrols by TPOs in and around transit spaces during the critical back-to-school season.' },
      { title: 'Phase 2 of Auricle', desc: 'Collecting public insights on wellness and social connectedness to inform our ongoing work with marginalized populations.' },
      { title: 'COR Audit Completion', desc: 'Completing the Certificate of Recognition Audit to rigorously strengthen OHS safety standards for all employees.' },
    ],
    metrics: [
      { measure: 'Rider Perceptions of Safety', target: '≥ 80%', result: '61%', trend: 'below', trendLabel: '▼' },
      { measure: 'Non-Criminal Incidents', target: '≤ 0.1%', result: '0.06%', trend: 'met', trendLabel: '▲' },
    ],
    breakout: {
      type: 'split-reverse',
      bgColor: 'bg-[#003461]',
      textColor: 'text-white',
      title: 'Community Outreach Transit Team (COTT)',
      desc: 'The Community Outreach Transit Team (COTT) is a partnership between the City of Edmonton and the Bent Arrow Traditional Healing Society. Our goal is to build relationships and connect individuals within the transit system to community support and resources to increase safety and reduce harm.',
      img: cottImg,
    }
  },
  {
    id: '4',
    title: 'Accessible and Inclusive',
    description: "Ensure Edmonton's diverse communities have equitable and dignified access to transportation. This involves designing universally accessible services, vehicles and information, and actively engaging the community.",
    actions: [
      { title: 'Indigenous-inspired Bus Wrap', desc: 'Collaboration with Edmonton Aboriginal Seniors Centre featuring teepees and sweetgrass to inspire discussion about reconciliation.' },
      { title: 'DATS Eligibility Review', desc: 'Refined the client joining process to ensure service reaches those who need it most.' },
      { title: 'Rider Respect Campaign', desc: 'Partnered with CNIB to promote respectful behavior towards riders with disabilities, including physical improvements like curb painting.' },
      { title: 'ETS 101 Travel Training', desc: 'Introducing Grade 6 students to transit trip planning, safety, and etiquette.' },
      { title: 'DATS Audit Action Plan', desc: 'Successfully implementing internal and customer-facing improvements ahead of schedule.' },
    ],
    metrics: [
      { measure: 'Rider satisfaction with accessibility of bus stop/LRT station', target: '≥ 80%', result: '65%', trend: 'below', trendLabel: '▼' },
      { measure: 'Perception of fare affordability for the low income transit pass', target: '≥ 80%', result: '79%', trend: 'below', trendLabel: '▼' },
    ],
    breakout: {
      type: 'full-image',
      img: transitCenter
    }
  }
];

export default function Results2025() {
  return (
    <div className="w-full bg-white text-neutral-900">
      {/* Swiss Section Header */}
      <div className="py-20 px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#003461]">
          Results From 2025
        </h2>
      </div>

      {results.map((section) => (
        <div key={section.id} className="w-full mb-28">
          <section className="px-6 sm:px-12 lg:px-16 max-w-[1400px] mx-auto">
            {/* Objective Header */}
            <header className="mb-14">
              <div className="font-manrope text-sm uppercase tracking-widest text-[#F4B223] font-bold mb-2">
                Objective {section.id}
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#003461] mb-6">
                {section.title}
              </h3>
              <p className="text-lg text-neutral-700 max-w-3xl leading-relaxed">
                {section.description}
              </p>
            </header>

            {/* Actions Implemented with Spotlight Interaction */}
            <div className="mb-16">
              <span className="font-manrope text-xs uppercase tracking-widest text-neutral-500 block mb-6">
                Actions Implemented
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.actions.map((action, i) => (
                  <SpotlightCard
                    key={i}
                    spotlightColor="rgba(0, 52, 97, 0.08)"
                    className="bg-[#F5FAFF] p-8 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-6 h-0.5 bg-[#F4B223] mb-4"></div>
                      <h4 className="font-bold text-[#003461] text-lg mb-2 font-manrope">
                        {action.title}
                      </h4>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        {action.desc}
                      </p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Metrics Table with Non-Emoji Trend Indicators */}
            <div className="mb-16">
              <div className="w-full">
                <div className="grid grid-cols-12 gap-4 pb-3 border-b-2 border-neutral-900 font-manrope text-xs uppercase tracking-wider text-neutral-500">
                  <div className="col-span-7 sm:col-span-8">Performance Measure</div>
                  <div className="col-span-2 text-right">Target</div>
                  <div className="col-span-3 sm:col-span-2 text-right">Result</div>
                </div>
                <div className="divide-y divide-neutral-100">
                  {section.metrics.map((metric, i) => {
                    const isMet = metric.trend === 'met';
                    return (
                      <div key={i} className="grid grid-cols-12 gap-4 py-5 items-center">
                        <div className="col-span-7 sm:col-span-8 text-neutral-900 font-medium text-sm sm:text-base">
                          {metric.measure}
                        </div>
                        <div className="col-span-2 text-right font-manrope text-sm sm:text-base text-neutral-600">
                          {metric.target}
                        </div>
                        <div className="col-span-3 sm:col-span-2 flex justify-end">
                          <span
                            className={`px-3 py-1 font-manrope text-xs font-bold inline-flex items-center gap-2 ${
                              isMet
                                ? 'bg-emerald-50 text-emerald-800'
                                : 'bg-red-50 text-red-800'
                            }`}
                          >
                            <span>{metric.result}</span>
                            <span className="text-[11px] font-mono leading-none">
                              {metric.trendLabel}
                            </span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Breakout Showcase */}
          {section.breakout && (
            section.breakout.type === 'full-image' ? (
              <section className="w-full my-8">
                <img alt="" aria-hidden="true" className="w-full h-auto object-cover block" src={section.breakout.img} />
              </section>
            ) : (
              <section className={`w-full ${section.breakout.bgColor} py-16 px-6 sm:px-12 lg:px-16 my-8`}>
                <div className="max-w-[1400px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {section.breakout.type === 'split-reverse' ? (
                      <>
                        <div className="lg:col-span-6 overflow-hidden">
                          <img alt="" aria-hidden="true" className="w-full h-auto object-cover block" src={section.breakout.img} />
                        </div>
                        <div className={`lg:col-span-6 ${section.breakout.textColor}`}>
                          <h4 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-6">
                            {section.breakout.title}
                          </h4>
                          <p className="text-base sm:text-lg leading-relaxed opacity-90">
                            {section.breakout.desc}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`lg:col-span-7 ${section.breakout.textColor}`}>
                          {section.breakout.tagInfo && (
                            <span className="font-manrope text-xs uppercase tracking-widest block mb-3 font-bold opacity-80">
                              {section.breakout.tagInfo}
                            </span>
                          )}
                          <h4 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-6">
                            {section.breakout.title}
                          </h4>
                          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                            {section.breakout.desc.split('\n\n').map((para, i) => (
                              <p key={i}>{para}</p>
                            ))}
                          </div>
                        </div>
                        <div className="lg:col-span-5 overflow-hidden">
                          <img alt="" aria-hidden="true" className="w-full h-auto object-cover block" src={section.breakout.img} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            )
          )}
        </div>
      ))}
    </div>
  );
}
