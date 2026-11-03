import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MotionConfig } from 'motion/react';
import { MotionProvider, useMotionPreference } from './context/MotionContext.tsx';
import './index.css';

function MotionControlledApp() {
  const { animationsEnabled } = useMotionPreference();
  return (
    <MotionConfig reducedMotion={animationsEnabled ? 'user' : 'always'}>
      <App />
    </MotionConfig>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionProvider>
      <MotionControlledApp />
    </MotionProvider>
  </StrictMode>,
);

