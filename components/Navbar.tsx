"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <Logo
            size={34}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-foreground font-semibold text-sm tracking-tight hidden lg:block">
            Syamsul Huda
          </span>
        </a>
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-1 bg-card/70 border border-border rounded-full px-2 py-1 shadow-sm">
            <li>
              <a
                href="#top"
                className="text-sm px-3 py-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
              >
                Home
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm px-3 py-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://github.com/syamsulhudauul"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border bg-card/60 hover:bg-card transition-colors"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
