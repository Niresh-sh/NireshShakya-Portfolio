import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";
import "./index.css";
import { GithubIcon, LinkedinIcon, Reveal, SectionHead, SplitText } from "./shared";
import { profile } from "./data/portfolio.jsx"
import { motion } from "framer-motion";


function Header() {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);

  const links = [
    ["HOME", "#home", "home"],
    ["ABOUT", "#about", "about"],
    ["EDUCATION", "#education", "education"],
    ["SKILLS", "#skills", "skills"],
    ["PROJECTS", "#work", "work"],
    ["CONTACT", "#contact", "contact"],
  ];

  // Detect active section while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    links.forEach(([, , id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const current = hovered || active;

  return (
   <header className="fixed inset-x-0 top-0 z-9999 w-full border-b border-white/10 bg-[#101713]/95 backdrop-blur-md">

      <div className="flex h-16 items-center justify-between px-6 md:px-[5.5vw]">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => {
            setActive("home"); 
            setOpen(false);
          }}
          className="font-display text-2xl font-bold tracking-tighter text-white"
        >
          N.S
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden h-full items-center md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map(([label, href, id], index) => (
            <a
              key={id}
              href={href}
              onClick={() => {
                setActive(id);
                setHovered(null);
              }}
              onMouseEnter={() => setHovered(id)}
              className="relative flex h-full items-center px-4 font-mono text-[11px] tracking-[0.16em] text-white/60 transition-colors duration-300 hover:text-[#91f77d]"
            >
              {/* Animated bottom green line */}
              {current === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 h-0.75 w-full bg-[#91f77d]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              {/* Active background */}
              {current === id && (
                <motion.span
                  layoutId="nav-background"
                  className="absolute inset-0 bg-[#91f77d]/10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`relative z-10 ${
                  active === id
                    ? "text-[#91f77d]"
                    : ""
                }`}
              >
                {String(index + 1).padStart(2, "0")} {label}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="flex flex-col border-t border-white/10 bg-[#101713] p-5 md:hidden">
          {links.map(([label, href, id], index) => (
            <a
              key={id}
              href={href}
              onClick={() => {
                setActive(id);
                setOpen(false);
              }}
              className={`border-b border-white/10 py-4 font-mono text-xs tracking-widest transition-colors ${
                active === id
                  ? "text-[#91f77d]"
                  : "text-white/60"
              }`}
            >
              {String(index + 1).padStart(2, "0")} {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;