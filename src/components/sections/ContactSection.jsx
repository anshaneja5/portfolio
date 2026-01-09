import React from 'react';
import { Mail, Github, Download, Linkedin } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import SakuraPetals from '../ui/SakuraPetals';

const ContactSection = ({ data }) => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.2);
  const { personalInfo } = data;

  return (
    <section id="contact" className="relative py-32 bg-zen-ink text-white overflow-hidden">
      {/* Dark theme particles */}
      <div className="absolute inset-0 opacity-20">
        <SakuraPetals count={8} />
      </div>

      <div className="section-container relative z-10 text-center">
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}
        >
          <div className="w-20 h-20 border-2 border-white/20 rounded-full mx-auto flex items-center justify-center mb-8">
            <span className="font-jp-serif text-2xl">結</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-jp-serif font-bold mb-6">
            Let's connect
          </h2>
          <p className="text-xl text-zen-stone mb-12 max-w-xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 bg-white text-zen-ink font-bold hover:bg-zen-paper transition-colors min-w-[200px] flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors min-w-[200px] flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-zen-stone hover:text-white transition-colors p-2">
              <Github className="w-8 h-8" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-zen-stone hover:text-white transition-colors p-2">
              <Mail className="w-8 h-8" />
            </a>
            {/* Add LinkedIn if available or keeping generic social block */}
          </div>

          <div className="text-sm text-zen-stone/60 pt-12 border-t border-white/10">
            <p className="mb-2">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <p className="font-jp-serif">Designed & Built with <span className="text-jp-red">♥</span> in Tokyo (東京)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
