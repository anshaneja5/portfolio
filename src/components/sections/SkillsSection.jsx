import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const SkillsSection = ({ data }) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { skills } = data;

  return (
    <section id="skills" className="relative py-32 bg-zen-paper overflow-hidden">
      {/* Rake Lines Pattern - subtle CSS pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #2D2D2D 0, #2D2D2D 1px, transparent 1px, transparent 40px)' }} />

      <div className="section-container relative z-10">
        <div ref={titleRef} className={`mb-20 text-center ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="block text-jp-gold font-bold tracking-[0.2em] uppercase mb-4">Expertise • 技術</span>
          <h2 className="text-5xl md:text-7xl font-jp-serif font-bold text-zen-ink mb-6">
            Skillset
          </h2>
          <div className="w-24 h-1 bg-jp-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);

            return (
              <div
                key={key}
                ref={cardRef}
                className={`bg-white p-8 border border-zen-stone/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 pb-4 border-b border-zen-stone/10">
                  <span className="block font-jp-serif text-lg text-jp-gold mb-1">{category.titleJp}</span>
                  <h3 className="text-2xl font-bold text-zen-ink">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zen-paper text-zen-charcoal text-sm font-medium rounded-sm border border-zen-stone/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
