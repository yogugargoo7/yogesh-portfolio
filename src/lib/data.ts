export const personalInfo = {
  name: "Yogesh Garg",
  title: "Full Stack Developer",
  headline: "Building Production-Ready Web Applications",
  subheadline:
    "A Full Stack Developer passionate about turning ideas into scalable, real-world applications using .NET Core, React.js & Azure.",
  bio: "Full Stack Developer at Subh Sankalp Pvt Ltd, Noida. I build and run the company's real estate CRM, used daily across 4 townships with 970+ plots and 2,600+ receipts.",
  email: "yogugarg000@gmail.com",
  phone: "+91-81075-03500",
  location: "Dholpur, Rajasthan, India",
  website: "https://yogesh-portfolio-omega-seven.vercel.app",
  github: "https://github.com/yogugargoo7",
  linkedin: "https://www.linkedin.com/in/yogesh-garg-980517232",
  resume: "/resume.pdf",
  available: true,
};

export const stats = [
  { value: "5", label: "Live Projects" },
  { value: "4", label: "Townships on My CRM" },
  { value: "970+", label: "Plots Managed" },
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
    title: "Real Estate CRM",
    subtitle: "Multi-township CRM for Subh Sankalp",
    description:
      "Production CRM used daily across 4 townships: plots, receipts, EMI plans, commission, leads and a customer portal. Merged three CRMs into one and reconciled ₹60+ crore of receipts.",
    category: "CRM / Full Stack",
    year: "2026",
    status: "Production Live",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    bgPattern: "🏡",
    color: "#6366f1",
    tech: [".NET 8", "C#", "React.js", "MS SQL", "Azure", "GitHub Actions"],
    github: "https://github.com/yogugargoo7/mero-vrindavan-dham-crm",
    live: "https://www.platinumtownship.in",
    highlights: ["JWT + RBAC", "Background workers", "OCR auto-fill", "Android app"],
  },
  {
    title: "Mero Vrindavan Dham",
    subtitle: "Township Website",
    description:
      "Township website with live plot availability from the CRM API, and enquiry forms that create CRM leads.",
    category: "Website",
    year: "2026",
    status: "Production Live",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    bgPattern: "🛕",
    color: "#f59e0b",
    tech: ["React", "Vite", "Tailwind CSS", "Lenis"],
    github: "https://github.com/yogugargoo7/merovrindavandham-news-section",
    live: "https://merovrindavandham.com",
    highlights: ["Live plots", "Lead chatbot", "SEO"],
  },
  {
    title: "Ganesha Estate",
    subtitle: "Township Website",
    description:
      "Website for a 90-plot township at YEIDA Sector 22F, Jewar, with plot sizes, location and an enquiry form.",
    category: "Website",
    year: "2026",
    status: "Production Live",
    gradient: "from-stone-500 via-stone-600 to-neutral-800",
    bgPattern: "🏘️",
    color: "#a8a29e",
    tech: ["React", "Vite", "Lenis", "PHP"],
    github: null,
    live: "https://ganeshaestate.com",
    highlights: ["Responsive", "Enquiry form", "SEO"],
  },
  {
    title: "Mannat Residency PG",
    subtitle: "PG Website",
    description:
      "Website for a boys and girls PG in Noida Extension, with room listings, gallery, smooth scrolling and an enquiry flow.",
    category: "Website",
    year: "2026",
    status: "Production Live",
    gradient: "from-rose-500 via-red-500 to-orange-500",
    bgPattern: "🏠",
    color: "#f43f5e",
    tech: ["React", "Vite", "Lenis"],
    github: null,
    live: "https://mannatresidencypg.com",
    highlights: ["Room listings", "Gallery", "Enquiry flow"],
  },
  {
    title: "Food-Yum-Yum",
    subtitle: "Restaurant Onboarding Portal",
    description:
      "Restaurant onboarding portal with structured registration flows, payment gateway integration, and optimized database queries.",
    category: "Web App",
    year: "2022",
    status: "Completed",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgPattern: "🍔",
    color: "#f59e0b",
    tech: ["React.js", "Node.js", "JavaScript", "CSS3"],
    github: null,
    live: null,
    highlights: ["Payment Gateway", "Multi-step Form", "DB Optimization"],
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
    period: "Feb 2026 – Present",
    type: "Full-time",
    color: "#6366f1",
    bullets: [
      "Build and run the company's in-house real estate CRM (.NET 8, C#, React.js, MS SQL Server, Azure), used daily across 4 townships with 970+ plots and 2,600+ receipts",
      "Merged three township CRMs into one multi-project system with per-township data scoping and role-based access; reconciled ₹60+ crore of migrated receipts to the rupee",
      "Shipped PDF receipts, EMI plans, associate commission, lead routing from websites and Meta ads, a customer portal, an audit log, and an Android app (Capacitor)",
      "Deploy via GitHub Actions to Azure App Service and Static Web Apps; maintain 13 live marketing websites that feed leads into the CRM",
    ],
    tech: [".NET 8", "React.js", "Azure", "MS SQL", "JWT", "CI/CD"],
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
    period: "Dec 2021 – May 2025",
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
