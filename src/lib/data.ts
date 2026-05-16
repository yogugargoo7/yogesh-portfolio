export const personalInfo = {
  name: "Yogesh Garg",
  title: "Full Stack Developer",
  headline: "Building Production-Ready Web Applications",
  subheadline:
    "A Full Stack Developer passionate about turning ideas into scalable, real-world applications using .NET Core, React.js & Azure.",
  bio: "Full Stack Developer based in Rajasthan, India. Currently building production-grade Real Estate CRM handling actual business transactions at Subh Sankalp Pvt Ltd.",
  email: "yogugarg000@gmail.com",
  phone: "+91-81075-03500",
  location: "Dholpur, Rajasthan, India",
  website: "https://yogeshgarg.dev",
  github: "https://github.com/yogugargoo7",
  linkedin: "https://linkedin.com/in/yogesh-garg-dev",
  resume: "/resume.pdf",
  available: true,
};

export const stats = [
  { value: "5+", label: "Projects Delivered" },
  { value: "3+", label: "Certifications" },
  { value: "2+", label: "Years Experience" },
  { value: "100+", label: "Students Mentored" },
];

export const services = [
  {
    icon: "⚙️",
    title: "Full-Stack Web Development",
    description:
      "Building fast, scalable, and production-ready web applications using .NET Core Web API, React.js, and modern frameworks with Swagger-documented REST APIs.",
    color: "#6366f1",
  },
  {
    icon: "🏢",
    title: "Real Estate CRM Systems",
    description:
      "Architecting business-grade CRM platforms with plot management, EMI tracking, receipt generation, analytics dashboards, and role-based access control.",
    color: "#22d3ee",
  },
  {
    icon: "☁️",
    title: "Azure Cloud & DevOps",
    description:
      "Deploying and managing applications on Azure App Service with Blob Storage, automated CI/CD pipelines via GitHub Actions, and production monitoring.",
    color: "#a855f7",
  },
  {
    icon: "🔌",
    title: "REST API Design & Architecture",
    description:
      "Designing clean, secure, and well-documented REST APIs with JWT authentication, role-based authorization, and OpenAPI/Swagger documentation.",
    color: "#f59e0b",
  },
];

export const projects = [
  {
    title: "Mero Vrindavan Dham",
    subtitle: "Real Estate CRM & Marketing Platform",
    description:
      "Production-deployed CRM managing plot bookings, customer records, EMI schedules, receipt generation & analytics. Live business system handling real transactions.",
    category: "CRM / Full Stack",
    year: "2025",
    status: "Production Live",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    bgPattern: "🏡",
    color: "#6366f1",
    tech: [".NET Core", "React.js", "Azure", "MS SQL", "JWT", "GitHub Actions"],
    github: "https://github.com/yogugargoo7/mero-vrindavan-dham-crm",
    live: null,
    highlights: ["JWT + RBAC", "Azure CI/CD", "PDF Receipts", "WhatsApp Flow"],
  },
  {
    title: "Food-Yum-Yum",
    subtitle: "Restaurant Onboarding Portal",
    description:
      "Full-stack restaurant onboarding portal with multi-step registration flows, payment gateway integration, and optimized database queries.",
    category: "Web App",
    year: "2023",
    status: "Completed",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgPattern: "🍔",
    color: "#f59e0b",
    tech: ["React.js", "Node.js", "JavaScript", "CSS3", "REST API"],
    github: "https://github.com/yogugargoo7/codemithra-tasksheet",
    live: null,
    highlights: ["Payment Gateway", "Multi-step Form", "DB Optimization"],
  },
  {
    title: "Art Gallery",
    subtitle: "Digital Art Exhibition Platform",
    description:
      "Visually rich, responsive web application for browsing and exploring curated digital artwork with category filtering and smooth UI.",
    category: "Frontend",
    year: "2023",
    status: "Completed",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    bgPattern: "🎨",
    color: "#22d3ee",
    tech: ["React.js", "JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/yogugargoo7/art-gallery",
    live: null,
    highlights: ["Search & Filter", "Responsive UI", "React.js"],
  },
];

export const skills: Record<string, { name: string; icon: string }[]> = {
  Frontend: [
    { name: "React.js", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "HTML5", icon: "🟧" },
    { name: "CSS3", icon: "🔵" },
    { name: "Vite", icon: "⚡" },
  ],
  Backend: [
    { name: "C#", icon: "💜" },
    { name: ".NET Core", icon: "🔷" },
    { name: "ASP.NET", icon: "🌐" },
    { name: "Entity Framework", icon: "🗃️" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "Swagger", icon: "📄" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Node.js", icon: "🟩" },
  ],
  "Cloud & DevOps": [
    { name: "Microsoft Azure", icon: "☁️" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "MS SQL Server", icon: "🗄️" },
    { name: "MySQL", icon: "🐬" },
    { name: "Firebase", icon: "🔥" },
    { name: "Git", icon: "📦" },
    { name: "Postman", icon: "📮" },
    { name: "Figma", icon: "🎭" },
  ],
};

export const certifications = [
  {
    provider: "Ethnus",
    color: "#6366f1",
    certs: [{ name: "MERN Stack Developer", year: "2024" }],
  },
  {
    provider: "NPTEL",
    color: "#f59e0b",
    certs: [{ name: "Cloud Computing", year: "2024" }],
  },
  {
    provider: "Coursera",
    color: "#22d3ee",
    certs: [{ name: "Applied Machine Learning with Python", year: "2024" }],
  },
];

export const achievements = [
  {
    icon: "🥈",
    title: "2nd Rank",
    desc: "Robothon Competition, Robotics Club, VIT Bhopal",
    year: "2024",
  },
  {
    icon: "♟️",
    title: "Top 5 Finalist",
    desc: "ADVITYA'24 Chess Tournament",
    year: "2024",
  },
  {
    icon: "👨‍🏫",
    title: "Teaching Assistant",
    desc: "Mentored 35+ batchmates & 100+ junior students",
    year: "2023–24",
  },
  {
    icon: "🔥",
    title: "100+ Days Streak",
    desc: "Consistent daily coding practice maintained",
    year: "2024",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Subh Sankalp Pvt Ltd",
    location: "Noida, Uttar Pradesh",
    period: "Feb 2025 – Present",
    type: "Full-time",
    color: "#6366f1",
    bullets: [
      "Developing production-ready Real Estate CRM with .NET Core Web API, C#, React.js, MS SQL Server, and Azure",
      "REST APIs with Swagger/OpenAPI, JWT authentication, and role-based access for Admin, Associate & Customer",
      "CRM modules: Plot Management, Customer Management, EMI Tracking, Receipt Generation, Analytics Dashboard",
      "Azure Blob Storage + App Service deployment with GitHub Actions CI/CD pipeline",
      "Marketing website: lead chatbot, enquiry forms, WhatsApp flow, CRM REST API integrations",
    ],
    tech: [".NET Core", "React.js", "Azure", "MS SQL", "JWT", "CI/CD"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Ethnus Pvt Ltd",
    location: "Vellore, Tamil Nadu",
    period: "Apr 2024",
    type: "Internship",
    color: "#22d3ee",
    bullets: [
      "Built responsive web applications using React.js and .NET Core Web API with Swagger documentation",
      "Implemented JWT authentication, role-based authorization, Entity Framework Core, MS SQL Server",
      "Worked across C#, .NET Core, React.js, JavaScript, HTML, CSS for end-to-end features",
    ],
    tech: ["React.js", ".NET Core", "JWT", "EF Core", "C#"],
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Vellore Institute of Technology, Bhopal",
    period: "Dec 2021 – Sept 2025",
    grade: "CGPA: 7.43",
    color: "#6366f1",
  },
  {
    degree: "Intermediate (12th) — RBSE",
    school: "MB Public Senior Secondary School, Kota",
    period: "May 2021",
    grade: "88.00%",
    color: "#22d3ee",
  },
];
