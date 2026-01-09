import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

const EducationSection = ({ data }) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { education } = data;

  return (
    <section className="relative py-32 bg-zen-light-paper overflow-hidden">
      <div className="section-container relative z-10">
        <div ref={titleRef} className={`mb-20 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="block text-jp-red font-bold tracking-[0.2em] uppercase mb-4">Education • 学歴</span>
          <h2 className="text-5xl md:text-7xl font-jp-serif font-bold text-zen-ink mb-6">
            Foundation
          </h2>
          <div className="w-24 h-1 bg-jp-red" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);

            return (
              <div
                key={index}
                ref={cardRef}
                className={`relative bg-white p-8 border-t-4 border-jp-gold shadow-sm hover:shadow-md transition-shadow duration-300 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-jp-serif font-bold text-jp-gold mb-4">{edu.score}</div>
                <h3 className="text-xl font-bold text-zen-ink mb-1">{edu.institution}</h3>
                <div className="text-sm font-jp-serif text-zen-stone mb-4">{edu.institutionJp}</div>
                <div className="text-zen-charcoal font-medium mb-1">{edu.degree}</div>
                <div className="text-xs text-zen-stone uppercase tracking-wider">{edu.period}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
