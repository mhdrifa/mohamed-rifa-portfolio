import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { ProjectItem } from '../../data/projects';

interface ProjectDetailsProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0A0F1C] p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs text-[#8B5CF6]">
                    CASE STUDY {project.number}
                  </span>
                  <span className="rounded-full border border-[#00E5FF]/35 bg-[#00E5FF]/10 px-2.5 py-0.5 font-mono text-[10px] text-[#00E5FF]">
                    {project.status}
                  </span>
                </div>
                <h3
                  id="case-study-title"
                  className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]"
                >
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#94A3B8]">
                  {project.categoryLabel}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm leading-relaxed text-[#94A3B8]">
              {project.note && (
                <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-xs text-amber-200">
                  {project.note}
                </div>
              )}

              <div>
                <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-2">
                  Problem Statement
                </h4>
                <p>{project.problemStatement}</p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-2">
                  Solution &amp; My Contribution
                </h4>
                <p>{project.solution}</p>
                <p className="mt-2 text-[#CBD5E1]">{project.contribution}</p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-2">
                  Architecture Overview
                </h4>
                <ul className="space-y-2">
                  {project.architecture.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-xl border border-white/10 bg-[#101827]/70 px-4 py-3 text-xs sm:text-sm text-[#F8FAFC]"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-2">
                  Technical Challenges
                </h4>
                <p>{project.challenges}</p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-2">
                  Key Learning Outcomes
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.learningOutcomes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-[#F8FAFC] mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-[#101827] px-3 py-1 font-mono text-xs text-[#F8FAFC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono text-[#F8FAFC] hover:border-[#00E5FF]/50"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>View GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#00E5FF] px-4 py-2.5 text-xs font-mono font-semibold text-[#05070D] hover:brightness-110"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>Visit Live Site</span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
