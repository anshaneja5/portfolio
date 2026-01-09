import React from 'react';
import { MapPin, ArrowRight, Mail, Github, Download } from 'lucide-react';
import SakuraPetals from '../ui/SakuraPetals';
import useScrollReveal from '../../hooks/useScrollReveal';

const HeroSection = ({ data }) => {
  // We use scroll reveal for the stats to trigger when they come into view
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.1);
  const { personalInfo } = data;

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zen-paper via-white to-zen-paper opacity-80" />

      {/* Large Kanji Watermark - "The Way" */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] leading-none font-jp-serif text-zen-stone/5 select-none pointer-events-none z-0"
        style={{ writingMode: 'vertical-rl' }}
      >
        道
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <SakuraPetals count={12} />
      </div>

      <div className="section-container relative z-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 border-l-4 border-jp-red bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <MapPin className="text-jp-red w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zen-charcoal">
              {personalInfo.location}
            </span>
            <span className="text-sm font-jp-serif text-zen-stone">
              {personalInfo.locationJp}
            </span>
          </div>

          {/* Headline */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zen-ink leading-[0.9]">
              <span className="block font-jp-serif font-light text-zen-charcoal/80 text-4xl mb-2">Hello, I am</span>
              {personalInfo.name.split(' ')[0]}
              <span className="block text-jp-red mt-2">{personalInfo.name.split(' ')[1]}</span>
            </h1>

            {/* Japanese Name Stamp effect */}
            <div className="absolute top-0 right-0 md:-right-12 opacity-20 md:opacity-100 mix-blend-multiply">
              <div className="w-24 h-24 border-4 border-jp-red rounded-xl flex items-center justify-center transform rotate-12">
                <span className="font-jp-serif text-4xl text-jp-red font-bold writing-vertical-rl">
                  {personalInfo.nameJp}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-light text-zen-charcoal max-w-xl leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-[#2D2D2D] text-[#F5F2EB] font-medium tracking-wide hover:bg-[#3A3A3A] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white border border-zen-stone/30 text-zen-ink font-medium tracking-wide hover:bg-zen-paper transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-zen-stone/20">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-zen-stone hover:text-zen-ink transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-zen-stone hover:text-zen-ink transition-colors group">
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Floating Stats - Right Side */}
        <div ref={statsRef} className={`lg:col-span-5 relative ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out delay-300`}>
          <div className="relative z-10 grid gap-6">
            <div className="p-8 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-4 border-jp-red hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-5xl font-jp-serif font-bold text-jp-red mb-2">90%</h3>
              <p className="text-zen-charcoal font-medium">Faster cycles</p>
              <p className="text-sm text-zen-stone mt-1">Prompt engineering optimization at Rimo LLC</p>
            </div>

            <div className="p-8 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-4 border-jp-gold hover:-translate-y-1 transition-transform duration-300 md:ml-12">
              <h3 className="text-5xl font-jp-serif font-bold text-jp-gold mb-2">23K+</h3>
              <p className="text-zen-charcoal font-medium">Global Learners</p>
              <p className="text-sm text-zen-stone mt-1">Using mldl.study platform across 150+ countries</p>
            </div>

            <div className="p-8 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-4 border-jp-sakura-dark hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-5xl font-jp-serif font-bold text-jp-sakura-dark mb-2">3K+</h3>
              <p className="text-zen-charcoal font-medium">Viral Growth</p>
              <p className="text-sm text-zen-stone mt-1">Users acquired in 3 days for Engimatch</p>
            </div>
          </div>

          {/* Decorative Circle Behind Stats */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-zen-sand/20 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
