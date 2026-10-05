import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortraitCard } from './PortraitCard';
import { ArrowDown, Mail, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="about" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            
            {/* Top Eyebrow Status Pill matching Stitch */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DCC8]/60 border border-[#2C2A28]/8 text-xs sm:text-sm font-medium text-[#2C2A28]/90">
              <span className="w-2 h-2 rounded-full bg-[#C1652F]" />
              <span>Growth Strategist & Product Marketer</span>
            </div>

            {/* Huge Display Hero Title */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#2C2A28] leading-[1.1] text-balance">
              Hi, I'm Junaid.{' '}
              <span className="text-[#C1652F] block sm:inline">
                I turn marketing problems into measurable results
              </span>{' '}
              for e-commerce & D2C brands.
            </h1>

            {/* Narrative Prose */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#2C2A28]/80 leading-relaxed max-w-2xl text-pretty">
              {PORTFOLIO_DATA.oneLineDescription}
            </p>

            {/* Dual CTAs matching Stitch */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}?subject=Growth%20Marketing%20Inquiry%20%E2%80%94%20Mohammed%20Junaid`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm sm:text-base text-[#FAF7F2] bg-[#C1652F] hover:bg-[#96440f] active:scale-[0.98] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail size={16} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm sm:text-base text-[#2C2A28] bg-[#E8DCC8]/60 hover:bg-[#E8DCC8] border border-[#2C2A28]/10 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown size={16} className="text-[#C1652F]" />
              </a>

              <a
                href={PORTFOLIO_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full font-medium text-sm text-[#2C2A28]/70 hover:text-[#2C2A28] transition-colors"
                aria-label="LinkedIn profile"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* Quick trust metrics / badges */}
            <div className="pt-6 sm:pt-8 border-t border-[#2C2A28]/10 w-full grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#C1652F] tabular-nums">
                  2+ Years
                </div>
                <div className="text-xs sm:text-sm text-[#2C2A28]/70 font-medium">
                  Growth & E-com
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#2C2A28] tabular-nums">
                  D2C & OTT
                </div>
                <div className="text-xs sm:text-sm text-[#2C2A28]/70 font-medium">
                  Prime Video & D2C
                </div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[#C08A4E] tabular-nums">
                  78/100
                </div>
                <div className="text-xs sm:text-sm text-[#2C2A28]/70 font-medium">
                  SEO Audit Score Lift
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PortraitCard />
          </div>

        </div>
      </div>
    </section>
  );
};
