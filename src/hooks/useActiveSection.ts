import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || 'home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        {
          rootMargin: '-35% 0px -50% 0px',
          threshold: 0.05,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeId;
}
