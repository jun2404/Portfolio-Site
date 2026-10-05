import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Expertise', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border border-[#2C2A28]/8'
            : 'bg-[#FAF7F2]/60 backdrop-blur-sm border border-transparent'
        }`}
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#about"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2C2A28] hover:text-[#C1652F] transition-colors"
        >
          {PORTFOLIO_DATA.shortName}
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C2A28]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#C1652F] transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA action */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PORTFOLIO_DATA.email}?subject=Growth%20Marketing%20Inquiry%20%E2%80%94%20Mohammed%20Junaid`}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#FAF7F2] bg-[#C1652F] hover:bg-[#96440f] active:scale-[0.98] transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            Get in Touch
          </a>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#2C2A28] hover:bg-[#E8DCC8]/40 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-lg p-5 rounded-2xl bg-[#FAF7F2] border border-[#2C2A28]/10 shadow-xl backdrop-blur-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-[#2C2A28] hover:bg-[#E8DCC8]/50 hover:text-[#C1652F] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2C2A28]/10 flex flex-col gap-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}?subject=Growth%20Marketing%20Inquiry%20%E2%80%94%20Mohammed%20Junaid`}
                className="w-full text-center py-3 rounded-full text-sm font-semibold text-[#FAF7F2] bg-[#C1652F] hover:bg-[#96440f] transition-colors shadow-sm"
              >
                Get in Touch
              </a>
              <a
                href={PORTFOLIO_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-full text-sm font-medium text-[#2C2A28] border border-[#2C2A28]/20 hover:bg-[#E8DCC8]/40 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
