import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import React, { useRef } from 'react';
import arcPay from '../assets/Arc Pay.png';
import lornaAward from '../assets/Lorna.png';
import cottImg from '../assets/COTT.png';
import transitCenter from '../assets/Transit Centre.png';

function TiltCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["1deg", "-1deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-1deg", "1deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const posX = (e.clientX - rect.left - midX) / rect.width;
    const posY = (e.clientY - rect.top - midY) / rect.height;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-xl -z-10" />
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="w-full bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-surface-variant h-full"
      >
         {children}
      </div>
    </motion.div>
  );
}

const results = [
  {
    id: '1',
    title: 'Convenient',
    description: 'In 2025, ETS prioritized initiatives to make transit a more seamless part of daily life. By reducing friction at the fare box and simplifying the digital experience, we aim to ensure the system is easy to use for all Edmontonians.',
    actions: [
      { icon: 'contactless', title: 'Arc Tap to Pay', desc: 'Expanded contactless payment across the entire fleet.' },
      { icon: 'confirmation_number', title: 'Ticket to Ride', desc: 'New simplified ticketing options for occasional riders.' },
      { icon: 'route', title: 'Updated ETS Trip Planner', desc: 'Overhauled digital interface for more intuitive navigation.' },
    ],
    metricsTitle: 'Performance Review',
    metrics: [
      { measure: 'Rider Satisfaction with Arc', target: '≥ 80%', result: '71%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'Rider Satisfaction with Availability to Find Information', target: '≥ 80%', result: '73%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'Rider Satisfaction with Number of Transfers', target: '≥ 80%', result: '66%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
    ],
    breakout: {
      type: 'split',
      bgColor: 'bg-surface-container-lowest',
      textColor: 'text-on-surface',
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
      { icon: 'traffic', title: 'Transit Priority Measures', desc: 'Planning, design and implementation along seven major corridors like Jasper Avenue and 97 Street, including bus priority lights, dedicated lanes, and signal timing changes.' },
      { icon: 'train', title: 'Light Rail Train (LRT) Replacement', desc: 'Hyundai Rotem selected to build the next generation of LRVs to replace U1 LRT cars, improving fleet reliability.' },
      { icon: 'schedule', title: 'New Bus Hours in April 2025', desc: 'Added 1,400 weekly service hours (50,000 annually) to improve reliability, frequency, and coverage.' },
    ],
    metricsTitle: 'Performance Review',
    metrics: [
      { measure: 'Rider Satisfaction with Bus/Train Arriving On-Time', target: '≥ 80%', result: '73%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'Bus On-Time Performance', target: '≥ 90%', result: '83%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'LRT On-Time Performance', target: '≥ 90%', result: '85%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'DATS On-Time Performance', target: '≥ 90%', result: '90%', status: '✅', statusColor: 'bg-primary/10 text-primary border-primary/20' },
    ],
    breakout: {
      type: 'split',
      bgColor: 'bg-[#F4B223]',
      textColor: 'text-[#004B87]',
      tagInfo: 'Award Recognition',
      title: 'Lorna Stewart Corporate Leadership Award',
      desc: "ETS is honoured to be the inaugural recipient of the CUTA Lorna Stewart Corporate Leadership Award for our work on the 'Get On Board' campaign. This award recognizes our partnership with the Canadian National Institute of the Blind (CNIB) to reduce barriers for riders with sight loss. It celebrates a service-wide effort to build a more inclusive system.\n\nThe first phase of the Get On Board campaign included: Enhancing LRT audio announcements, Improving high-contrast curbs and emergency alarm strips, Re-tiling edges of benches in LRT stations to improve visibility, Promoting rider respect and consideration through a public campaign.\n\nThis award is named in memory of Lorna Stewart, a former ETS employee and a tireless advocate for accessibility. Her legacy inspires our ongoing commitment to fostering an 'accessibility first' culture.",
      img: lornaAward,
      imgBorder: 'border-4 border-[#004B87]/10'
    }
  },
  {
    id: '3',
    title: 'Safe',
    description: 'Continue to implement and maintain comprehensive safety protocols and security measures across all aspects of Edmonton’s transit network, enabling the physical and psychological wellbeing of riders and employees.',
    actions: [
      { icon: 'security', title: 'Enhanced Transit Safety and Security Plan', desc: 'Adding 30 more Transit Peace Officers (TPOs) for a total of 126 by 2026, and actively removing Commissionaire security guards to centralize professional response teams.' },
      { icon: 'hub', title: "Wa'awiyagabi Outreach Space", desc: 'Opened at Central LRT Station, providing a centralized hub for outreach workers and TPOs to serve the community.' },
      { icon: 'campaign', title: '"Here to Help" Campaign', desc: 'High-visibility patrols by TPOs in and around transit spaces during the critical back-to-school season.' },
      { icon: 'psychology', title: 'Phase 2 of Auricle', desc: 'Collecting public insights on wellness and social connectedness to inform our ongoing work with marginalized populations.' },
      { icon: 'verified', title: 'COR Audit Completion', desc: 'Completing the Certificate of Recognition Audit to rigorously strengthen OHS safety standards for all employees.' },
    ],
    metricsTitle: 'Performance Review',
    metrics: [
      { measure: 'Rider Perceptions of Safety', target: '≥ 80%', result: '61%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'Non-Criminal Incidents', target: '≤ 0.1%', result: '0.06%', status: '✅', statusIconColor: 'text-primary', statusColor: 'bg-surface-container-high text-on-surface-variant border-outline-variant/30' },
    ],
    breakout: {
      type: 'split-reverse',
      bgColor: 'bg-[#004B87]',
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
      { icon: 'palette', title: 'Indigenous-inspired Bus Wrap', desc: 'Collaboration with Edmonton Aboriginal Seniors Centre featuring teepees and sweetgrass to inspire discussion about reconciliation.' },
      { icon: 'fact_check', title: 'DATS Eligibility Review', desc: 'Refined the client joining process to ensure service reaches those who need it most.' },
      { icon: 'blind', title: 'Rider Respect Campaign', desc: 'Partnered with CNIB to promote respectful behavior towards riders with disabilities, including physical improvements like curb painting.' },
      { icon: 'school', title: 'ETS 101 Travel Training', desc: 'Introducing Grade 6 students to transit trip planning, safety, and etiquette.' },
      { icon: 'grading', title: 'DATS Audit Action Plan', desc: 'Successfully implementing internal and customer-facing improvements ahead of schedule.' },
    ],
    metricsTitle: 'Performance Metrics',
    metrics: [
      { measure: 'Rider satisfaction with accessibility of bus stop/LRT station', target: '≥ 80%', result: '65%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
      { measure: 'Perception of fare affordability for the low income transit pass', target: '≥ 80%', result: '79%', status: '⬇️', statusColor: 'bg-error-container text-error border-error/20' },
    ],
    breakout: {
      type: 'full-image',
      img: transitCenter
    }
  }
];

export default function Results2025() {
  return (
    <div className="w-full">
      <div className="pt-32 w-full flex justify-center text-center">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F4B223] text-[#003461] rounded-full">
          <span className="font-label-sm text-[17px] font-bold uppercase tracking-widest">Results From 2025</span>
        </div>
      </div>
      {results.map((section, idx) => (
        <div key={section.id} className="w-full">
          <section className="section-symphonic px-gutter flex flex-col justify-center">
            <div className="max-w-content-narrow mx-auto w-full">
              <header className="mb-section-gap">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-secondary font-label-sm text-sm uppercase tracking-widest font-bold">
                    Objective {section.id}
                  </span>
                  <div className="h-px bg-outline-variant flex-grow"></div>
                </div>
                <h1 className="font-display-xl text-display-xl text-primary mb-8 uppercase tracking-tighter">
                  {section.title}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-4 border-primary pl-6">
                  {section.description}
                </p>
              </header>

              <div className="mb-section-gap w-full" style={{ perspective: "1000px" }}>
                <TiltCard>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-8 pb-4 border-b border-surface-variant">
                    Actions Implemented
                  </h2>
                  <ul className="space-y-6">
                    {section.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-4 group/action">
                        <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <div>
                          <h3 className="font-body-base text-body-base font-semibold text-on-surface">{action.title}</h3>
                          <p className="text-on-surface-variant mt-1 text-sm">{action.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>

              <div className="mt-section-gap">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-8">{section.metricsTitle}</h2>
                <div className="w-full bg-surface-container-lowest border-2 border-[#003461] rounded-xl overflow-hidden shadow-sm mt-4">
                  <div className="grid grid-cols-12 gap-4 pb-4 pt-6 px-6 border-b border-surface-variant font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <div className="col-span-8">Performance Measure</div>
                    <div className="col-span-2 text-right">Target</div>
                    <div className="col-span-2 text-right">Results</div>
                  </div>
                  <div className="flex flex-col">
                    {section.metrics.map((metric, i) => (
                      <div key={i} className="grid grid-cols-12 gap-4 py-6 px-6 border-b border-surface-variant items-center hover:bg-surface-container-low transition-colors duration-400 group">
                        <div className="col-span-8 font-body-base text-body-base text-on-surface pr-4">
                          {metric.measure}
                        </div>
                        <div className="col-span-2 text-right font-mono text-lg font-bold text-on-surface">
                          {metric.target}
                        </div>
                        <div className="col-span-2 flex justify-end">
                          <span className={`${metric.statusColor} px-3 py-1 rounded font-label-sm text-label-sm border inline-flex items-center gap-1`}>
                            {metric.result}
                            <span className={`text-[16px] grayscale contrast-125 opacity-70 ${metric.statusIconColor || ''}`}>{metric.status}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {section.breakout && (
            section.breakout.type === 'full-image' ? (
              <section className="w-full">
                <img alt="" aria-hidden="true" className="w-full h-auto object-cover block" src={section.breakout.img} />
              </section>
            ) : (
              <section className={`w-full ${section.breakout.bgColor} section-symphonic relative overflow-hidden`}>
                <div className="max-w-grid-wide mx-auto px-gutter relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    
                    {section.breakout.type === 'split-reverse' && (
                      <div className={`aspect-[4/3] rounded-2xl overflow-hidden relative group ${section.breakout.imgBorder || ''}`}>
                        <img alt="" aria-hidden="true" className="w-full h-full object-cover" src={section.breakout.img} />
                      </div>
                    )}

                    <div className={section.breakout.textColor}>
                      {section.breakout.tagInfo && (
                        <div className={`inline-flex items-center gap-2 bg-[#004B87]/10 text-[#004B87] px-3 py-1 rounded-full mb-4`}>
                          <span className="font-label-sm text-label-sm uppercase">{section.breakout.tagInfo}</span>
                        </div>
                      )}
                      
                      <h3 className={`font-headline-lg text-headline-lg mb-6 ${section.breakout.textColor}`}>{section.breakout.title}</h3>
                      
                      <div className={`space-y-4 font-body-base text-body-base ${section.breakout.textColor} ${section.breakout.type === 'split-reverse' ? 'opacity-90' : ''}`}>
                        {section.breakout.desc.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>

                    </div>

                    {section.breakout.type === 'split' && (
                      <div className={`aspect-square bg-surface-container rounded-2xl overflow-hidden relative group ${section.breakout.imgBorder || ''}`}>
                        <img alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={section.breakout.img} />
                      </div>
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
