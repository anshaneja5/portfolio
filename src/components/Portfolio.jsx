import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, ChevronDown, Github } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "mldl.study",
      description: "Interactive roadmaps for ML/DL learning with 9,000+ users across 127+ countries",
      tech: "React, TailwindCSS, Open Source",
      metrics: ["9,000+ users", "127+ countries", "200,000+ views", "150+ GitHub stars"],
      link: "https://github.com/anshaneja5/mldl.study"
    },
    {
      title: "Doooodle",
      description: "CNN-powered doodle recognition with 96% accuracy using Google's Quick Draw dataset",
      tech: "Python, Flask, TensorFlow",
      metrics: ["96% accuracy", "300,000 training images", "Real-time predictions"],
      link: "#"
    },
    {
      title: "StudyNotion",
      description: "Full-stack ed-tech platform with content creation and consumption capabilities",
      tech: "MERN Stack, Redux, Razorpay",
      metrics: ["Scalable architecture", "RESTful APIs", "Secure authentication"],
      link: "#"
    },
    {
      title: "WhatsApp Bots",
      description: "Automated notification systems for educational updates and hackathon alerts",
      tech: "NodeJS, ExpressJS, MongoDB",
      metrics: ["Real-time updates", "Automated scraping", "Multiple bot instances"],
      link: "#"
    }
  ];

  const skills = {
    languages: ["C++", "Python", "JavaScript"],
    frameworks: ["Node.js", "ExpressJS", "Flask", "Redux"],
    tools: ["Git", "VSCode", "Postman", "GitHub"],
    libraries: ["TensorFlow", "Keras", "ScikitLearn", "Pandas"]
  };

  const achievements = [
    {
      icon: "🏆",
      title: "LeetCode Warrior",
      description: "Solved over 200 problems on LeetCode"
    },
    {
      icon: "📜",
      title: "CBSE Merit Certificate",
      description: "Perfect score (100/100) in AISSCE"
    },
    {
      icon: "🎓",
      title: "Academic Excellence Award",
      description: "Awarded by the Director of Education, New Delhi"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Ansh Aneja</h1>
            <div className="flex items-center gap-6">
              <a href="https://github.com/anshaneja5" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:anshanejaa@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918448557043" className="hover:text-purple-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Hey, I'm Ansh 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              A Computer Engineering student at DTU with a passion for building impactful software solutions
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors">
                View Projects
              </a>
              <a href="https://github.com/anshaneja5" target="_blank" rel="noopener noreferrer" className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all">
                GitHub
              </a>
            </div>
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-400" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="text-sm text-purple-400 mb-4">{project.tech}</div>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Libraries & More</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((skill) => (
                    <span key={skill} className="bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-zinc-900 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center text-2xl">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">{achievement.title}</h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-purple-400">Delhi Technological University (DTU)</h3>
              <p className="text-lg text-gray-300">B.Tech in Computer Engineering</p>
              <p className="text-gray-400">2022 – 2026</p>
              <p className="text-gray-400">GPA: 8.465</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-purple-400">Rich Harvest Public School</h3>
              <p className="text-lg text-gray-300">AISSCE (Class XII)</p>
              <p className="text-gray-400">2022</p>
              <p className="text-gray-400">Percentage: 95.8%</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-purple-400">Rich Harvest Public School</h3>
              <p className="text-lg text-gray-300">AISCE (Class X)</p>
              <p className="text-gray-400">2020</p>
              <p className="text-gray-400">Percentage: 89.8%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-lg mx-auto bg-zinc-900 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="font-bold text-gray-300">Email</h3>
                  <a href="mailto:anshanejaa@gmail.com" className="text-purple-400 hover:underline">anshanejaa@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="font-bold text-gray-300">Phone</h3>
                  <a href="tel:+918448557043" className="text-purple-400 hover:underline">+91 8448557043</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="font-bold text-gray-300">GitHub</h3>
                  <a href="https://github.com/anshaneja5" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">anshaneja5</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Ansh Aneja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;