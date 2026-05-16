import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-1 text-xl font-black">
            <span className="text-gradient">YG</span>
            <span className="text-white">ogesh Garg</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>
            Built with{" "}
            <span className="text-gray-400">Next.js</span>,{" "}
            <span className="text-gray-400">Three.js</span> &amp;{" "}
            <span className="text-gray-400">Framer Motion</span>
          </p>
          <p>&copy; 2025 Yogesh Garg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
