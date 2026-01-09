import React from 'react';
import HeroSection from './components/sections/HeroSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import WashiTexture from './components/ui/WashiTexture';
import { personalInfo, workExperience, projects, skills, education } from './data/portfolioData';

const App = () => {
  const portfolioData = {
    personalInfo,
    workExperience,
    projects,
    skills,
    education,
  };

  return (
    <div className="relative min-h-screen w-full bg-zen-paper overflow-x-hidden selection:bg-jp-red selection:text-white">
      {/* Global Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-40 mix-blend-multiply">
        <WashiTexture />
      </div>

      <main className="relative z-0 flex flex-col">
        <HeroSection data={portfolioData} />
        <ExperienceSection data={portfolioData} />
        <ProjectsSection data={portfolioData} />
        <SkillsSection data={portfolioData} />
        <EducationSection data={portfolioData} />
        <ContactSection data={portfolioData} />
      </main>
    </div>
  );
};

export default App;