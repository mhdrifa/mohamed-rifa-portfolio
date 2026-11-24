import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/profile';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

/**
 * Realistic 2.5D layered portrait composition using Mohamed Rifa's actual photograph.
 * Preserves authentic facial features and identity while adding depth rings,
 * soft cyan/violet rim lights, and controlled desktop mouse parallax.
 */
export function PortraitScene() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = usePrefersReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateX: -ny * 8,
      rotateY: nx * 10,
      x: nx * 12,
      y: ny * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[390px] sm:max-w-[430px] select-none"
      style={{ perspective: '1100px' }}
    >
      {/* Back depth orbital rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full border border-[#00E5FF]/15"
        style={{
          transform: `translate3d(${-tilt.x * 0.7}px, ${-tilt.y * 0.7}px, 0)`,
          transition: 'transform 0.25s ease-out',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-3xl border border-[#8B5CF6]/20 rotate-2"
        style={{
          transform: `translate3d(${-tilt.x * 0.4}px, ${-tilt.y * 0.4}px, 0) rotate(2deg)`,
          transition: 'transform 0.25s ease-out',
        }}
      />

      {/* Cyan & Violet rim light glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-6 h-48 w-48 rounded-full bg-[#00E5FF]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-6 h-52 w-52 rounded-full bg-[#8B5CF6]/25 blur-3xl"
      />

      {/* Layered 2.5D portrait card */}
      <div
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#101827] shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition:
            tilt.rotateX === 0 && tilt.rotateY === 0
              ? 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Rim border highlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-[#00E5FF]/15 via-transparent to-[#8B5CF6]/20 mix-blend-screen"
        />

        {/* Actual Photograph */}
        <div className="relative aspect-[4/4.6] w-full bg-[#05070D]">
          {!imgError ? (
            <img
              src={PROFILE.portrait.src}
              alt={PROFILE.portrait.alt}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00E5FF]/40 bg-[#101827] font-display text-2xl font-bold text-[#F8FAFC]">
                {PROFILE.monogram}
              </div>
              <p className="font-mono text-xs text-[#00E5FF]">
                PORTRAIT ASSET READY FOR PLACEMENT
              </p>
              <p className="mt-2 text-xs text-[#94A3B8]">
                Save your uploaded photograph to{' '}
                <code className="text-[#F8FAFC]">public/images/mohamed-rifa-portrait.jpg</code>
              </p>
            </div>
          )}

          {/* Subtle bottom vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070D]/90 via-[#05070D]/40 to-transparent"
          />
        </div>

        {/* Floating Glass Depth Badge */}
        <div
          className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-2xl border border-white/15 bg-[#05070D]/75 px-4 py-3 backdrop-blur-md"
          style={{
            transform: `translate3d(${tilt.x * 0.5}px, ${tilt.y * 0.5}px, 24px)`,
            transition: 'transform 0.25s ease-out',
          }}
        >
          <div>
            <p className="font-display text-sm font-semibold text-[#F8FAFC]">
              {PROFILE.name}
            </p>
            <p className="font-mono text-[11px] text-[#00E5FF]">
              University of Ruhuna • CS
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            2027 Intern
          </span>
        </div>
      </div>
    </motion.div>
  );
}
