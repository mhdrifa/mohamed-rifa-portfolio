import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { PortraitScene } from '../three/PortraitScene';
import { MagneticButton } from '../ui/MagneticButton';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const LaptopScene = lazy(() =>
  import('../three/LaptopScene').then((mod) => ({ default: mod.LaptopScene }))
);

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-tech-grid"
    >
      {/* Atmospheric background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#00E5FF]/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-[#8B5CF6]/[0.09] blur-[130px]"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="font-mono text-xs tracking-wide text-[#00E5FF]">
                {PROFILE.statusBadge}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="space-y-2"
            >
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-[#94A3B8]">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC]">
                {PROFILE.name}
              </h1>
            </motion.div>

            {/* Animated Role Switcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.16 }}
              className="h-8 flex items-center"
            >
              <span className="font-display text-lg sm:text-2xl font-medium text-gradient-accent">
                {PROFILE.roles[roleIndex]}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-[#94A3B8]"
            >
              {PROFILE.heroDescription}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton>
                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#38BDF8] px-6 py-3.5 text-sm font-semibold text-[#05070D] shadow-cyanGlow hover:brightness-110 transition-all"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={PROFILE.links.cvUrl}
                  download
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-[#101827]/80 px-6 py-3.5 text-sm font-medium text-[#F8FAFC] hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download CV</span>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              {PROFILE.links.linkedin && (
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              )}

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contact</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Layered Portrait + Interactive 3D Laptop */}
          <div className="lg:col-span-6 space-y-6">
            <PortraitScene />

            {/* Render full interactive 3D laptop on desktop; keep mobile clean & fast */}
            {isDesktop && (
              <Suspense
                fallback={
                  <div className="h-[280px] rounded-3xl border border-white/10 bg-[#101827]/40 animate-pulse" />
                }
              >
                <LaptopScene />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
