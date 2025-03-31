export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}
export const experienceData: Experience[] = [
  {
    date: "Aug 2024 - Present",
    title: "Senior Frontend Developer",
    company: "Qilin Labs",
    description:
      "Currently leading UI development for an educational platform using React.js, TypeScript, MUI, and Redux, focusing on responsive, accessible, and scalable user experiences.",
    // advisor: "Peter Wang", // No advisor mentioned in the resume
    // manager: "Elise Brown",
    // companyUrl: "https://deepmind.com", // Company URL not in resume
  },
  {
    date: "Mar 2023 - Sept 2024",
    title: "Software Engineer",
    company: "Hubspire Corp",
    description:
      "Engineered high-performance UIs with React.js, TypeScript, GraphQL, and Redux. Refactored legacy systems, improved architecture, and led technology stack selection. Developed reusable UI components and mentored junior developers.",
    // manager: "Elise Brown",
    // companyUrl: "https://google.com", // Company URL not in resume
  },
  {
    date: "Feb 2022 - Mar 2023",
    title: "React JS Developer",
    company: "Woxro Technology Solutions",
    description:
      "Created and implemented architecture and modules for banking and e-commerce applications with integrated payment systems. Built and optimized user interfaces with error handling, focusing on improved UI/UX.",
    // companyUrl: "https://google.com", // Company URL not in resume
  },
  {
    date: "July 2021 - Feb 2022",
    title: "Web developer",
    company: "Limenzy Technologies",
    description:
      "Maintained and updated legacy projects, created custom WordPress sites and themes, and converted designs from Figma and Adobe into responsive HTML/CSS.",
    // companyUrl: "https://google.com", // Company URL not in resume
  },
];