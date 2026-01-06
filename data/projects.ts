export interface ProjectDetails {
  id: string;
  title: string;
  year: string;
  intro: string;
  liveUrl: string;
  images: string[];
  thoughtsTitle: string;
  thoughtsBody1: string;
  thoughtsBody2: string;
}

export const projects: ProjectDetails[] = [
  {
    id: "hikka-villa",
    title: "Hikka Villa.",
    year: "/2025",
    intro:
      "A luxury hospitality platform designed to showcase serene coastal living. I focused on creating a seamless booking experience combined with high-performance visual storytelling.",
    liveUrl: "https://hikkavilla.com",
    images: ["/projects/test.jpeg", "/projects/hikka.png"],
    thoughtsTitle: "This project redefined how I view digital hospitality.",
    thoughtsBody1:
      "The challenge was balancing high-resolution imagery with fast load times. I implemented advanced image optimization techniques to ensure the 'premium' feel wasn't lost to lag.",
    thoughtsBody2:
      "By merging technical precision with intuitive design, I built an experience that doesn't just function—it invites the user to relax.",
  },
  {
    id: "core-forge",
    title: "Core Forge.",
    year: "/2025",
    intro:
      "An industrial-grade dashboard for managing manufacturing workflows. Built for speed and reliability, Core Forge handles complex data visualization in real-time.",
    liveUrl: "https://coreforge.io",
    images: ["/projects/test.jpeg", "/projects/hikka.png"],
    thoughtsTitle: "Efficiency is the ultimate form of sophistication.",
    thoughtsBody1:
      "I utilized React Query and WebSockets to ensure that data remains consistent without manual refreshes, allowing floor managers to make split-second decisions.",
    thoughtsBody2:
      "The UI is intentionally minimal to reduce cognitive load, keeping the focus entirely on the metrics that matter most.",
  },
  {
    id: "palm-sort",
    title: "Palm Sort.",
    year: "/2024",
    intro:
      "An AI-driven inventory management system tailored for agricultural exports. It uses machine learning to predict stock depletion and suggest optimal sorting patterns.",
    liveUrl: "https://palmsort.app",
    images: ["/projects/test.jpeg", "/projects/hikka.png"],
    thoughtsTitle: "Bridging the gap between nature and technology.",
    thoughtsBody1:
      "Integrating ML models into a web interface required careful state management to ensure the user wasn't waiting on heavy processing.",
    thoughtsBody2:
      "It reflects my belief that even traditional industries can be revolutionized through clean, purposeful code.",
  },
  {
    id: "minvens",
    title: "Minvens.",
    year: "/2025",
    intro:
      "A minimalist event management tool that strips away the noise. Minvens allows creators to launch ticketed events in under sixty seconds.",
    liveUrl: "https://minvens.com",
    images: ["/projects/test.jpeg", "/projects/hikka.png"],
    thoughtsTitle: "Speed and simplicity are the core pillars here.",
    thoughtsBody1:
      "I leveraged Next.js Server Components to make the landing pages incredibly fast, which is critical for conversion rates during high-traffic ticket drops.",
    thoughtsBody2:
      "The final product is a testament to the idea that sometimes, less truly is more.",
  },
];
