import React from 'react';

interface ShimmerBoxProps {
  children?: React.ReactNode;
  className?: string;
}

export function ShimmerBox({ children, className = '' }: ShimmerBoxProps) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {/* 2% Subdued Angled Sheen */}
      <div
        className="absolute inset-0 pointer-events-none -translate-x-full animate-[shimmer_3.5s_infinite_ease-in-out]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(244, 178, 35, 0.04) 50%, transparent 100%)',
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

export default ShimmerBox;
