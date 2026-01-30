export interface ProjectDetails {
  id: string;
  title: string;
  year: string;
  intro: string;
  liveUrl: string;
  images: string[];
  thoughtsTitle: string;
  thoughtsBody1: string;
  meta: {
    location: string;
    industry: string;
    services: string;
    timeline: string;
  };
  challenge: string;
  solution: string;
  highlights: string[];
}

export const projects: ProjectDetails[] = [
  {
    id: "hikka-villa",
    title: "Hikka Villa.",
    year: "/2025",
    intro:
      "Hikka Villa is a luxury villa chain based in Hikkaduwa, Sri Lanka. The project focused on translating serene coastal living into a fast, intuitive digital experience that supports seamless bookings.",
    meta: {
      location: "Hikkaduwa, Sri Lanka",
      industry: "Luxury Hospitality",
      services: "Design and Development",
      timeline: "3 Weeks",
    },
    challenge:
      "Create a calm, high-end experience that stands out in a competitive hospitality market while maintaining speed, clarity, and ease of use across devices.",
    solution:
      "A clean, image-led website was designed to highlight the natural setting of the villas. The site structure was built as a focused sales funnel, guiding users from exploration to booking without distraction.",
    highlights: [
      "Luxury-focused visual storytelling",
      "Responsive, performance-driven layout",
      "Clear booking journey",
    ],
    liveUrl: "https://hikkavilla.com",
    images: [
      "/projectImages/devices/hikkaVilla.png",
      "/projectImages/withName/hikka.png",
      "/projectImages/sub/hikka.webp",
    ],
    thoughtsTitle: "Digital hospitality.",
    thoughtsBody1:
      "The result is a refined hospitality platform that balances atmosphere and function, delivering a smooth user experience while maximizing conversions.",
  },
  {
    id: "pasikudah-villa",
    title: "Pasikudah Villa.",
    year: "/2025",
    intro:
      "This project involved designing a website for a private villa in Pasikudah, Sri Lanka. The goal was to present the property clearly and attractively, allowing visitors to understand the space, atmosphere, and quality of the villa at a glance.",
    meta: {
      location: "Pasikudah, Sri Lanka",
      industry: "Hospitality",
      services: "Design and Development",
      timeline: "2 Weeks",
    },
    challenge:
      "The client did not want direct bookings through the website. The challenge was to showcase the full villa experience while still guiding visitors toward meaningful inquiries without relying on traditional booking systems.",
    solution:
      "A gallery-driven layout was created to highlight the villa’s interiors, surroundings, and amenities. The site structure was planned as a subtle sales funnel, using visual hierarchy and content flow to build interest and encourage direct contact.",
    highlights: [
      "Gallery-focused visual presentation",
      "Clean and distraction-free layout",
      "Performance-optimized images",
      "Inquiry-driven conversion flow",
    ],
    liveUrl: "https://pasikudahpalmsort.com/",
    images: [
      "/projectImages/devices/palmSort.png",
      "/projectImages/withName/palmSort.png",
      "/projectImages/sub/palmSort.webp",
    ],
    thoughtsTitle: "The Architecture of Invitation.",
    thoughtsBody1:
      "This project shows how a website can convert without direct bookings. By focusing on visual storytelling and thoughtful structure, the site successfully turns interest into action while keeping the experience calm and uncomplicated.",
  },
  {
    id: "minvens",
    title: "minvens Finance.",
    year: "/2025",
    intro:
      "Minvense Finance is a Sri Lankan micro credit firm offering accessible financial services to a broad customer base. The purpose of this project was to present the company’s services clearly while creating a website that actively supports lead generation and conversions.",
    meta: {
      location: "Sri Lanka",
      industry: "Finance",
      services: "Design and Development",
      timeline: "3 Weeks",
    },
    challenge:
      "The website needed to explain financial services in a clear and reassuring way while encouraging users to take action. Since the target audience included many users over the age of thirty, usability, readability, and navigation clarity were critical.",
    solution:
      "A user-friendly interface was designed with strong attention to UX and UI fundamentals. Content was structured to guide visitors through the services step by step, forming a clear sales funnel that leads naturally to inquiries and lead submissions.",
    highlights: [
      "Conversion-focused sales funnel",
      "Lead capture and inquiry flows",
      "Clear service presentation",
      "User-friendly design for mature audiences",
      "Clean and accessible interface",
    ],
    liveUrl: "https://minvens.com/",
    images: [
      "/projectImages/devices/minVens.png",
      "/projectImages/withName/minVens.png",
      "/projectImages/sub/minVens.webp",
    ],
    thoughtsTitle: "The Currency of Clarity.",
    thoughtsBody1:
      "This project demonstrates how thoughtful UX and structured design can drive results in the financial sector. The final website balances clarity and trust while effectively turning visitors into qualified leads.",
  },
  {
    id: "tesbious-core-forge",
    title: "Tesbious Core Forge",
    year: "/2025",
    intro:
      "Tesbious Core Forge is an IT services platform that provides outsourced software developers to overseas companies at a flat rate. The service connects international businesses with skilled IT professionals based in Sri Lanka.",
    meta: {
      location: "Sri Lanka",
      industry: "IT Services",
      services: "Design and Development",
      timeline: "4 Weeks",
    },
    challenge:
      "The challenge was to present a technical service to an international audience in a way that felt clear, reliable, and easy to understand. The website needed to support lead generation and service purchases while remaining simple and accessible for decision-makers in overseas IT companies.",
    solution:
      "A structured, conversion-focused website was designed with strong attention to UX and UI principles. The content flow was planned as a complete sales funnel, guiding visitors through the service offering, building confidence, and leading them toward inquiries and purchases. ",
    highlights: [
      "Conversion-driven sales funnel",
      "Lead capture and service purchase flows",
      "Clear service positioning",
      "UX-focused design for B2B audiences",
      "Clean and professional interface",
    ],
    liveUrl: "/",
    images: [
      "/projectImages/devices/coreForge.png",
      "/projectImages/withName/coreForge.png",
      "/projectImages/sub/coreForge.webp",
    ],
    thoughtsTitle: "Architecting Global Trust",
    thoughtsBody1:
      "This project highlights how thoughtful UX and strategic structure can support global IT services. The final website delivers clarity, builds trust, and effectively converts international visitors into clients.",
  },
];
