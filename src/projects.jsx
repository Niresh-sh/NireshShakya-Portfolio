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
  Server
} from "lucide-react";
import "./index.css";

const GREEN = "#91f77d";

const projects = [
  { title: "E-COMMERCE PLATFORM", tag: "FULL STACK", desc: "A clean shopping experience with product discovery, cart flow and responsive layouts.", visual: "shop" },
  { title: "TRIP MANAGEMENT SYSTEM", tag: "WEB APP", desc: "A travel-focused interface for exploring destinations and organizing trips.", visual: "mountain" },
  { title: "TRIP PLANNER SYSTEM", tag: "FRONTEND", desc: "A compact trip planning experience with clear information hierarchy.", visual: "road" },
];

function Projects() {
  const [active, setActive] = useState(0);
  const go = (step) => setActive((active + step + projects.length) % projects.length);
  const project = projects[active];
  
  return (
    <section id="work" className="bg-[#f0f3ef] px-6 py-20 text-[#101713] md:px-[8vw] md:py-28">
      <div className="mx-auto max-w-295">
        <div className="mb-8 flex items-end justify-between"><div><span className="font-mono text-[9px] tracking-[.25em] text-[#278c58]">03 / SELECTED PROJECTS</span><h2 className="section-title mt-3 text-[clamp(2.6rem,5vw,4.5rem)]">FEATURED WORK</h2></div><div className="hidden gap-2 sm:flex"><button className="carousel-arrow" onClick={()=>go(-1)} aria-label="Previous project"><ChevronLeft/></button><button className="carousel-arrow" onClick={()=>go(1)} aria-label="Next project"><ChevronRight/></button></div></div>
        <div className="project-carousel">
          <div className="project-visual" key={project.visual}>
            <div className={`project-art ${project.visual}`}>
              <div className="browser-bar"><i/><i/><i/><span>nireshshakya.dev / projects</span></div>
              {project.visual==="shop" ? <div className="shop-art"><small>SUMMER COLLECTION</small><strong>Enjoy<br/>Season Sale</strong><button>SHOP NOW</button></div> : project.visual==="mountain" ? <div className="mountain-art"><span>EXPLORE THE WORLD</span><b>FIND YOUR<br/>NEXT JOURNEY</b></div> : <div className="road-art"><span>PLAN YOUR NEXT ADVENTURE</span><b>TRAVEL<br/>BEYOND</b></div>}
            </div>
            <div className="project-count">{String(active+1).padStart(2,"0")} <span>/ {String(projects.length).padStart(2,"0")}</span></div>
          </div>
          <div className="project-copy"><span className="font-mono text-[9px] tracking-[.2em] text-[#278c58]">{project.tag}</span><h3 className="section-title mt-3 text-3xl leading-[.95]">{project.title}</h3><p className="mt-5 text-[12px] leading-6 text-[#667169]">{project.desc}</p><a className="mt-8 inline-flex items-center gap-2 border-b border-[#101713] pb-2 font-mono text-[9px] tracking-[.15em]" href="#contact">DISCUSS A PROJECT <ArrowUpRight size={13}/></a><div className="mt-10 flex gap-2 sm:hidden"><button className="carousel-arrow" onClick={()=>go(-1)} aria-label="Previous project"><ChevronLeft/></button><button className="carousel-arrow" onClick={()=>go(1)} aria-label="Next project"><ChevronRight/></button></div></div>
        </div>
        <div className="mt-7 flex gap-2">{projects.map((p,i)=><button key={p.title} onClick={()=>setActive(i)} className={`h-1 flex-1 transition-all ${active===i?"bg-[#278c58]":"bg-[#cbd5cd]"}`} aria-label={`Show ${p.title}`}/>)}</div>
      </div>
    </section>
  );
}

export default Projects;