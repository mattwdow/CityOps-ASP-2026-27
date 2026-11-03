import React, { createContext, useContext, useState, useEffect } from 'react';

interface MotionContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  setAnimationsEnabled: (enabled: boolean) => void;
}

const MotionContext = createContext<MotionContextType>({
  animationsEnabled: true,
  toggleAnimations: () => {},
  setAnimationsEnabled: () => {},
});

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check localStorage or default to true
  const [animationsEnabled, setAnimationsEnabledState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('cityops_motion_enabled');
      if (saved !== null) {
        return saved === 'true';
      }
    } catch {
      // Ignore localStorage read errors
    }
    return true;
  });

  const setAnimationsEnabled = (enabled: boolean) => {
    setAnimationsEnabledState(enabled);
    try {
      localStorage.setItem('cityops_motion_enabled', String(enabled));
    } catch {
      // Ignore localStorage write errors
    }
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  // Sync state to HTML tag attribute for global CSS override
  useEffect(() => {
    const root = document.documentElement;
    if (animationsEnabled) {
      root.removeAttribute('data-reduced-motion');
    } else {
      root.setAttribute('data-reduced-motion', 'true');
    }
  }, [animationsEnabled]);

  return (
    <MotionContext.Provider value={{ animationsEnabled, toggleAnimations, setAnimationsEnabled }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotionPreference = () => useContext(MotionContext);
