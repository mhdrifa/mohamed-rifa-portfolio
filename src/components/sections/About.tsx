import { motion } from 'framer-motion';
import { Compass, Database, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PROFILE } from '../../data/profile';

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Computer Science Foundation',
    text: 'BSc in Computer Science at the University of Ruhuna, building rigorous algorithmic and software fundamentals.',
  },
  {
    step: '02',
    title: 'Data & Full-Stack Engineering',
    text: 'Translating concepts into SQL data warehouses, Azure pipelines, AI utilities, and production React systems.',
  },
  {
    step: '03',
    title: 'Leadership & Entrepreneurship',
    text: 'Leading teams through AIESEC, university hockey captaincy, hospital marketing, and launching BLACK BRAND.',
  },
  {
    step: '04',
    title: '2027 Internship Readiness',
    text: 'Focused on contributing value in Data Engineering and Software Engineering teams from January 2027.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Editorial Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
                About Me
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
                I understand data. I build software.{' '}
                <span className="text-[#94A3B8]">I solve real-world problems.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#94A3B8]">
              {PROFILE.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Visual Journey */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {JOURNEY_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="glass-card rounded-2xl p-5 hover:border-[#00E5FF]/35"
                >
                  <span className="font-mono text-xs text-[#8B5CF6]">{item.step}</span>
                  <h3 className="mt-1 font-display text-base font-semibold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Personal Information Panel */}
          <aside className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">
                Profile Snapshot
              </h3>
              <span className="font-mono text-xs text-[#00E5FF]">VERIFIED INFO</span>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8FAFC]">University of Ruhuna</p>
                  <p className="text-[#94A3B8]">
                    {PROFILE.education.degree} • {PROFILE.education.faculty}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8FAFC]">Based in {PROFILE.location}</p>
                  <p className="text-[#94A3B8]">{PROFILE.education.expectedGraduation}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Database className="h-5 w-5 text-[#00E5FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8FAFC]">
                    Primary Focus: Data Engineering
                  </p>
                  <p className="text-[#94A3B8]">
                    ETL/ELT, Warehousing, Cloud Pipelines &amp; Full-Stack Apps
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F8FAFC]">
                    Open to Internship Opportunities
                  </p>
                  <p className="text-[#94A3B8]">{PROFILE.availability}</p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Compass className="h-4 w-4 text-[#00E5FF]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#94A3B8]">
                  Core Career Interests
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-white/10 bg-[#05070D]/70 px-3 py-1.5 text-xs text-[#F8FAFC]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
