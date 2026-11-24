import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, GraduationCap, Trophy, Users } from 'lucide-react';
import { TIMELINE_ENTRIES, TimelineEntry } from '../../data/experience';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const CATEGORY_ICON: Record<TimelineEntry['category'], typeof GraduationCap> = {
  Education: GraduationCap,
  Leadership: Users,
  Experience: Briefcase,
  Athletics: Trophy,
};

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.timeline-card', {
        opacity: 0,
        y: 26,
        duration: 0.55,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="experience" className="py-24 relative">
      <div ref={containerRef} className="section-container space-y-12">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
            Journey &amp; Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
            Education, Experience &amp; Leadership
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#94A3B8]">
            Combining Computer Science academics with student leadership, stakeholder communication, marketing execution, and university athletics.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-2 sm:before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#00E5FF] before:via-[#8B5CF6] before:to-transparent">
          {TIMELINE_ENTRIES.map((entry) => {
            const Icon = CATEGORY_ICON[entry.category];
            return (
              <div key={entry.id} className="timeline-card relative">
                {/* Timeline Dot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[22px] sm:-left-[30px] top-6 flex h-4 w-4 items-center justify-center rounded-full border border-[#00E5FF] bg-[#05070D]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                </span>

                <div className="glass-panel rounded-3xl p-6 sm:p-7 hover:border-white/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/35 bg-[#8B5CF6]/10 text-[#C4B5FD]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F8FAFC]">
                          {entry.role}
                        </h3>
                        <p className="text-sm text-[#00E5FF]">{entry.organization}</p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#05070D]/70 px-3 py-1.5 font-mono text-[11px] text-[#94A3B8] self-start sm:self-center">
                      <Calendar className="h-3.5 w-3.5 text-[#00E5FF]" aria-hidden="true" />
                      <span>{entry.period}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#94A3B8]">
                    {entry.description}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {entry.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="rounded-xl border border-white/[0.07] bg-[#05070D]/60 px-3.5 py-2.5 text-xs text-[#CBD5E1]"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
