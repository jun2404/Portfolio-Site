import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Copy, Check, Send, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subjectOption, setSubjectOption] = useState('Growth Strategy & E-com');
  const [customNote, setCustomNote] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getDirectEmailLink = () => {
    const encodedSubject = encodeURIComponent(`${subjectOption} — Mohammed Junaid`);
    const encodedBody = encodeURIComponent(
      customNote.trim()
        ? `${customNote}\n\nSent from portfolio website.`
        : `Hi Junaid,\n\nI came across your portfolio and would love to discuss a growth / marketing opportunity.\n\nBest regards,`
    );
    return `mailto:${PORTFOLIO_DATA.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#2C2A28]/8 bg-gradient-to-b from-[#FAF7F2] to-[#F2EDE9]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header matching Stitch */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-[#C1652F] uppercase">
            Let's Connect
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2A28] tracking-tight">
            Have a project in mind? Let's chat.
          </h2>
          <p className="text-sm sm:text-base text-[#2C2A28]/75 leading-relaxed">
            No endless agency discovery decks or robotic automated pitches. Just honest, practical growth strategy explained like talking to a smart friend.
          </p>
        </div>

        {/* Central High-Impact Contact Card matching Stitch Mockup */}
        <div className="p-6 sm:p-10 rounded-[2rem] bg-white border border-[#2C2A28]/8 shadow-warm-resting space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#2C2A28]/8">
            
            {/* Contact Section */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#C1652F]">
                Contact
              </span>
              <p className="text-xs text-[#2C2A28]/65">
                Typically replies within 24 hours
              </p>
            </div>

            {/* Action Buttons: Get in Touch & LinkedIn Button matching Stitch */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Primary User Requirement: A button that says Get in touch directing to junaidprdns@proton.me */}
              <a
                href={getDirectEmailLink()}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#FAF7F2] bg-[#C1652F] hover:bg-[#96440f] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
              >
                <span>Get in touch</span>
                <Send size={15} />
              </a>

              {/* LinkedIn Connect Button matching Stitch visual */}
              <a
                href={PORTFOLIO_DATA.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#1d1b19] hover:bg-[#32302e] active:scale-[0.98] transition-all shadow-sm hover:shadow cursor-pointer whitespace-nowrap"
              >
                <Linkedin size={16} className="text-white" />
                <span>Connect on LinkedIn</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-3.5 rounded-full border border-[#2C2A28]/15 hover:bg-[#E8DCC8]/40 text-[#2C2A28] transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </button>
            </div>

          </div>

          {/* Quick Note Composer for instant reach-out */}
          <div className="space-y-4 pt-2">
            <div className="text-xs font-semibold text-[#2C2A28]/80">
              Customize your inquiry (optional):
            </div>

            <div className="flex flex-wrap gap-2">
              {['Growth Strategy & E-com', 'SEO Audit & Framework', 'GTM Launch Planning', 'Full-time / Advisory'].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSubjectOption(topic)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    subjectOption === topic
                      ? 'bg-[#E8DCC8] text-[#2C2A28] border border-[#2C2A28]/20 font-semibold'
                      : 'bg-white text-[#2C2A28]/70 border border-[#2C2A28]/10 hover:border-[#2C2A28]/30'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="relative">
              <textarea
                rows={2}
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Briefly describe what you're working on (optional)..."
                className="w-full p-4 text-xs sm:text-sm rounded-2xl bg-[#FAF7F2] border border-[#2C2A28]/15 focus:outline-none focus:border-[#C1652F] focus:ring-2 focus:ring-[#C1652F]/15 transition-all text-[#2C2A28] resize-none"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#2C2A28]/60">
              <span>Clicking "Get in touch" will launch your mail client with this subject and body.</span>
              {copied && <span className="text-emerald-700 font-medium">Copied {PORTFOLIO_DATA.email} to clipboard!</span>}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
