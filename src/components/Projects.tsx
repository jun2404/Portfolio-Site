import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = ['All', 'D2C E-Commerce', 'Attribution & AI', 'GTM Launch'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.categoryTag === selectedFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#2C2A28]/8">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header matching Stitch layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-bold tracking-widest text-[#C1652F] uppercase">
              Proof of Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2A28] tracking-tight">
              Selected Projects
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#2C2A28]/75 max-w-md leading-relaxed">
            Direct, measurable business outcomes powered by technical SEO frameworks, attribution discovery, and rigorous go-to-market planning.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#E8DCC8]/40 border border-[#2C2A28]/8 w-fit">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === tab
                  ? 'bg-white text-[#2C2A28] shadow-sm font-semibold'
                  : 'text-[#2C2A28]/70 hover:text-[#2C2A28] hover:bg-white/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid matching Stitch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[#2C2A28]/8 shadow-warm-resting hover:shadow-warm-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Card Upper Half */}
              <div className="space-y-4">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8DCC8]/60 text-[#C1652F] tracking-wider">
                    {project.number}
                  </span>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#C1652F]/90">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#2C2A28] group-hover:text-[#C1652F] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2C2A28]/75 leading-relaxed line-clamp-4">
                  {project.shortDescription}
                </p>
              </div>

              {/* Card Lower Half */}
              <div className="mt-6 pt-5 space-y-4 border-t border-[#2C2A28]/8">
                
                {/* Outcome Box matching Stitch mockup */}
                <div className={`p-4 rounded-2xl border transition-colors ${
                  project.isProjected
                    ? 'bg-[#FAF7F2] border-[#C08A4E]/30 group-hover:border-[#C08A4E]/60'
                    : 'bg-[#FAF7F2] border-[#2C2A28]/8 group-hover:border-[#C1652F]/30'
                }`}>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#C1652F] mb-1">
                    <span>{project.outcomeLabel}</span>
                    {project.isProjected && (
                      <span className="text-[9px] font-semibold text-[#82551d] bg-[#E8DCC8]/70 px-1.5 py-0.5 rounded">
                        Projected
                      </span>
                    )}
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-[#2C2A28] leading-tight">
                    {project.outcomeMetric}
                  </div>
                  <div className="text-[11px] text-[#2C2A28]/65 mt-0.5 line-clamp-1">
                    {project.outcomeSubtext}
                  </div>
                </div>

                {/* Tech Tags & Read More */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#E8DCC8]/40 text-[#2C2A28]/70"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[11px] px-2 py-1 rounded-full text-[#2C2A28]/50">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C1652F] group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ArrowRight size={13} />
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
