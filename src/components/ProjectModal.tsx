import React, { useEffect } from 'react';
import { Project, PORTFOLIO_DATA } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowUpRight, TrendingUp } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#2C2A28]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] rounded-3xl border border-[#2C2A28]/10 shadow-2xl p-6 sm:p-8 md:p-10 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full text-[#2C2A28]/60 hover:text-[#2C2A28] hover:bg-[#E8DCC8]/50 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-xs px-2.5 py-1 rounded-full bg-[#E8DCC8]/80 text-[#C1652F] tracking-wide">
              {project.number}
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C1652F]">
              {project.category}
            </span>
          </div>

          <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl font-bold text-[#2C2A28]">
            {project.title}
          </h2>

          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-[#2C2A28]/70">
            <span>Role: <strong className="text-[#2C2A28] font-semibold">{project.role}</strong></span>
            <span>·</span>
            <span>Context: <strong className="text-[#2C2A28] font-semibold">{project.companyOrContext}</strong></span>
          </div>
        </div>

        {/* Outcome Highlight Box */}
        <div className={`p-5 sm:p-6 rounded-2xl border ${
          project.isProjected
            ? 'bg-[#E8DCC8]/40 border-[#C08A4E]/30'
            : 'bg-[#E8DCC8]/60 border-[#C1652F]/20'
        }`}>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C1652F] mb-1.5">
            <TrendingUp size={15} />
            <span>{project.outcomeLabel}</span>
            {project.isProjected && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#C08A4E]/20 text-[#82551d]">
                Self-Initiated Model
              </span>
            )}
          </div>
          <div className="font-display text-xl sm:text-2xl font-bold text-[#2C2A28]">
            {project.outcomeMetric}
          </div>
          <p className="text-xs sm:text-sm text-[#2C2A28]/80 mt-1">
            {project.outcomeSubtext}
          </p>
        </div>

        {/* Full Narrative */}
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-[#2C2A28]">
            Overview & Context
          </h3>
          <p className="text-sm sm:text-base text-[#2C2A28]/85 leading-relaxed">
            {project.fullNarrative}
          </p>
        </div>

        {/* Top Issues Found (if applicable) */}
        {project.topIssues && project.topIssues.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#2C2A28] flex items-center gap-2">
              <AlertTriangle size={18} className="text-[#C1652F]" />
              <span>Core Bottlenecks Identified</span>
            </h3>
            <ul className="space-y-2">
              {project.topIssues.map((issue, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2C2A28]/80">
                  <span className="text-[#C1652F] font-bold mt-0.5">•</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Actions & Systematic Execution */}
        <div className="space-y-3">
          <h3 className="font-display text-lg font-bold text-[#2C2A28] flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <span>Key Execution Steps</span>
          </h3>
          <ul className="space-y-2.5">
            {project.keyActions.map((action, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2C2A28]/85">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C1652F] mt-2 shrink-0" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Methodology / Funnel Breakdown */}
        {project.methodology && (
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#2C2A28]">
              Methodology & Framework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.methodology.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#2C2A28]/8">
                  <div className="font-semibold text-xs text-[#C1652F] uppercase tracking-wide">
                    {m.stage}
                  </div>
                  <div className="text-xs sm:text-sm text-[#2C2A28]/80 mt-1 leading-snug">
                    {m.details}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="pt-4 border-t border-[#2C2A28]/10 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#E8DCC8]/50 text-[#2C2A28]/80 border border-[#2C2A28]/8"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer CTAs in Modal */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2C2A28]/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#2C2A28] hover:bg-[#E8DCC8]/50 transition-colors"
          >
            Close Breakdown
          </button>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}?subject=Discussion%20re:%20${encodeURIComponent(project.title)}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#FAF7F2] bg-[#C1652F] hover:bg-[#96440f] transition-all"
          >
            <span>Discuss This Work</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
