export const personalInfo = {
  name: "Yogesh Garg",
  title: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    ".NET Core Expert",
    "React.js Developer",
    "Azure Cloud Engineer",
    "API Architect",
  ],
  bio: "I build production-ready web applications that solve real business problems. Currently engineering a live Real Estate CRM handling actual transactions — backed by .NET Core, React.js, and Azure.",
  email: "yogugarg000@gmail.com",
  phone: "+91-81075-03500",
  location: "Dholpur, Rajasthan, India",
  website: "https://yogeshgarg.dev",
  github: "https://github.com/yogugargoo7",
  linkedin: "https://linkedin.com/in/yogesh-garg-dev",
  resumeLink: "#",
  available: true,
};

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Delivered", value: 5, suffix: "+" },
  { label: "Students Mentored", value: 100, suffix: "+" },
  { label: "Coding Streak", value: 100, suffix: "d+" },
];

export const skills = [
  {
    category: "Backend",
    icon: "⚙️",
    color: "#6366f1",
    items: [
      { name: "C# / .NET Core", level: 90 },
      { name: "ASP.NET Core Web API", level: 88 },
      { name: "Entity Framework Core", level: 85 },
      { name: "JWT Authentication", level: 87 },
      { name: "Swagger / OpenAPI", level: 85 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#22d3ee",
    items: [
      { name: "React.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 87 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Vite", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "#f59e0b",
    items: [
      { name: "Microsoft Azure", level: 80 },
      { name: "Azure Blob Storage", level: 82 },
      { name: "GitHub Actions CI/CD", level: 80 },
      { name: "Azure App Service", level: 78 },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    color: "#10b981",
    items: [
      { name: "MS SQL Server", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Firebase Firestore", level: 72 },
    ],
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
    description: [
      "Developing production-ready Real Estate CRM using .NET Core Web API, C#, React.js, MS SQL Server, and Azure",
      "Designed REST APIs with Swagger/OpenAPI documentation, JWT authentication, and role-based access for Admin, Associate, and Customer roles",
      "Built CRM modules for Plot Management, Customer Management, EMI Tracking, Receipt Generation, and Analytics Dashboard",
      "Integrated Azure Blob Storage for document/media handling with Azure App Service deployment via GitHub Actions CI/CD",
      "Developed marketing website with lead chatbot, enquiry forms, WhatsApp flow, and CRM REST API integrations",
    ],
    tech: [".NET Core", "React.js", "Azure", "MS SQL Server", "JWT", "CI/CD"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Ethnus Pvt Ltd",
    location: "Vellore, Tamil Nadu",
    period: "Apr 2024",
    type: "Internship",
    color: "#22d3ee",
    description: [
      "Built responsive web applications using React.js and .NET Core Web API with clean Swagger documentation",
      "Implemented JWT authentication, role-based authorization, Entity Framework Core, and MS SQL Server integration",
      "Worked across C#, .NET Core, React.js, JavaScript, HTML, and CSS for end-to-end application features",
    ],
    tech: ["React.js", ".NET Core", "JWT", "EF Core", "C#", "Swagger"],
  },
];

export const projects = [
  {
    title: "Mero Vrindavan Dham",
    subtitle: "Real Estate CRM & Marketing Platform",
    description:
      "Production-deployed CRM handling real estate plot lifecycle — booking, EMI tracking, receipt generation, analytics. Not a demo — live business system with real transactions.",
    longDescription:
      "Architected and developed a full production CRM for a real estate company. Includes Plot Management, Customer Management, EMI Tracking, PDF Receipt Generation, Analytics Dashboard, WhatsApp integration, lead chatbot, and CI/CD deployment.",
    tech: [".NET Core", "React.js", "Azure", "MS SQL", "JWT", "GitHub Actions", "Tailwind", "Swagger"],
    github: "https://github.com/yogugargoo7/mero-vrindavan-dham-crm",
    live: "#",
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    year: "2025",
    status: "Production Live",
    highlights: ["JWT + RBAC", "Azure CI/CD", "PDF Generation", "WhatsApp Flow"],
  },
  {
    title: "Food-Yum-Yum",
    subtitle: "Restaurant Onboarding Portal",
    description:
      "Full-stack restaurant onboarding portal with multi-step registration, payment gateway integration, and optimized database queries.",
    longDescription:
      "Built a complete restaurant onboarding platform with structured registration flows, payment gateway integration, database optimization, and clean backend APIs.",
    tech: ["React.js", "Node.js", "JavaScript", "CSS3", "HTML5", "REST API"],
    github: "https://github.com/yogugargoo7/codemithra-tasksheet",
    live: "#",
    color: "#22d3ee",
    gradient: "from-cyan-500 to-blue-600",
    year: "2023",
    status: "Completed",
    highlights: ["Payment Gateway", "Multi-step Form", "DB Optimization", "Responsive UI"],
  },
  {
    title: "Art Gallery",
    subtitle: "Modern Digital Art Exhibition",
    description:
      "Visually rich, responsive web application for browsing and exploring curated digital artwork with smooth animations.",
    longDescription:
      "A frontend-focused art gallery application with category browsing, search, filtering, and a clean modern UI built with React.js.",
    tech: ["React.js", "JavaScript", "CSS3", "HTML5"],
    github: "https://github.com/yogugargoo7/art-gallery",
    live: "#",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    year: "2023",
    status: "Completed",
    highlights: ["Responsive Design", "Search & Filter", "Smooth UX", "React.js"],
  },
];

export const achievements = [
  { icon: "🥈", title: "2nd Rank", desc: "Robothon Competition, Robotics Club, VIT Bhopal", year: "2024" },
  { icon: "♟️", title: "Top 5", desc: "ADVITYA'24 Chess Tournament", year: "2024" },
  { icon: "👨‍🏫", title: "100+ Students", desc: "Mentored as Teaching Assistant", year: "2023–24" },
  { icon: "🔥", title: "100+ Days", desc: "Consistent Coding Streak", year: "2024" },
];

export const certifications = [
  { name: "MERN Stack Developer", issuer: "Ethnus", color: "#6366f1" },
  { name: "Cloud Computing", issuer: "NPTEL", color: "#22d3ee" },
  { name: "Applied ML with Python", issuer: "Coursera", color: "#10b981" },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
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
