export interface Skill {
  image: string;
  category: string;
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    image: "https://www.foo.software/content/images/2020/08/react-next.png",
    category: "Technical FE",
    title: "HTML/CSS + JS + React Typescript",
    description:
      "Atomic design system to develop a pixel perfect output, for e-commerce framework which is used for 10+ sites and more by 10M+ Clients.",
  },
  {
    image: "/images/skill2.png",
    category: "Technical BE",
    title: "Node JS + Python + Apollo Graphql",
    description:
      "Skilled in Apollo GraphQL for API development and data management. Typical knowledge in Node.js and python, with minimal experience.",
  },
  {
    image: "/images/skill3.png",
    category: "CMS, Database",
    title: "DynamoDB + MongoDB + Datocms",
    description:
      "Used GraphQL schema management for CMS Pages. Minor work experience in DynamoDB, bug fixes. Self learning MongoDB.",
  },
  {
    image: "/images/skill4.png",
    category: "Search + Marketing",
    title: "Klaviyo + Algolia + GA4 + Meta",
    description:
      "Experience in Klaviyo for marketing emails, abandon cart/checkout flow. GA4 for User and marketing analytics. Used algolia for search refinements",
  },
  {
    image: "/images/post-two.jpg",
    category: "Design",
    title: "Figma + PSD + Indesign",
    description:
      "Developed Pixel perfect HTML from Figma. Sufficient knowledge in converting design from PSD/Indesign/Illustrator/Xd into HTML.",
  },
  {
    image: "/images/skill6.png",
    category: "OS and Version Control",
    title: "GIT + MAC + Windows + Ubuntu",
    description:
      "Used GIT for versioning, pull requests, Effectively managing branches for live, beta, and dev server. Experience in MAC, Windows, Ubuntu.",
  },
];
