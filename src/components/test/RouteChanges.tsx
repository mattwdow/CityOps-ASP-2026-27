import React from 'react';
import { motion } from 'motion/react';

// Structured operational dataset matching 100% of the raw narrative and route catalog
const successStories = [
  {
    route: 'Route 729',
    metric: 'Scheduled Expansion',
    title: 'High First-Year Ridership',
    detail: 'High first-year ridership has triggered scheduled service expansions for 2026.'
  },
  {
    route: 'Express Route 31',
    metric: '+21% YoY',
    title: 'BRT Proof of Concept',
    detail: 'Recorded 21% year-over-year growth (Sept 2024–2025), validating demand for high-speed corridors.'
  },
  {
    route: 'Crosstown Routes',
    metric: 'Annual Additions',
    title: 'Crosstown Performance',
    detail: 'Continuous ridership increases on crosstown routes are being met with annual service additions.'
  },
  {
    route: 'Route 747',
    metric: '+13% Growth',
    title: 'Airport Corridor',
    detail: 'Ridership growth drove the decision to increase frequency across all off-peak time periods.'
  },
  {
    route: 'On-Demand Transit',
    metric: 'Zero Denials Focus',
    title: 'Microtransit Reliability',
    detail: 'Reduced booking denials ("seat unavailable") and stabilized completed trip volume.'
  }
];

const serviceEnhancements = [
  {
    category: 'Peak Frequency Improvements',
    items: [
      { route: 'Route 916', desc: 'Weekday AM Peak direction frequency improved to every 7/8 minutes.' },
      { route: 'Route 920X', desc: 'Weekday PM Peak frequency improved to every 12 minutes.' },
      { route: 'Route 930X', desc: 'Weekday AM Peak frequency improved to every 12 minutes.' },
    ]
  },
  {
    category: 'Off-Peak Frequency Improvements',
    items: [
      { route: 'Route 53', desc: 'Weekday Midday frequency improved to every 20 minutes.' },
      { route: 'Route 54', desc: 'Weekday Midday frequency improved to every 20 minutes.' },
      { route: 'Route 56', desc: 'Weekday Early Evening to every 20 min; Sunday Midday to every 15 min.' },
    ]
  },
  {
    category: 'Extra Trip Additions',
    items: [
      { route: 'Route 56', desc: 'Added extra trips during Weekday AM and PM Peak.' },
      { route: 'Route 721', desc: 'Added extra trips during Weekday Early Morning.' },
      { route: 'Route 729', desc: 'Added extra trips during Weekday AM Peak.' },
      { route: 'Route 901', desc: 'Added extra trips during Weekday Early Morning.' },
    ]
  },
  {
    category: 'Network Extensions and Reroutes',
    items: [
      { route: 'Route 52', desc: 'Rerouted between 107 Ave and 111 Ave (149 St to 156 St) to increase industrial access.' },
      { route: 'Route 111', desc: 'Rerouted to Westmount Transit Centre travelling westbound based on rider demand.' },
      { route: 'Route 128', desc: 'Rerouted onto Northgate Centre property to access commercial and job centers.' },
      { route: 'Route 516', desc: 'Extended to 17 St and 19 Ave to respond to Aster neighbourhood growth.' },
      { route: 'Route 521', desc: 'Extended to Orchards Blvd and Orchards Rd to respond to Orchards at Ellerslie growth.' },
    ]
  },
  {
    category: 'Span of Service and School Specials',
    items: [
      { route: 'Routes 52 and 53', desc: 'Weekday Early Morning service begins 30 minutes earlier.' },
      { route: 'Route 54', desc: 'Weekday PM Peak extended 1 hour later; Sunday Morning begins 1 hour earlier.' },
      { route: 'Route 107', desc: 'Weekend morning service added; service extended to midnight 7 days a week.' },
      { route: 'Route 521', desc: 'Weekday Late Evening service added.' },
      { route: 'School Specials', desc: 'New service to St. Carlo Acutis and Father Michael McCaffery schools. Additional capacity on Routes 56, 707, 718, and 926 for Dr. Anne Anderson and Elder Dr. Francis Whiskeyjack schools.' },
    ]
  }
];

const serviceReductions = [
  {
    category: 'Peak Frequency Reductions',
    items: [
      { route: 'Route 3', desc: 'Weekday AM and PM Peak adjusted to every 12 minutes.' },
      { route: 'Route 508', desc: 'Weekday AM and PM Peak adjusted to every 20 minutes.' },
      { route: 'Route 916', desc: 'Weekday AM and PM Off-peak direction adjusted to every 20 minutes.' },
      { route: 'Route 917', desc: 'Weekday AM and PM Off-peak direction adjusted to every 30 minutes.' },
    ]
  },
  {
    category: 'Off-Peak Frequency Reductions',
    items: [
      { route: 'Route 113', desc: 'Saturday and Sunday Late Evening adjusted to every 60 minutes.' },
      { route: 'Route 501', desc: 'Saturday and Sunday Morning adjusted to every 60 minutes.' },
      { route: 'Route 721', desc: 'Sunday Late Evening adjusted to every 60 minutes.' },
      { route: 'Route 722', desc: 'Sunday Late Evening adjusted to every 60 minutes.' },
    ]
  },
  {
    category: 'Trip Cancellations and Span Reductions',
    items: [
      { route: 'Weekday First Trips', desc: 'Routes 130X, 150X, 512, 700X, 701, 703, 706, 724, 904, and 909.' },
      { route: 'Weekday Last Trips', desc: 'Routes 1, 130X, 140X, 150X, 700X, 715, 721, 902, 903, 904, 913, and 914.' },
      { route: 'Weekend First/Last', desc: 'Saturday first/last trips on Routes 1, 701, 707, 708, 909, 914, 918. Sunday first/last on Routes 113, 701, 708.' },
      { route: 'Span of Service', desc: 'Route 9 (AM short trips 30 min later), Route 101 (Sunday AM and late evening cancelled), Route 124 (late evening cancelled), Route 501 (early AM 30 min later). Routes 703, 706, 713, 904, 909, 917 early/late service adjusted.' },
      { route: 'Route Cancellations', desc: 'Route 522 (partially replaced by On-Demand). Route 676 (St. Thomas More school special; alternate service on Routes 7, 914, 915).' },
    ]
  }
];

export default function RouteChanges() {
  return (
    <section 
      id="route-changes"
      aria-label="ETS Service Plan 2025-26"
      className="w-full bg-white text-[#003461] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-neutral-200 select-none font-manrope"
    >
      <div className="max-w-[1520px] mx-auto space-y-12 font-manrope">
        
        {/* ========================================================
            MASTER SECTION HEADER
           ======================================================== */}
        <header className="border-b-2 border-[#003461] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4 font-manrope">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#003461] font-manrope">
              ETS Service Plan 2025–26
            </h2>
          </div>
        </header>

        {/* ========================================================
            EXECUTIVE METRIC SUMMARY (Non-Rounded Swiss Data Grid)
           ======================================================== */}
        <div className="border-t border-l border-neutral-200 bg-white font-manrope">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            
            <div className="group relative p-5 sm:p-6 lg:p-7 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[145px] lg:min-h-[160px] hover:bg-[#F8FAFC] transition-colors">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="my-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#003461] font-manrope">
                  +50,000
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-600 block mt-1 font-manrope">Annual Service Hours</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-manrope">
                Delivered across the network to address crowding and schedule reliability.
              </p>
            </div>

            <div className="group relative p-5 sm:p-6 lg:p-7 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[145px] lg:min-h-[160px] hover:bg-[#F8FAFC] transition-colors">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="my-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#003461] font-manrope">
                  20 Buses
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-600 block mt-1 font-manrope">Supplying Added Hours</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-manrope">
                Deployed immediately to relieve peak corridors and high school pressures.
              </p>
            </div>

            <div className="group relative p-5 sm:p-6 lg:p-7 border-r border-b border-neutral-200 flex flex-col justify-between min-h-[145px] lg:min-h-[160px] hover:bg-[#F8FAFC] transition-colors">
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="my-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#003461] font-manrope">
                  25 Buses
                </span>
                <span className="text-xs sm:text-sm font-bold text-neutral-600 block mt-1 font-manrope">Council Approved Plan</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-manrope">
                Transitioning three high-volume On Demand zones to conventional transit.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================
            STRATEGIC CONTEXT AND 2025 SUCCESS STORIES
           ======================================================== */}
        <div className="border-t border-l border-neutral-200 bg-white font-manrope">
          <div className="grid grid-cols-1 xl:grid-cols-12">
            
            {/* Strategic Overview (Cols 1-7 on xl, full width on laptop) */}
            <div className="xl:col-span-7 p-6 sm:p-8 lg:p-9 border-r border-b border-neutral-200 flex flex-col justify-between space-y-6 font-manrope">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#003461] mb-5 font-manrope">
                  Ridership Dynamics and Resource Allocation
                </h3>
                <div className="text-base sm:text-lg text-neutral-700 space-y-5 leading-relaxed font-normal font-manrope">
                  <p>
                    ETS continues to see positive trends in overall ridership, requiring service adjustments to meet evolving community needs. After several years of rapid post-pandemic recovery, ridership levelled off in 2025 due to the province-wide teachers' strike in October and major construction projects impacting corridor performance.
                  </p>
                  <p>
                    While Edmonton continues to expand, population growth was modest compared to prior years. Increased vehicle sales within Alberta suggest personal vehicles may potentially offset transit trips, supported by lower fuel prices and the elimination of the federal carbon tax.
                  </p>
                  <p>
                    Despite this plateau, acute route-level pressures persist. Rapidly developing outer neighbourhoods require new connections, while core corridors experience overcrowding and congestion-related delays. To maintain reliability within existing garage constraints, ETS reallocated resources strategically from low-demand trips to high-priority corridors and growing school communities.
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 Success Stories Grid (Cols 8-12 on xl, full width on laptop) */}
            <div className="xl:col-span-5 p-6 sm:p-8 lg:p-9 border-r border-b border-neutral-200 flex flex-col justify-between space-y-6 font-manrope">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#003461] mb-5 font-manrope">
                  2025 Success Stories
                </h3>
                
                <div className="divide-y divide-neutral-200">
                  {successStories.map((story, i) => (
                    <div key={i} className="py-4 first:pt-0 last:pb-0 group font-manrope">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs font-bold text-[#003461] uppercase tracking-wide font-manrope">
                          {story.route}
                        </span>
                        <span className="text-[11px] font-bold text-[#003461] bg-neutral-100 px-2 py-0.5 border border-neutral-300 font-manrope">
                          {story.metric}
                        </span>
                      </div>
                      <div className="text-base font-bold text-neutral-900 font-manrope">
                        {story.title}
                      </div>
                      <p className="text-sm text-neutral-600 mt-1 leading-relaxed font-manrope">
                        {story.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            NETWORK SERVICE LEDGER: ENHANCEMENTS VS REDUCTIONS
           ======================================================== */}
        <div className="border-t border-l border-neutral-200 bg-white font-manrope">
          <div className="grid grid-cols-1 xl:grid-cols-12">
            
            {/* Column 1: Service Enhancements */}
            <div className="xl:col-span-7 border-r border-b border-neutral-200 p-6 sm:p-8 lg:p-9 space-y-8 font-manrope">
              <div className="border-b border-neutral-200 pb-4">
                <h4 className="text-2xl font-black uppercase tracking-tight text-[#003461] font-manrope">
                  Service Enhancements
                </h4>
              </div>

              <div className="space-y-8 font-manrope">
                {serviceEnhancements.map((cat, idx) => (
                  <div key={idx} className="space-y-3 font-manrope">
                    <span className="text-xs uppercase tracking-wider font-bold text-neutral-500 block font-manrope">
                      {cat.category}
                    </span>
                    <div className="space-y-1 font-manrope">
                      {cat.items.map((item, i) => (
                        <div 
                          key={i} 
                          className="p-3.5 border border-transparent hover:border-neutral-300 hover:bg-[#F8FAFC] transition-all flex flex-col sm:flex-row sm:items-baseline gap-2.5 font-manrope"
                        >
                          <span className="text-sm font-bold text-[#003461] shrink-0 sm:w-36 font-manrope">
                            {item.route}
                          </span>
                          <span className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal font-manrope">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Service Reductions */}
            <div className="xl:col-span-5 border-r border-b border-neutral-200 p-6 sm:p-8 lg:p-9 space-y-8 font-manrope">
              <div className="border-b border-neutral-200 pb-4">
                <h4 className="text-2xl font-black uppercase tracking-tight text-[#003461] font-manrope">
                  Service Reductions
                </h4>
              </div>

              <div className="space-y-8 font-manrope">
                {serviceReductions.map((cat, idx) => (
                  <div key={idx} className="space-y-3 font-manrope">
                    <span className="text-xs uppercase tracking-wider font-bold text-neutral-500 block font-manrope">
                      {cat.category}
                    </span>
                    <div className="space-y-1 font-manrope">
                      {cat.items.map((item, i) => (
                        <div 
                          key={i} 
                          className="p-3.5 border border-transparent hover:border-neutral-300 hover:bg-[#F8FAFC] transition-all flex flex-col gap-1 font-manrope"
                        >
                          <span className="text-sm font-bold text-[#003461] font-manrope">
                            {item.route}
                          </span>
                          <span className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal font-manrope">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}