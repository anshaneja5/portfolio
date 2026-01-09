import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { MapPin } from 'lucide-react';

const ExperienceSection = ({ data }) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { workExperience } = data;

  return (
    <section id="experience" className="relative py-32 bg-zen-light-paper overflow-hidden">
      {/* Background Bamboo texture hint */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-zen-stone/10 hidden md:block" />
      <div className="absolute left-[10%] top-[10%] w-4 h-[30%] bg-gradient-to-b from-zen-bamboo/20 to-transparent rounded-full blur-xl hidden md:block" />

      <div className="section-container relative z-10">
        <div ref={titleRef} className={`mb-24 md:pl-32 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="block text-jp-red font-bold tracking-[0.2em] uppercase mb-4">My Path • 経験</span>
          <h2 className="text-5xl md:text-7xl font-jp-serif font-bold text-zen-ink mb-6">
            The Journey
          </h2>
          <div className="w-24 h-1 bg-jp-red" />
        </div>

        <div className="relative space-y-16 md:space-y-0">
          {/* Vertical Line for Timeline (Desktop) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-jp-red/80 via-jp-gold/50 to-transparent hidden md:block" />

          {workExperience.map((job, index) => {
            const { ref: jobRef, isVisible: jobVisible } = useScrollReveal(0.1);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                ref={jobRef}
                className={`relative md:flex items-start justify-between gap-16 ${jobVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className={`absolute left-[20px] md:left-1/2 w-4 h-4 bg-white border-4 border-jp-red rounded-full z-20 transform -translate-x-1/2 md:translate-x-[-50%] mt-2 shadow-[0_0_0_4px_rgba(197,61,67,0.1)] hidden md:block`} />

                {/* Left Side (Meta or Content) */}
                <div className={`md:w-1/2 ${isLeft ? 'md:text-right order-1' : 'md:text-left order-2 md:pl-8'}`}>
                  {isLeft ? (
                    <div>
                      <div className="text-jp-red font-bold tracking-widest text-xs uppercase mb-2">{job.period}</div>
                      <h3 className="text-2xl font-jp-serif font-bold text-zen-ink">{job.company}</h3>
                      <div className="text-zen-stone font-jp-serif mb-2">{job.role}</div>

                      {/* Location */}
                      <div className="flex items-center justify-end gap-1 text-sm text-zen-stone mb-4">
                        <span>{job.location}</span>
                        <MapPin size={14} />
                      </div>

                      <div className="flex flex-wrap gap-2 md:justify-end mb-4 md:mb-0">
                        {job.tech.slice(0, 3).map((t, i) => <span key={i} className="text-xs bg-white px-2 py-1 rounded shadow-sm text-zen-stone border border-zen-stone/10">{t}</span>)}
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block">
                      <div className="bg-white p-8 shadow-sm border-l-4 border-jp-gold rounded-r-sm">
                        <ul className="space-y-3">
                          {job.description.map((desc, i) => (
                            <li key={i} className="text-zen-charcoal/90 leading-relaxed text-base flex gap-3">
                              <span className="text-jp-gold mt-1.5 text-xs">●</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Metrics */}
                      {job.metrics && (
                        <div className="flex gap-6 mt-4">
                          {job.metrics.map((m, i) => (
                            <div key={i}>
                              <span className="text-xl font-bold text-jp-gold">{m.value}</span>
                              <span className="text-xs ml-2 text-zen-stone uppercase">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Side (Content or Meta) */}
                <div className={`md:w-1/2 ${isLeft ? 'order-2 md:pl-8' : 'md:text-right order-1 md:pr-8'}`}>
                  {isLeft ? (
                    <div className="hidden md:block">
                      <div className="bg-white p-8 shadow-sm border-l-4 border-jp-red rounded-r-sm">
                        <ul className="space-y-3">
                          {job.description.map((desc, i) => (
                            <li key={i} className="text-zen-charcoal/90 leading-relaxed text-base flex gap-3">
                              <span className="text-jp-red mt-1.5 text-xs">●</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {job.metrics && (
                        <div className="flex gap-6 mt-4">
                          {job.metrics.map((m, i) => (
                            <div key={i}>
                              <span className="text-xl font-bold text-jp-red">{m.value}</span>
                              <span className="text-xs ml-2 text-zen-stone uppercase">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <div className="text-jp-gold font-bold tracking-widest text-xs uppercase mb-2">{job.period}</div>
                      <h3 className="text-2xl font-jp-serif font-bold text-zen-ink">{job.company}</h3>
                      <div className="text-zen-stone font-jp-serif mb-2">{job.role}</div>

                      {/* Location */}
                      <div className="flex items-center justify-end gap-1 text-sm text-zen-stone mb-4">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 md:justify-end mb-4 md:mb-0">
                        {job.tech.slice(0, 3).map((t, i) => <span key={i} className="text-xs bg-white px-2 py-1 rounded shadow-sm text-zen-stone border border-zen-stone/10">{t}</span>)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile View - Simplified Stack */}
                <div className="md:hidden pl-8 border-l-2 border-dashed border-zen-stone/30 ml-4 pb-12 last:pb-0">
                  <div className="absolute -left-[5px] w-3 h-3 bg-jp-red rounded-full ring-4 ring-zen-paper" />
                  <span className="text-xs font-bold text-jp-red uppercase tracking-wider block mb-1">{job.period}</span>
                  <h3 className="text-2xl font-bold text-zen-ink leading-none mb-1">{job.company}</h3>
                  <div className="text-lg text-zen-charcoal mb-1">{job.role}</div>

                  <div className="flex items-center gap-1 text-sm text-zen-stone mb-4">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-zen-charcoal/80 text-sm leading-relaxed flex gap-2">
                        <span className="text-jp-red mt-1.5 text-[10px]">●</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t, i) => <span key={i} className="text-xs bg-white px-2 py-1 border border-zen-stone/20 rounded text-zen-stone">{t}</span>)}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
