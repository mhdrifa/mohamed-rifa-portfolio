import { motion } from 'framer-motion';
import { Award, CheckCircle2, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/experience';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#101827]/25 border-y border-white/5">
      <div className="section-container space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
            Credentials &amp; Milestones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
            Achievements &amp; Certifications
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-[#94A3B8]">
            Verified competitions, technical coursework, and university leadership milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#00E5FF]/35 transition-colors"
            >
              <div>
                {item.certificateImage && (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#05070D]">
                    <img
                      src={item.certificateImage}
                      alt={`${item.title} certificate`}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8B5CF6]/35 bg-[#8B5CF6]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#C4B5FD]">
                    {item.category === 'Competition' ? (
                      <Trophy className="h-3 w-3" aria-hidden="true" />
                    ) : (
                      <Award className="h-3 w-3" aria-hidden="true" />
                    )}
                    {item.category}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-[#F8FAFC]">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#00E5FF]">{item.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
