import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Search, Sparkles, Layers, Grid } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cloud' | 'categories'>('cloud');

  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map((c) => c.title)];

  // Flattened all skills with category mapping
  const allSkills = PORTFOLIO_DATA.skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill,
      category: category.title
    }))
  );

  // Filter skills based on search query and category
  const filteredSkills = allSkills.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#2C2A28]/8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header matching Stitch */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-[#C1652F] uppercase">
            Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2A28] tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base text-[#2C2A28]/75 leading-relaxed">
            A cohesive bridge between strategic product marketing, campaign localization, and performance optimization.
          </p>
        </div>

        {/* Controls: Search, Category Tabs & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          
          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2C2A28]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., SEO, GA4, GTM)..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-full bg-white border border-[#2C2A28]/15 focus:outline-none focus:border-[#C1652F] focus:ring-2 focus:ring-[#C1652F]/15 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2C2A28]/50 hover:text-[#2C2A28]"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#E8DCC8]/50 border border-[#2C2A28]/8 text-xs font-medium self-end sm:self-auto">
            <button
              onClick={() => setViewMode('cloud')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'cloud'
                  ? 'bg-white text-[#2C2A28] shadow-sm font-semibold'
                  : 'text-[#2C2A28]/70 hover:text-[#2C2A28]'
              }`}
            >
              <Sparkles size={13} />
              <span>Skill Cloud</span>
            </button>
            <button
              onClick={() => setViewMode('categories')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                viewMode === 'categories'
                  ? 'bg-white text-[#2C2A28] shadow-sm font-semibold'
                  : 'text-[#2C2A28]/70 hover:text-[#2C2A28]'
              }`}
            >
              <Layers size={13} />
              <span>By Category</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#C1652F] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#E8DCC8]/40 text-[#2C2A28]/80 hover:bg-[#E8DCC8]/80 border border-[#2C2A28]/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode 1: Stitch Pill Cloud */}
        {viewMode === 'cloud' && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto py-4">
            {filteredSkills.length === 0 ? (
              <div className="text-center py-12 text-sm text-[#2C2A28]/60">
                No matching skills found for "{searchQuery}".
              </div>
            ) : (
              filteredSkills.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="group relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#E8DCC8]/60 hover:bg-[#E8DCC8] border border-[#2C2A28]/10 shadow-sm hover:shadow transition-all duration-200 cursor-default"
                >
                  <span className="font-display text-xs sm:text-sm font-medium text-[#2C2A28] group-hover:text-[#96440f] transition-colors">
                    {item.name}
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {/* View Mode 2: Category Structured Cards */}
        {viewMode === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {PORTFOLIO_DATA.skillCategories
              .filter((cat) => activeCategory === 'All' || cat.title === activeCategory)
              .map((category) => {
                const categoryFilteredSkills = category.skills.filter((s) =>
                  s.toLowerCase().includes(searchQuery.toLowerCase())
                );
                if (categoryFilteredSkills.length === 0) return null;

                return (
                  <div
                    key={category.title}
                    className="p-6 rounded-3xl bg-white border border-[#2C2A28]/8 shadow-warm-resting space-y-4"
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#2C2A28]">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#2C2A28]/70 mt-1 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {categoryFilteredSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-full bg-[#E8DCC8]/40 border border-[#2C2A28]/8 text-xs font-medium text-[#2C2A28]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

      </div>
    </section>
  );
};
