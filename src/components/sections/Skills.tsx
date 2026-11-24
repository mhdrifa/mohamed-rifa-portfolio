import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layers, Terminal, Info } from 'lucide-react';
import {
  SKILL_CATEGORIES,
  SKILLS,
  SkillCategoryKey,
} from '../../data/skills';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const SkillSphere = lazy(() =>
  import('../three/SkillSphere').then((mod) => ({ default: mod.SkillSphere }))
);

const CATEGORY_ICONS: Record<SkillCategoryKey, typeof Database> = {
  'Data Engineering': Database,
  'Full-Stack Development': Code2,
  Databases: Layers,
  'Development Tools': Terminal,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | SkillCategoryKey>('All');
  const [show3DSphere, setShow3DSphere] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const visibleCategories =
    selectedCategory === 'All' ? SKILL_CATEGORIES : [selectedCategory];

  return (
    <section id="skills" className="py-24 bg-[#101827]/25 border-y border-white/5">
      <div className="section-container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
              Technical Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Skills &amp; Technology Stack
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-[#94A3B8]">
              Organized by engineering discipline, distinguishing between technologies applied in completed builds and tools currently being learned.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-3 py-1.5 font-mono text-[11px] text-[#00E5FF]">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF]" />
              Used in Projects
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-[#8B5CF6]/35 bg-[#8B5CF6]/10 px-3 py-1.5 font-mono text-[11px] text-[#C4B5FD]">
              <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
              Currently Learning
            </span>

            {isDesktop && (
              <button
                type="button"
                onClick={() => setShow3DSphere((prev) => !prev)}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-[#F8FAFC] hover:border-[#00E5FF]/40 transition-colors"
              >
                {show3DSphere ? 'Hide 3D Sphere' : 'View 3D Tech Sphere'}
              </button>
            )}
          </div>
        </div>

        {/* Optional Desktop Interactive 3D Sphere */}
        {isDesktop && show3DSphere && (
          <Suspense
            fallback={
              <div className="h-[320px] rounded-3xl border border-white/10 bg-[#05070D]/60 animate-pulse" />
            }
          >
            <SkillSphere />
          </Suspense>
        )}

        {/* Category Filters */}
        <div
          role="tablist"
          aria-label="Filter skills by category"
          className="flex flex-wrap gap-2"
        >
          {(['All', ...SKILL_CATEGORIES] as const).map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-mono transition-all border ${
                  active
                    ? 'border-[#00E5FF] bg-[#00E5FF]/15 text-[#00E5FF]'
                    : 'border-white/10 bg-[#05070D]/60 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category];
            const items = SKILLS.filter((skill) => skill.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#F8FAFC]">
                      {category}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#94A3B8]">
                    {items.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => {
                    const isUsed = skill.maturity === 'used-in-projects';
                    return (
                      <div key={skill.name} className="group relative">
                        <span
                          tabIndex={0}
                          className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium transition-all cursor-default ${
                            isUsed
                              ? 'border-[#00E5FF]/25 bg-[#05070D]/80 text-[#F8FAFC] hover:border-[#00E5FF]/60'
                              : 'border-[#8B5CF6]/30 bg-[#05070D]/60 text-[#CBD5E1] hover:border-[#8B5CF6]/70'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isUsed ? 'bg-[#00E5FF]' : 'bg-[#8B5CF6]'
                            }`}
                          />
                          <span>{skill.name}</span>
                          <Info
                            className="h-3 w-3 text-[#94A3B8]/60 group-hover:text-[#F8FAFC]"
                            aria-hidden="true"
                          />
                        </span>

                        {/* Accessible hover/focus tooltip */}
                        <div
                          role="tooltip"
                          className="pointer-events-none absolute left-0 bottom-full mb-2 z-20 w-60 rounded-xl border border-white/15 bg-[#05070D]/95 p-3 text-xs text-[#94A3B8] shadow-xl opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all"
                        >
                          <p className="font-mono text-[10px] uppercase tracking-wider text-[#00E5FF] mb-1">
                            {isUsed ? 'Applied in Projects' : 'Actively Learning'}
                          </p>
                          <p>{skill.context}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
