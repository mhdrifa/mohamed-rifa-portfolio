import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROFILE } from '../../data/profile';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setVisible(false);
      onComplete();
      return;
    }

    let settled = false;

    const updateProgress = (target: number) => {
      setProgress((prev) => (target > prev ? target : prev));
    };

    // Track real document + font readiness without artificial blocking delays
    updateProgress(35);

    if (document.readyState === 'interactive') {
      updateProgress(65);
    } else if (document.readyState === 'complete') {
      updateProgress(90);
    }

    const handleReadyState = () => {
      if (document.readyState === 'interactive') updateProgress(65);
      if (document.readyState === 'complete') finishLoading();
    };

    const finishLoading = () => {
      if (settled) return;
      settled = true;
      updateProgress(100);
      setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 280);
    };

    document.addEventListener('readystatechange', handleReadyState);

    // Font readiness check
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        updateProgress(85);
        if (document.readyState === 'complete') {
          finishLoading();
        }
      });
    }

    // Safety ceiling so initial content render is never blocked
    const fallbackTimer = window.setTimeout(() => {
      finishLoading();
    }, 900);

    return () => {
      document.removeEventListener('readystatechange', handleReadyState);
      window.clearTimeout(fallbackTimer);
    };
  }, [onComplete, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070D] px-6"
        >
          <div className="w-full max-w-xs text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex flex-col items-center"
            >
              <div className="h-14 w-14 rounded-xl border border-[#00E5FF]/40 bg-[#101827]/80 flex items-center justify-center shadow-cyanGlow mb-4">
                <span className="font-display text-xl font-bold tracking-wider text-[#F8FAFC]">
                  {PROFILE.monogram}
                </span>
              </div>
              <span className="font-display text-lg tracking-[0.35em] text-[#F8FAFC]">
                {PROFILE.wordmark}.
              </span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[#94A3B8]">
                Data &amp; Software Systems
              </span>
            </motion.div>

            <div className="space-y-2">
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between font-mono text-[11px] text-[#94A3B8]">
                <span>INITIALIZING WORKSPACE</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
