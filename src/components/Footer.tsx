import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#2C2A28]/8 text-xs sm:text-sm text-[#2C2A28]/70">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-bold text-base sm:text-lg text-[#2C2A28]">
            {PORTFOLIO_DATA.shortName}
          </span>
          <span className="hidden sm:inline text-[#2C2A28]/30">·</span>
          <span>© 2026 Mohammed Junaid. All rights reserved.</span>
        </div>

        {/* Right: Clean navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-[#2C2A28]/80">
          <a href="#about" className="hover:text-[#C1652F] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#C1652F] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#C1652F] transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-[#C1652F] transition-colors">
            Contact
          </a>
          <a
            href={PORTFOLIO_DATA.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C1652F] transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-[#E8DCC8]/50 text-[#2C2A28] transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
