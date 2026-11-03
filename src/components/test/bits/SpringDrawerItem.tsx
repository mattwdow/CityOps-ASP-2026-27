import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SpringDrawerItemProps {
  title: string;
  frontSummary: string;
  detailedText: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function SpringDrawerItem({
  title,
  frontSummary,
  detailedText,
  isOpen,
  onToggle,
}: SpringDrawerItemProps) {
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 220, damping: 25 }}
      onClick={onToggle}
      className="bg-[#002B50] p-6 sm:p-8 cursor-pointer select-none transition-colors duration-200 hover:bg-[#003866]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold text-white mb-2 leading-tight font-manrope">
            {title}
          </h4>
          <p className="text-sm text-white/80 leading-relaxed font-manrope">
            {frontSummary}
          </p>
        </div>
        <span className="font-manrope text-base text-[#F4B223] font-bold shrink-0 pt-1">
          {isOpen ? '—' : '+'}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-white/10 text-white/90 text-sm sm:text-base leading-relaxed font-manrope whitespace-pre-wrap">
              {detailedText}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SpringDrawerItem;
