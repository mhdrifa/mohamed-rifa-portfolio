import { motion, useScroll, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function ScrollProgress() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left bg-gradient-to-r from-[#00E5FF] via-[#38BDF8] to-[#8B5CF6]"
      style={{ scaleX }}
    />
  );
}
