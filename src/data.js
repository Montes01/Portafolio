/* ------------------------------------------------------------------
   PORTFOLIO DATA  -  edit everything here, nothing else needs touching.
   Anything still marked "PLACEHOLDER" is mock content to replace.
   ------------------------------------------------------------------ */

export const portfolio = {
  profile: {
    name: "Samuel Montes Guevara",
    role: "Full Stack Developer",
    location: "Armenia, Quindío, Colombia",
    email: "samuelmontes1105@gmail.com",
    resume: "#", // link to your CV / PDF
    socials: [
      { label: "Email", url: "mailto:samuelmontes1105@gmail.com" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/samuel-montes-guevara-178305256",
      },
      { label: "GitHub", url: "https://github.com/Montes01" },
      { label: "WhatsApp", url: "https://wa.me/573223544791" },
    ],
  },

  // Rendered large-inline at the very start of the About text.
  aboutLead: "+2",

  about: [
    "years of experience. I'm a software developer focused on front-end work, interfaces and the logic behind them. My day-to-day is JavaScript and TypeScript with React, Next.js, React Native and Angular, plus enough Node.js to move comfortably across the stack.",
    "I've worked on real products in both corporate and freelance settings, from an Angular platform with Cypress and Jest test coverage to full-stack web and mobile apps deployed on AWS. I enjoy AI-assisted workflows (Claude, OpenCode) when they genuinely shorten the loop, and I'm known for communicating clearly and following through with attention to detail.",
  ],

  // Leave stats empty ([]) to drop the block entirely.
  stats: [
    { value: "ES / EN", label: "Working languages" },
  ],

  skills: [
    {
      group: "Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "SASS"],
    },
    {
      group: "Frameworks & libraries",
      items: ["React", "Next.js", "React Native", "Angular", "AngularJS", "Redux"],
    },
    {
      group: "Backend & cloud",
      items: ["Node.js", "AWS", "Lambda", "SAM"],
    },
    {
      group: "Testing & tooling",
      items: ["Cypress", "Jest", "Git", "GitLab"],
    },
    {
      group: "AI-assisted dev",
      items: ["Claude", "OpenCode"],
    },
  ],

  projects: [
    {
      title: "Fundación Droopy Manuel",
      year: "2026",
      summary:
        "The site and back office of a community dog foundation. The team manages and publishes the dogs in their pack (photos, ages, stories), posts news, collects donations and sells merch through a solidarity shop with a cart, with images served from Vercel Blob.",
      tags: ["SvelteKit", "Svelte", "Vercel", "Vercel Blob"],
      link: "https://droopy-manuel.vercel.app/",
      // Placeholder photo - swap for a real screenshot of the project.
      image: "public/Droopy.jpeg",
      featured: true,
    },
  ],

  experience: [
    {
      role: "Full Stack Developer",
      company: "Melt Studio",
      period: "Feb 2026 - Present",
      description:
        "Building web and mobile applications with Next.js and React Native. I use AI-assisted workflows (Claude, OpenCode) to shorten delivery and improve code quality, and work with AWS for deployment, infrastructure and cloud services.",
      tags: ["Next.js", "React Native", "TypeScript", "AWS"],
    },
    {
      role: "Web Developer",
      company: "Shuffle Up, Freelance",
      period: "Dec 2024 - Jan 2026",
      description:
        "Front-end developer on a team building an Angular-based product. Worked with AngularJS, SASS, JavaScript, TypeScript, HTML and CSS, wrote tests with Cypress and Jest, and kept the workflow collaborative through Git and GitLab.",
      tags: ["Angular", "SASS", "TypeScript", "Cypress", "Jest"],
    },
    {
      role: "Web Developer",
      company: "PRAGMA, Internship",
      period: "Apr 2024 - Oct 2024",
      description:
        "Six months of web development with React, Redux Toolkit, TypeScript and SASS, with occasional backend support in Node.js using Lambda, TypeScript and SAM.",
      tags: ["React", "Redux Toolkit", "SASS", "Node.js", "AWS Lambda"],
    },
  ],

  // Leave empty ([]) to hide the "Testimonials" section.
  testimonials: [],
};
