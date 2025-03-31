export interface Certification {
  date: string;
  title: string;
  issuer: string;
  description?: string;
  link?: string;
  credentialId?: string;
}

export const certificationData: Certification[] = [
    {
      date: "Jun 2024", // You might want to add the completion date if available in your Coursera profile
      title: "Meta Front-End Developer Specialization",
      issuer: "Coursera",
      description: "A comprehensive program covering the fundamentals of front-end web development.",
      // credentialId: "UDYH1AJVW459", // It's up to you if you want to include this.
      link: "https://www.coursera.org/account/accomplishments/specialization/UDYH1AJVW459",
    },
    {
      date: "Aug 2024",
      title: "Advanced React",
      issuer: "Coursera",
      description: "Advanced concepts and techniques in React development.",
      // credentialId: "1S0JUJ88024W",
      link: "https://www.coursera.org/account/accomplishments/records/1S0JUJ88024W",
    },
    {
      date: "Aug 2024",
      title: "Front-End Developer Capstone",
      issuer: "Coursera",
      description: "A capstone project demonstrating front-end development skills.",
      // credentialId: "5RB5KTJB7ESY",
      link: "https://www.coursera.org/account/accomplishments/records/5RB5KTJB7ESY",
    },
    {
      date: "Aug 2024",
      title: "Principles of UX/UI Design",
      issuer: "Coursera",
      description: "Fundamental principles and practices of UX/UI design.",
      // credentialId: "1BXH6997CR3S",
      link: "https://www.coursera.org/account/accomplishments/records/1BXH6997CR3S",
    },
    {
      date: "Aug 2024",
      title: "React Basics",
      issuer: "Coursera",
      description: "Introduction to the React JavaScript library.",
      // credentialId: "MBTAMF4IPXU5",
      link: "https://www.coursera.org/account/accomplishments/records/MBTAMF4IPXU5",
    },
  ];