import { useState } from 'react';
import {
  PROJECT_FILTERS,
  PROJECTS,
  ProjectFilterCategory,
  ProjectItem,
} from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetails } from './ProjectDetails';

export function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-[#101827]/25 border-y border-white/5">
      <div className="section-container space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
              Featured Engineering Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Selected Projects &amp; Case Studies
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-[#94A3B8]">
              Real builds across SQL data warehousing, cloud data pipelines, full-stack production web applications, and AI systems.
            </p>
          </div>

          {/* Category Filters */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {PROJECT_FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl border px-4 py-2 font-mono text-xs transition-all ${
                    active
                      ? 'border-[#00E5FF] bg-[#00E5FF]/15 text-[#00E5FF]'
                      : 'border-white/10 bg-[#05070D]/60 text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
