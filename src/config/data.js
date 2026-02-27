import { Server, Activity, Layout, Database, Cloud, Code, Smartphone, Briefcase } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Ghanta Naren Sri Sai",
  role: "Software Engineer — Full Stack",
  company: "NatWest Group",
  location: "Hyderabad",
  email: "Narensai29@gmail.com",
  phone: "+91 9704276854",
  summary: "Building resilient, high-throughput backend systems with Java, Spring Boot, Kafka, and crafting dynamic frontends with React. Passionate about distributed systems, clean architecture, and delivering unified product experiences at scale.",
  github: "https://github.com/Narensai29",  // Replace with actual if needed
  linkedin: "https://www.linkedin.com/in/naren-sri-sai-934787b1" // Replace with actual if needed
};

export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer — Full Stack",
    company: "NatWest Group",
    date: "Jan 2024 — Present",
    icon: Server,
    bullets: [
      "Architecting and scaling core banking microservices using Java and Spring Boot, servicing high-throughput transaction loads.",
      "Implementing robust event-driven data architectures utilizing Apache Kafka to synchronize distributed services in real-time.",
      "Spearheading the transition of legacy internal tools to modern React applications, significantly improving operational workflows.",
      "Integrating Camunda BPM for complex business orchestration, assuring process reliability and strict compliance logging."
    ],
    tech: ["Java", "Spring Boot", "React", "Apache Kafka", "Camunda", "Microservices"]
  },
  {
    role: "Research Intern",
    company: "NIT Surat",
    date: "Jan 2024 — May 2024",
    icon: Activity,
    bullets: [
      "Formulated a novel detection strategy for common colds using speech/mel-spectrogram characteristics under academic supervision.",
      "Fine-tuned and deployed dilated Convolutional Neural Networks (CNN) for optimal feature extraction from signal data."
    ],
    tech: ["Python", "Deep Learning", "Signal Processing"]
  }
];

export const PROJECTS = [
  {
    title: "FinTrack Enterprise Ledger",
    description: "A secure, resilient financial ledger application. Utilizes a CQRS architecture and event sourcing with Kafka to ensure absolute data consistency. The React frontend presents real-time visualizations of complex transaction data.",
    icon: Briefcase,
    colorFrom: "#0f172a",
    colorTo: "#1e1b4b",
    tech: ["Java", "Spring Boot", "React", "Kafka", "PostgreSQL", "Docker", "Tailwind CSS"],
    sourceUrl: "https://github.com/Narensai29",
    demoUrl: "#"
  },
  {
    title: "Global Travels Network",
    description: "A full-stack, highly scalable social media application tailored for global travelers. Features robust REST APIs, distributed session management, and a dynamic frontend utilizing Redux for centralized state mapping.",
    icon: Cloud,
    colorFrom: "#022c22",
    colorTo: "#064e3b",
    tech: ["Node.js", "Express", "React", "MongoDB", "Redux", "JWT Auth", "AWS S3"],
    sourceUrl: "https://github.com/Narensai29",
    demoUrl: "#"
  },
  {
    title: "Streamline BPM Engine",
    description: "A custom overlay and dashboard for Camunda BPM engines designed for banking operational workflows. Reduces manual processing time by automating approval steps and provides a unified view of task lifecycles.",
    icon: Activity,
    colorFrom: "#2e1065",
    colorTo: "#4c1d95",
    tech: ["Spring Boot", "Camunda", "Java 17", "React", "Material-UI", "MySQL"],
    sourceUrl: "https://github.com/Narensai29",
    demoUrl: "#"
  },
  {
    title: "Real-time Code Collab",
    description: "A web-based collaborative IDE for interview prep. Synchronizes code edits in real-time across multiple clients using WebSockets and handles isolated code execution via a backend microservice.",
    icon: Code,
    colorFrom: "#3f2b96",
    colorTo: "#a8c0ff",
    tech: ["React", "Socket.io", "Node.js", "Docker", "Redis", "Monaco Editor"],
    sourceUrl: "https://github.com/Narensai29",
    demoUrl: "#"
  }
];

export const SKILLS = [
  {
    category: "Backend Development",
    icon: Server,
    tags: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "Microservices Architecture"],
    iconBg: "rgba(139, 92, 246, 0.1)",
    iconColor: "var(--accent2)"
  },
  {
    category: "Event Streaming & BPM",
    icon: Activity,
    tags: ["Apache Kafka", "Camunda BPM", "Event-Driven Architecture", "Workflow Automation"],
    iconBg: "rgba(244, 63, 94, 0.1)",
    iconColor: "#f43f5e"
  },
  {
    category: "Frontend Engineering",
    icon: Layout,
    tags: ["React", "JavaScript (ES6+)", "Redux Toolkit", "HTML5", "CSS3 / Tailwind", "Material-UI"],
    iconBg: "rgba(59, 130, 246, 0.1)",
    iconColor: "var(--accent)"
  },
  {
    category: "Data & Infrastructure",
    icon: Database,
    tags: ["PostgreSQL", "MongoDB", "MySQL", "Docker", "AWS", "CI/CD (Git Actions)"],
    iconBg: "rgba(20, 184, 166, 0.1)",
    iconColor: "var(--accent3)"
  }
];
