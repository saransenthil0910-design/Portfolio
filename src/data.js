export const profile = {
  name: "SARANKUMAR ",
  shortName: "Sarankumar",
  role: "Frontend Developer",
  location: "Chennai, Tamil Nadu",
  email: "saransenthil0910@gmail.com",
  phone: "9025042085",
  phoneHref: "tel:+919025042085",
  intro:
    "Frontend Developer focused on building responsive and user-friendly web applications using HTML, CSS, JavaScript and React.js.",
  about:
    "I am focused on Frontend Development and building responsive, user-friendly web applications. I work with modern web technologies and enjoy creating clean and interactive user experiences.",
};

export const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/saransenthil0910-design",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/sarankumar1103",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/smiley_.saran_/",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919025042085",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// "icon" keys are resolved in components/TechLogos.jsx (SkillIcon)
export const aboutTech = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  {name:"Bootstrap3",icon:"Bootstrap3"},
  { name: "JavaScript", icon: "js" },
  { name: "React.js", icon: "react" },
  { name: "React Router", icon: "router" },
  { name: "Redux Toolkit", icon: "redux" },
  { name: "Axios", icon: "axios" },
  { name: "REST API", icon: "rest" },
  { name: "Git / GitHub", icon: "git" },
];

export const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
       {name:"Bootstrap3",icon:"Bootstrap3"},
      { name: "JavaScript", icon: "js" },
      { name: "React.js", icon: "react" },
      { name: "JSX", icon: "jsx" },
      { name: "React Components", icon: "components" },
      { name: "React Router", icon: "router" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Responsive Web Design", icon: "responsive" },
    ],
  },
  {
    title: "API & Tools",
    skills: [
      { name: "Axios", icon: "axios" },
      { name: "REST API", icon: "rest" },
      { name: "LocalStorage", icon: "storage" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

export const projects = [
  {
    title: "CineScope",
    subtitle: "Movie Discovery Platform",
    preview: "movie",
    description:
      "Built a responsive movie discovery application with movie search, pagination, movie details and favorites functionality.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Axios",
      "OMDb REST API",
      "React Router",
      "LocalStorage",
    ],
    features: [
      "Movie search",
      "Movie details",
      "Pagination",
      "Favorites",
      "OMDb API integration",
      "Axios API requests",
      "React Router navigation",
      "LocalStorage",
      "Loading and error handling",
      "Responsive design",
    ],
    liveUrl: "https://cine-scope-gilt.vercel.app/",
    githubUrl: "https://github.com/saransenthil0910-design/CineScope",
  },
  {
    title: "Powfect",
    subtitle: "Pet Care E-Commerce Website",
    preview: "pet",
    description:
      "Developed a responsive pet care website with a clean and user-friendly interface.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Pet care services",
      "Adoption",
      "Veterinary care",
      "Training",
      "Pet products",
      "Responsive product layouts",
    ],
    liveUrl: "https://powfect.vercel.app/customer-signup.html",
    githubUrl: "https://github.com/saransenthil0910-design/Powfect",
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Electronics and Communication Engineering",
  college: "Muthayammal College of Engineering",
  year: "2026",
};
