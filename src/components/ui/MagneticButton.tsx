import React, { useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strength?: number;
}

export function MagneticButton({
  children,
  strength = 0.22,
  className = '',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
      }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
