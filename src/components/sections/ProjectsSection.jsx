import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const ProjectsSection = ({ data }) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { projects } = data;

  return (
    <section id="projects" className="relative py-32 bg-zen-paper overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-zen-sand/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="section-container relative z-10">
        <div ref={titleRef} className={`mb-20 text-center ${titleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="block text-jp-gold font-bold tracking-[0.2em] uppercase mb-4">Selected Works • 作品</span>
          <h2 className="text-5xl md:text-7xl font-jp-serif font-bold text-zen-ink mb-6">
            Craftsmanship
          </h2>
          <div className="w-24 h-1 bg-jp-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => {
            const { ref: projectRef, isVisible: projectVisible } = useScrollReveal(0.1);

            return (
              <div
                key={index}
                ref={projectRef}
                className={`group relative bg-white rounded-sm overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 ${projectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 ${project.accent === 'red' ? 'bg-jp-red' : 'bg-jp-gold'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className="p-8 md:p-12 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-jp-serif font-bold text-zen-ink mb-1 group-hover:text-jp-red transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-zen-stone font-medium tracking-wide">
                        {project.titleJp}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      {/* Assuming GitHub link is available or using live link for both if needed. 
                           The data structure has 'link' (github) and 'live' (website) separately usually or mixed. 
                           Checking data: 'link' (github) and 'live' (website).
                       */}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-zen-stone hover:text-zen-ink bg-zen-paper hover:bg-zen-sand rounded-full transition-colors" aria-label="View Code">
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="p-2 text-zen-stone hover:text-zen-ink bg-zen-paper hover:bg-zen-sand rounded-full transition-colors" aria-label="Visit Site">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-zen-charcoal/80 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-t border-zen-stone/10 border-b mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center md:text-left">
                        <div className={`text-2xl font-jp-serif font-bold ${project.accent === 'red' ? 'text-jp-red' : 'text-jp-gold'}`}>
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-zen-stone mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-zen-paper text-zen-charcoal text-xs font-semibold rounded-sm">
                        {tech}
                      </span>
                    ))}
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

export default ProjectsSection;
