import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  Layers3,
  Database,
  Server,
} from "lucide-react";
import "./index.css";

const GREEN = "#91f77d";

function About() {
  return (
    <section
      id="about"
      className="bg-[#f0f3ef] px-8 py-30 text-[#111813] md:px-[8vw] md:py-28"
    >
      <div className="mx-auto max-w-295">
        <div className="mb-8 flex items-center gap-2 font-mono text-[9px] tracking-[.25em] text-[#278c58]">
          <span className="h-1 w-1 rounded-full bg-[#278c58]" /> A LITTLE
          INTRODUCTION
        </div>
        <div className="grid items-center gap-9 md:grid-cols-[.85fr_1.15fr] md:gap-14">
          <div className="relative">
            <img
              className="aspect-[1.08] w-full object-cover"
              src="/images/portrait-about.jpg"
              alt="Niresh in the mountains"
            />
            <span className="absolute left-0 top-0 bg-[#176b43] px-4 py-2 font-mono text-[8px] tracking-[.2em] text-white">
              THAT'S ME
            </span>
          </div>
          <div>
            <h2 className="section-title text-[clamp(2.4rem,5vw,4.4rem)] leading-[.9]">
              PASSIONATE DEVELOPER WITH A{" "}
              <span className="text-[#278c58]">CREATIVE</span> MIND.
            </h2>
            <p className="mt-7 text-[12px] leading-7 text-[#5d675f]">
              I enjoy turning ideas into useful, engaging digital experiences.
              My focus is on building for the web, learning modern technologies
              and finding simple solutions to complex problems.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <span className="text-[#278c58]">✳</span>
                <h3 className="mt-2 font-display text-lg">PROBLEM SOLVER</h3>
                <p className="mt-1 text-[11px] leading-5 text-[#69736b]">
                  Curious by nature, focused on practical solutions.
                </p>
              </div>
              <div>
                <span className="text-[#278c58]">✳</span>
                <h3 className="mt-2 font-display text-lg">WEB CREATOR</h3>
                <p className="mt-1 text-[11px] leading-5 text-[#69736b]">
                  Building clean and useful experiences for the web.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-5 bg-[#dfe8e1] p-2 md:grid-cols-[1.1fr_1fr_1fr_1fr] md:items-center md:p-8">
          <h3 className="font-display text-4xl leading-[.9]">
            BEYOND
            <br />
            <span className="text-[#e35d55]">THE CODE</span>
          </h3>
          {["CREATIVE THINKING", "CONTINUOUS LEARNING", "PURPOSEFUL WORK"].map(
            (x) => (
              <div
                key={x}
                className="border-l border-[#aabbb0] pl-4 font-mono text-[12px] tracking-[.12em]"
              >
                {x}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
