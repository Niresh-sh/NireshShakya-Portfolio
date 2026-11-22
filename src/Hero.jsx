import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";
import "./index.css";
import { GithubIcon, LinkedinIcon, Reveal, SectionHead, SplitText } from "./shared";
import { profile } from "./data/portfolio.jsx"
import { motion } from "framer-motion";


const GREEN = "#91f77d";

function Ticker({ dark = false }) {
  const words = [
    "PASSION",
    "PLAY TO MAKE AN IMPACT",
    "CODE WITH PURPOSE",
    "CREATE WITH PASSION",
  ];
  return (
    <div className={`ticker ${dark ? "ticker-dark" : ""} text-4xl`}>
      <div className="ticker-track">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i}>
            {w}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}





function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative min-h-180 overflow-hidden bg-[#101713] text-white md:min-h-190"
    >
      <div
        className="hero-photo absolute inset-y-0 right-0 w-[62%] bg-cover bg-position-[center_25%]"
        style={{ backgroundImage: "url('/images/portrait-hero.jpg')" }}
      />
      <div className="hero-shade absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-172.5 max-w-360 items-center px-7 pb-16 pt-28 md:min-h-190 md:px-[8vw]">
        <div className="max-w-140">
          <div className="mb-5 flex items-center gap-3 font-mono text-[9px] tracking-[.25em] text-[#91f77d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#91f77d] shadow-[0_0_12px_#91f77d]" />{" "}
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
          <p className="mb-2 font-mono text-[10px] tracking-[.2em] text-[#ff7168]">
            HELLO, I'M A DEVELOPER
          </p>
          <h1 className="font-display text-[clamp(4.4rem,10vw,8.8rem)] leading-[.78] tracking-[-.055em]">
            NIRESH
            <br />
            <span className="text-[#91f77d]">SHAKYA</span>
            <i className="text-[#ff7168]">.</i>
          </h1>
          <h2 className="mt-7 max-w-sm font-display text-2xl uppercase leading-tight text-white">
            Full stack. Full of possibilities.
          </h2>
          <p className="mt-4 max-w-97.5 text-[16px] leading-6 text-white/65">
            Building digital experiences that blend creativity with
            functionality. Passionate about clean code and innovative solutions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="button-green" href="#work">
              EXPLORE WORK <ArrowUpRight size={18} />
            </a>
              <a
                href="/downloads/niresh_shakya.pdf"
                download="niresh_shakya.pdf"
                className="flex h-12 items-center gap-2 border border-white/40 px-5 font-mono text-xs uppercase transition hover:border-[#91f77d] hover:text-[#91f77d]"
              >
                <Download size={18} />
                Download CV
              </a>
           <div className="mt-8 flex items-center gap-6">
            <p className="font-mono text-xs text-muted-foreground">Based in Kathmandu, Nepal</p>
            <div className="flex gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center border border-border transition-colors hover:border-primary hover:text-primary"><GithubIcon className="h-5 w-5" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center border border-border transition-colors hover:border-primary hover:text-primary"><LinkedinIcon className="h-5 w-5" /></a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-20 w-full">
        <Ticker />
      </div>
    </section>
  );
}

export default Hero;
