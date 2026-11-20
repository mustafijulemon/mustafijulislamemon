/**
 * Portfolio content. Add achievement photos to /public/achievements and set
 * the matching achievement's image path when the images are available.
 */

export const siteConfig = {
  name: "Mustafijul Islam Emon",
  role: "CSE Student · Software Developer · President, Debating Club of BUBT",
  roles: ["Software Developer Intern", "CSE Student at BUBT", "Competitive Programmer", "National Debater", "President, Debating Club of BUBT"],
  tagline:
    "Computer Science & Engineering student at BUBT and President of the Debating Club of BUBT. Currently interning in software development at GoInnovior Limited and working remotely as a Content Writer at Oriqon Group.",
  bio: [
    "I'm Mustafijul Islam Emon, a Computer Science and Engineering student at Bangladesh University of Business & Technology (BUBT), with a 3.93 / 4.00 CGPA. I currently work as an on-site Software Developer Intern at GoInnovior Limited and a remote Content Writer at Oriqon Group.",
    "My focus is software development, computer science, and competitive programming. Debate and student leadership have also helped me build strong communication and teamwork skills.",
  ],
  location: "Dhaka, Bangladesh",
  email: "mustafijulislamemon55284@gmail.com",
  phone: "+8801784511988",
  availability: "Software Developer Intern · B.Sc. CSE at BUBT",
  resumeUrl: "https://mustafijulemon.github.io/My_portfolio-main/Asset/Emon%20CV%20.pdf",
  formEndpoint: "",
  avatarUrl: "https://avatars.githubusercontent.com/u/197225530?v=4",

  socials: [
    { label: "Portfolio", href: "https://mustafijulemon-protfolio.vercel.app/", icon: "globe" },
    { label: "GitHub", href: "https://github.com/mustafijulemon", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mustafijul-islam-emon/",
      icon: "linkedin",
    },
    {
      label: "Codeforces",
      href: "https://codeforces.com/profile/MustafijulIslamEmon",
      icon: "code",
    },
    { label: "Facebook", href: "https://www.facebook.com/mustafijul.islam.emon", icon: "facebook" },
    { label: "Email", href: "mailto:mustafijulislamemon55284@gmail.com", icon: "mail" },
  ],
} as const;

export const stats = [
  { label: "B.Sc. CSE CGPA", value: "3.93" },
  { label: "ICPC Asia Dhaka Regional Preliminary", value: "11th" },
  { label: "BIUPC Preliminary 2025", value: "5th" },
  { label: "Current professional roles", value: "2" },
];

export const about = {
  headline: "CSE student. Software developer. Problem solver.",
  body: "A computer science student at BUBT gaining professional experience in software development while building practical projects and sharpening problem-solving skills.",
  cards: [
    {
      title: "Software development",
      text: "Building academic and personal projects with a focus on practical software and full-stack development.",
    },
    {
      title: "Competitive programming",
      text: "Learning through algorithms, data structures, and programming contests.",
    },
    {
      title: "Debate & leadership",
      text: "Bringing together public speaking, teamwork, and student-club leadership.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Programming & CS",
    icon: "code",
    skills: ["C", "C++", "Java", "Python", "Data Structures", "Algorithms", "Competitive Programming"],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
  },
  {
    title: "Backend & Databases",
    icon: "server",
    skills: ["Node.js", "Django", "Python Flask", "SQL", "MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools & Research",
    icon: "wrench",
    skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Scikit-learn", "SHAP", "LIME"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "web" | "mobile" | "design" | "tooling";
  year?: string;
  featured?: boolean;
  links: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    title: "BUBT Smart Management",
    tagline: "Software Development Project 1",
    description: "An academic software development project completed as part of SDP 1.",
    tags: ["SDP 1", "Academic Project"],
    category: "web",
    featured: true,
    links: {},
  },
  {
    title: "BUBT ClubHub",
    tagline: "Club and event management",
    description: "A club management app for organizing clubs, members, and event requests.",
    tags: ["React", "Python Flask", "SQLite"],
    category: "web",
    year: "SDP 2",
    featured: true,
    links: { repo: "https://github.com/mustafijulemon/BUBT-CLUBHUB-SDP2" },
  },
  {
    title: "Healthcare360",
    tagline: "Software Development Project 3",
    description: "A healthcare-focused academic application project developed as part of SDP 3.",
    tags: ["SDP 3", "Healthcare"],
    category: "web",
    links: {},
  },
  {
    title: "Smart Transit",
    tagline: "Software Development Project 4",
    description: "A software development project focused on smart transit.",
    tags: ["SDP 4", "Transit"],
    category: "web",
    links: {},
  },
  {
    title: "Medlinker",
    tagline: "Healthcare application",
    description: "A healthcare-focused application project.",
    tags: ["Vue.js 3", "Vue Router", "Vite"],
    category: "web",
    featured: true,
    links: { repo: "https://github.com/mustafijulemon/Medlinker" },
  },
  {
    title: "Urban Transport",
    tagline: "Transportation project",
    description: "A transportation-focused project from my recent project work.",
    tags: ["Transportation"],
    category: "web",
    links: {},
  },
  {
    title: "EasyLife",
    tagline: "Personal project",
    description: "A personal project included in my project showcase.",
    tags: ["Personal Project"],
    category: "mobile",
    links: {},
  },
  {
    title: "High Priority",
    tagline: "Project showcase",
    description: "A project included in my academic and personal project history.",
    tags: ["Project"],
    category: "tooling",
    links: {},
  },
];

export type Achievement = {
  title: string;
  category: string;
  detail: string;
  image?: string;
  stat?: string;
};

export const achievements: Achievement[] = [
  {
    title: "B.Sc. Computer Science & Engineering",
    category: "CSE · Academic",
    detail: "CGPA: 3.93 / 4.00 at Bangladesh University of Business & Technology.",
    stat: "3.93 / 4.00",
  },
  {
    title: "ICPC Asia Dhaka Regional Preliminary",
    category: "Competitive Programming",
    detail: "11th place",
    stat: "11th",
  },
  {
    title: "BIUPC Onsite Contest 2024",
    category: "Competitive Programming",
    detail: "19th place",
    stat: "19th",
  },
  {
    title: "BIUPC Preliminary Contest 2025",
    category: "Competitive Programming",
    detail: "5th place",
    stat: "5th",
  },
  {
    title: "Higher Secondary Certificate — Science",
    category: "Academic Achievement",
    detail: "GPA: 5.00 / 5.00 · Board Merit Result",
    stat: "5.00 / 5.00",
  },
  {
    title: "National Debate Champion",
    category: "Debate",
    detail: "Champion at national competitions, including BTV and ATN Bangla televised debates.",
    stat: "Champion",
  },
  {
    title: "President, Debating Club of BUBT",
    category: "Leadership",
    detail: "2026–27",
    stat: "2026–27",
  },
];

export const pressCoverage = [
  { publisher: "Jaijaidin", image: "/press/jaijaidin.png" },
  { publisher: "The Daily News Mail", image: "/press/daily-news-mail.png" },
  { publisher: "Kaler Kantho", image: "/press/kaler-kantho.png" },
];

export const tvDebatePhotos = [
  { image: "/debate/on-the-floor.png", caption: "Speaking during a televised debate." },
  { image: "/debate/team-and-guests.png", caption: "With the debate team and guests." },
  { image: "/debate/team-celebration.png", caption: "Celebrating with the team after the debate." },
  { image: "/debate/award-presentation.png", caption: "A moment from the award presentation." },
  { image: "/debate/public-parliament.png", caption: "Taking part in Public Parliament as opposition team leader." },
];

export const invitationalDebatePhotos = [
  { image: "/debate-events/opening-the-event.png", caption: "Opening the invitational debate competition." },
  { image: "/debate-events/competition-and-awards.png", caption: "With participants and guests during the competition." },
  { image: "/debate-events/audience.png", caption: "Students and guests attending the event." },
  { image: "/debate-events/award-recognition.png", caption: "Receiving recognition at the invitational debate competition." },
];

export const interDepartmentDebatePhotos = [
  { image: "/debate-events/interdepartmental-opening.png", caption: "Speaking at the 5th BUBTDC Inter-Department Debate Competition." },
  { image: "/debate-events/interdepartmental-team.png", caption: "With the organising team at the competition." },
  { image: "/debate-events/interdepartmental-trophies.png", caption: "Competition trophies at the grand opening." },
];

export const debateEventRoles = [
  {
    event: "AP Debate Series · Chapter 03",
    role: "Mentor",
    image: "/debate-events/ap-debate-mentor.png",
  },
  {
    event: "SUBLDS Debate Fest 2026",
    role: "Invited Adjudicator",
    image: "/debate-events/sublds-invited-adjudicator.png",
  },
  {
    event: "DFB 1st National Novice Debate Championship",
    role: "BUBTDC Team Champion",
    image: "/debate-events/national-novice-champions.png",
  },
];

export const workshopPhotos = [
  { image: "/workshops/speaking-at-session.png", caption: "Speaking during a student session." },
  { image: "/workshops/interactive-workshop.png", caption: "Leading an interactive workshop." },
  { image: "/workshops/workshop-discussion.png", caption: "Engaging participants in a workshop discussion." },
  { image: "/workshops/whiteboard-session.png", caption: "Explaining ideas during a whiteboard session." },
  { image: "/workshops/session-team.png", caption: "With fellow participants after a session." },
  { image: "/workshops/presenting-to-students.png", caption: "Presenting to students during a learning session." },
];

export const publicSpeakingWorkshopPhotos = [
  { image: "/workshops/public-speaking-workshop.png", caption: "Conducting a public speaking workshop." },
  { image: "/workshops/public-speaking-attendees.png", caption: "Students attending the public speaking workshop." },
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "GoInnovior Limited",
    period: "Current",
    location: "On-site",
    summary: "Currently gaining professional experience in software development as an on-site intern.",
    highlights: [],
  },
  {
    role: "Content Writer",
    company: "Oriqon Group",
    period: "Current",
    location: "Remote",
    summary: "Currently working remotely on content writing.",
    highlights: [],
  },
  {
    role: "President",
    company: "Debating Club of BUBT",
    period: "2026 — 2027",
    location: "Dhaka, Bangladesh",
    summary: "Leading the Debating Club of BUBT.",
    highlights: [],
  },
  {
    role: "National Debater",
    company: "Debate competitions",
    period: "2021 — Present",
    location: "Bangladesh",
    summary: "Competing in national debate events and developing public-speaking and reasoning skills.",
    highlights: ["Champion at multiple nationally televised competitions, including BTV and ATN Bangla."],
  },
  {
    role: "Competitive Programmer",
    company: "Programming contests",
    period: "2023 — Present",
    location: "Bangladesh",
    summary: "Practicing algorithms and problem-solving through programming contests.",
    highlights: ["11th — ICPC Asia Dhaka Regional Preliminary", "19th — BIUPC Onsite Contest 2024", "5th — BIUPC Preliminary Contest 2025"],
  },
  {
    role: "Organizer",
    company: "Contests, hackathons & debate events",
    period: "2020 — 2024",
    location: "Bangladesh",
    summary: "Contributed to event planning, logistics, and team coordination.",
    highlights: ["Joint Secretary, Sunamganj Debating Society."],
  },
];

export const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    org: "Bangladesh University of Business & Technology (BUBT)",
    period: "2023 — Present",
    note: "CGPA: 3.93 / 4.00",
  },
  {
    title: "Higher Secondary Certificate — Science",
    org: "Sunamganj Government College",
    period: "Graduated 2022",
    note: "GPA: 5.00 / 5.00 · Board Merit Result",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "tv-debate", label: "Debate" },
  { id: "workshops", label: "Workshops" },
  { id: "press", label: "Press" },
  { id: "contact", label: "Contact" },
];
