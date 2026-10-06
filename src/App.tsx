/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Message from './components/Message';
import Objectives from './components/Objectives';
import Impact from './components/Impact';
import Results2025 from './components/Results2025';
import RouteChanges from './components/RouteChanges';
import LookingAhead2026 from './components/LookingAhead2026';
import Dats50 from './components/Dats50';
import FinaleParallax from './components/FinaleParallax';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.45, 0.65, 0.8, 0.9, 1],
    ["#FFFFFF", "#F3F6F8", "#FFFFFF", "#E6EDF2", "#FFFFFF", "#F1F4F9", "#003461", "#003461"]
  );

  return (
    <motion.div style={{ backgroundColor }} className="w-full flex-grow flex flex-col relative text-on-background transition-colors duration-100 ease-linear">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#003461] focus:font-bold focus:shadow-lg focus:rounded focus:outline-none focus:ring-4 focus:ring-[#F4B223]">Skip to main content</a>
      <Nav />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col w-full overflow-x-hidden focus:outline-none">
        <Hero />
        <div id="message"><Message /></div>
        <div id="objectives"><Objectives /></div>
        <div id="impact"><Impact /></div>
        <div id="results"><Results2025 /></div>
        <div id="highlights">
          <Dats50 />
          <RouteChanges />
        </div>
        <div id="service-plan"><LookingAhead2026 /></div>
        <FinaleParallax />
      </main>
      <Footer />
    </motion.div>
  );
}
