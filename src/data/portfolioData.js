export const personalInfo = {
  name: "Ansh Aneja",
  nameJp: "アンシュ",
  role: "Software Developer",
  company: "Rimo LLC",
  location: "Tokyo",
  locationJp: "東京",
  tagline: "Building impactful products from the heart of Japan's tech capital",
  email: "anshanejaa@gmail.com",
  phone: "+91 8448557043",
  github: "https://github.com/anshaneja5",
  resumeLink: "https://drive.google.com/file/d/1Os934_hPDzE_DreS-uGowb3K4KY0HHUk/view?usp=sharing",
};

export const workExperience = [
  {
    company: "Rimo LLC",
    companyJp: "リモ",
    location: "Tokyo, Japan",
    locationJp: "東京",
    role: "Software Developer Intern",
    period: "December 2025 - Present",
    description: [
      "Engineered automated prompt optimization system reducing manual cycles by 90% (hours to minutes), achieving up to +25% pass rate improvements across production LLM workflows",
      "Built meta-LLM feedback loop analyzing per-category failures across 4 meeting types, delivering 2 scenarios at 100% pass rate and 2 at production-ready 97-98%",
      "Created /add-scenario automation tool enabling non-technical users to set up end-to-end optimization workflows with full traceability and reproducible results",
    ],
    metrics: [
      { value: "90%", label: "Faster Cycles" },
      { value: "+25%", label: "Pass Rate Gain" },
    ],
    tech: ["Promptfoo", "LLM Prompt Engineering", "JavaScript", "Python"],
    featured: true,
  },
  {
    company: "Bachatt",
    companyJp: "バチャット",
    location: "Gurgaon, India",
    locationJp: "インド",
    role: "Software Development Engineer Intern",
    period: "May 2025 - July 2025",
    description: [
      "Architected and deployed RAG model on Amazon EC2 to automate customer support, reducing support queries by 36%",
      "Implemented production infrastructure with JWE for secure session management and Grafana monitoring for real-time system health tracking",
    ],
    metrics: [
      { value: "36%", label: "Query Reduction" },
    ],
    tech: ["Node.js", "AWS EC2", "MongoDB", "Grafana", "RAG"],
    featured: false,
  },
];

export const projects = [
  {
    title: "mldl.study",
    titleJp: "機械学習",
    description: "Comprehensive ML roadmap platform serving global users with structured learning paths. Open-sourced with modular architecture and optimized performance.",
    tech: ["React.js", "Tailwind CSS", "Open Source"],
    metrics: [
      { value: "23K+", label: "Users" },
      { value: "150+", label: "Countries" },
      { value: "350+", label: "GitHub Stars" },
    ],
    link: "https://github.com/anshaneja5/mldl.study",
    live: "https://mldl.study",
    featured: true,
    accent: "red",
  },
  {
    title: "Engimatch",
    titleJp: "マッチング",
    description: "Event-based dating platform for college fest attendees. Built and monetized with payment gateway integration, achieving viral growth in 3 days.",
    tech: ["MERN Stack", "Cashfree", "Vercel", "Heroku"],
    metrics: [
      { value: "3K", label: "Users" },
      { value: "500K+", label: "Views" },
      { value: "100+", label: "Matches" },
    ],
    monetized: true,
    featured: true,
    accent: "gold",
    live: "https://engimatch.in/",
  },
];

export const skills = {
  languages: {
    title: "Languages",
    titleJp: "言語",
    items: ["JavaScript (Node.js)", "Python", "C++", "SQL"],
  },
  frameworks: {
    title: "Frameworks & Libraries",
    titleJp: "フレームワーク",
    items: ["Express.js", "React.js", "MongoDB", "Redis", "JWT", "REST APIs", "Socket.IO"],
  },
  cloud: {
    title: "Cloud & Deployment",
    titleJp: "クラウド",
    items: ["AWS EC2", "Vercel", "Heroku", "Railway.app", "Google Analytics"],
  },
  tools: {
    title: "Developer Tools",
    titleJp: "ツール",
    items: ["Git", "VSCode", "Postman", "Grafana", "GitHub Actions", "Promptfoo"],
  },
  specializations: {
    title: "Specializations",
    titleJp: "専門",
    items: ["LLM Prompt Engineering", "API Design", "Database Architecture", "Payment Integration"],
  },
  design: {
    title: "Design & Creative",
    titleJp: "デザイン",
    items: ["Figma", "UI/UX Design", "Adobe Creative Suite", "Wireframing"],
  },
};

export const education = [
  {
    institution: "Delhi Technological University (DTU)",
    institutionJp: "デリー工科大学",
    degree: "B.Tech in Computer Engineering",
    period: "2022 - 2026",
    score: "8.64 GPA",
    location: "New Delhi, India",
  },
  {
    institution: "Rich Harvest Public School",
    degree: "AISSCE (Class XII)",
    period: "2022",
    score: "95.8%",
    location: "New Delhi, India",
  },
  {
    institution: "Rich Harvest Public School",
    degree: "AISCE (Class X)",
    period: "2020",
    score: "89.8%",
    location: "New Delhi, India",
  },
];

export const navLinks = [
  { label: "Experience", jp: "経験", href: "#experience" },
  { label: "Projects", jp: "作品", href: "#projects" },
  { label: "Skills", jp: "技術", href: "#skills" },
  { label: "Contact", jp: "連絡", href: "#contact" },
];
