import { CheckCircle2, Download, Mail } from 'lucide-react';
import { RECRUITER_STRENGTHS } from '../../data/experience';
import { PROFILE } from '../../data/profile';

export function RecruiterPitch() {
  return (
    <section aria-labelledby="recruiter-heading" className="py-24 relative">
      <div className="section-container">
        <div className="glass-panel rounded-3xl p-7 sm:p-10 lg:p-12 border-[#00E5FF]/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
                For Hiring Managers &amp; Recruiters
              </span>
              <h2
                id="recruiter-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]"
              >
                What I Bring to Your Team
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-[#94A3B8]">
                {PROFILE.availability}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={PROFILE.links.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-[#00E5FF] px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#05070D] hover:brightness-110 transition-all"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-mono uppercase tracking-wider text-[#F8FAFC] hover:border-[#00E5FF]/50 transition-all"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RECRUITER_STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="rounded-2xl border border-white/10 bg-[#05070D]/70 p-5 hover:border-[#00E5FF]/35 transition-colors"
              >
                <div className="flex items-center gap-2.5 text-[#00E5FF] mb-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-sm font-semibold text-[#F8FAFC]">
                    {strength.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-[#94A3B8]">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
