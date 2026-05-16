import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Yogesh Garg — Full Stack Developer",
  description: "Full Stack Developer specializing in .NET Core, React.js & Azure. Building production-ready web applications.",
  keywords: ["Yogesh Garg", "Full Stack Developer", ".NET Core", "React.js", "Azure", "Portfolio"],
  authors: [{ name: "Yogesh Garg" }],
  openGraph: {
    title: "Yogesh Garg — Full Stack Developer",
    description: "Building production-ready web apps with .NET Core, React.js & Azure",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
