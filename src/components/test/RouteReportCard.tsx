import React from 'react';
import RouteMapBillboard from './RouteMapBillboard';

export default function RouteReportCard() {
  return (
    <section id="route-report-card" className="w-full bg-[#00213d] text-white pt-20 pb-0 overflow-hidden">
      {/* Section Header with generous margin */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 mb-10">
        <div className="w-14 h-1 bg-[#F4B223] mb-4"></div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 font-manrope">
          Route Performance Report Card
        </h2>
        <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-golden font-atkinson">
          Interactive GTFS spatial network evaluation. Filter Edmonton bus corridors by transit equity stability classifications, inspect composite route scores, and evaluate ridership catchment dynamics.
        </p>
      </div>

      {/* Full-Bleed Edge-to-Edge Billboard Canvas */}
      <div className="w-full border-t border-b border-white/10">
        <RouteMapBillboard />
      </div>
    </section>
  );
}
