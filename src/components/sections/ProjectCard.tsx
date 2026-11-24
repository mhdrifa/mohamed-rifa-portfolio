import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = usePrefersReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -ny * 5, ry: nx * 6 });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  const statusStyle =
    project.status === 'In Progress'
      ? 'border-amber-400/35 bg-amber-400/10 text-amber-300'
      : project.status === 'Production / Live'
      ? 'border-emerald-400/35 bg-emerald-400/10 text-emerald-300'
      : 'border-[#00E5FF]/35 bg-[#00E5FF]/10 text-[#00E5FF]';

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition:
          tilt.rx === 0 && tilt.ry === 0
            ? 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            : 'transform 0.08s ease-out',
      }}
      className="group glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#00E5FF]/40 transition-colors"
    >
      <div>
        {/* Optional screenshot slot */}
        {project.screenshotUrl && (
          <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#05070D]">
            <img
              src={project.screenshotUrl}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-44 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-[#8B5CF6]">
            PROJECT {project.number}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${statusStyle}`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-[#94A3B8]">{project.categoryLabel}</p>

        <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
          {project.overview}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-[#05070D]/75 px-2.5 py-1 font-mono text-[11px] text-[#F8FAFC]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-lg border border-white/10 bg-[#05070D]/75 px-2.5 py-1 font-mono text-[11px] text-[#94A3B8]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00E5FF] hover:underline"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/25 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live website`}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
