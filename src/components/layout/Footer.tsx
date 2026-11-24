import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#05070D] py-10">
      <div className="section-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-[#F8FAFC]">
            {PROFILE.wordmark}
            <span className="text-[#00E5FF]">.</span>
          </p>
          <p className="mt-1 text-xs text-[#94A3B8]">
            {PROFILE.name} — {PROFILE.headline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>

          {PROFILE.links.linkedin && (
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}

          {PROFILE.links.email && (
            <a
              href={`mailto:${PROFILE.links.email}`}
              aria-label="Email Mohamed Rifa"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="font-mono text-xs text-[#94A3B8]">
          &copy; {year} {PROFILE.name}. Built by discipline.
        </p>
      </div>
    </footer>
  );
}
