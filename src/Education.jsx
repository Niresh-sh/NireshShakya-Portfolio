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

function Education() {
  const items = [
    [
      "13",
      "BACHELOR IN COMPUTER APPLICATION",
      "Building a strong foundation in computer applications and software development.",
    ],
    [
      "12",
      "+2 IN BUSINESS STUDIES",
      "Completed higher secondary education in business studies.",
    ],
    [
      "10",
      "SECONDARY EDUCATION EXAMINATION (SEE)",
      "Completed secondary level education.",
    ],
  ];
  return (
    <section
      id="education"
      className="bg-[#101713] px-6 py-20 text-white md:px-[8vw] md:py-28"
    >
      <div className="mx-auto grid max-w-295 gap-12 md:grid-cols-[.55fr_1fr]">
        <div className="font-mono text-[9px] tracking-[.25em] text-[#91f77d]">
          01 / THE JOURNEY
        </div>
        <div>
          <h2 className="section-title mb-10 text-right text-[clamp(2.6rem,5vw,4.2rem)]">
            EDUCATION
          </h2>
          <div className="space-y-7">
            {items.map(([year, title, desc], i) => (
              <div
                className="education-row relative grid grid-cols-[34px_1fr] gap-5 border-l border-[#91f77d]/50 pl-6"
                key={title}
              >
                <span className="absolute -left-1 top-1 h-2 w-2 bg-[#91f77d]" />
                <span className="font-display text-4xl leading-none text-white/10">
                  {year}
                </span>
                <div>
                  <h3 className="font-display text-4xl leading-tight">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[11px] leading-5 text-white/45">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
