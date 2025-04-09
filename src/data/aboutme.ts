export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  skills?: string[];
}

export const aboutMe: AboutMe = {
  name: "Arjun",
  title: "Senior Frontend Engineer",
  institution: "Qilin Lab",
  // Note that links work in the description
  description:
    "A results-driven Senior Frontend Engineer with a passion for building scalable and high-performance web applications. Proven ability to lead UI development using modern technologies like React.js , Next.js and TypeScript, drive architectural improvements, and mentor development teams.",
  email: "arjun.codesmith@gmail.com",
  // imageUrl:
  //   "https://github.com/mrwick1.png",
  googleScholarUrl: undefined,
  githubUsername: "mrwick1",
  linkedinUsername: "arjunp-software-developer",
  twitterUsername: "03arjunkr",
  blogUrl: undefined,
  cvUrl: "/assets/Arjun P - Senior Frontend Developer.pdf",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Jest",
    "React Testing Library",
    "Docker",
    "AWS",
    "CI/CD"
  ],
  // altName: "",
  // secretDescription: "I like dogs.",
};
