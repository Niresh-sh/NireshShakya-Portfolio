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

const skills = [
  { name: "NETLIFY", category: "TOOLS", type: "layers", detail: "Deployment" },
  { name: "REST APIS", category: "BACKEND", type: "server", detail: "Designing and consuming APIs" },
  { name: "GIT", category: "TOOLS", type: "layers", detail: "Version control" },
  { name: "JAVASCRIPT", category: "FRONTEND", type: "code" , detail: "The language behind everything I ship"},
  { name: "CSS3", category: "FRONTEND", type: "code", detail: "Layouts, motion, responsive design" },
  { name: "MONGODB", category: "DATABASE", type: "database", detail: "Document database" },
  { name: "REDUX", category: "FRONTEND", type: "code", detail: "Predictable app state" },
  { name: "CANVA", category: "TOOLS", type: "layers", detail: "Visual content creation" },
  { name: "NEXT.JS", category: "FRONTEND", type: "code", detail: "Full-stack React framework" },
  { name: "POSTMAN", category: "TOOLS", type: "layers", detail: "API testing" },
  { name: "FIGMA", category: "TOOLS", type: "layers", detail: "Interface design" },
  { name: "HTML5", category: "FRONTEND", type: "code", detail: "Semantic, accessible markup" },
  { name: "MYSQL", category: "DATABASE", type: "database", detail: "Relational database" },
  { name: "EXPRESS.JS", category: "BACKEND", type: "server", detail: "REST APIs and middleware" },
  { name: "REACT", category: "FRONTEND", type: "code", detail: "Component-driven interfaces" },
  { name: "NODE.JS", category: "BACKEND", type: "server", detail: "JavaScript on the server" },
  { name: "TAILWIND CSS", category: "FRONTEND", type: "code", detail: "Utility-first styling" },
  { name: "SUPABASE", category: "DATABASE", type: "database", detail: "Relational database" },
  { name: "POSTGRESQL", category: "DATABASE", type: "database", detail: "Relational database" },
  { name: "PHP", category: "BACKEND", type: "server", detail: "Server-side web apps" },
  {name: "GITHUB", category: "TOOLS", type: "layers", detail: "Code hosting and collaboration"},
  {name: "vercel", category: "TOOLS", type: "layers", detail: "Deployment and hosting"},

];



const categories = ["ALL", "FRONTEND", "BACKEND", "DATABASE", "TOOLS"];
const IconFor = ({ type }) => {
  const props = { size: 21, strokeWidth: 2.2 };
  if (type === "code") return <Code2 {...props} className="text-[#91f77d]" />;
  if (type === "database") return <Database {...props} className="text-[#91f77d]" />;
  if (type === "server") return <Server {...props} className="text-[#ff7168]" />;
  return <Layers3 {...props} className="text-[#ff7168]" />;
};


function Ticker({ dark = false }) {
  const words = [{detail: "React"}, {detail: "Next.js"}, {detail: "Node.js"}, {detail: "Express.js"}, {detail: "MongoDB"}, {detail: "MySQL"}, {detail: "PostgreSQL"}, {detail: "Supabase"}, {detail: "Tailwind CSS"}, {detail: "HTML5"}, {detail: "CSS3"}, {detail: "JavaScript"}, {detail: "Git"}, {detail: "GitHub"}, {detail: "Netlify"}, {detail: "Vercel"}, {detail: "Figma"}, {detail: "Canva"}].map(w => w.detail);
  return <div className={`ticker ${dark ? "ticker-dark" : ""}`}><div className="ticker-track">{[...words, ...words, ...words].map((w, i) => <span key={i}>{w}<b>✦</b></span>)}</div></div>;
}

function Skills() {
  const [filter, setFilter] = useState("ALL");
  const [order, setOrder] = useState(skills);
  const visible = useMemo(() => filter === "ALL" ? order : order.filter(s => s.category === filter), [filter, order]);
  const shuffle = () => setOrder(prev => {
    const next = [...prev];
    for (let i = next.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [next[i], next[j]] = [next[j], next[i]]; }
    return next;
  });
  return (
    <section id="skills" className="bg-[#101713] px-4 py-16 text-white md:px-[4vw] md:py-24">
      <div className="mx-auto max-w-360">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`filter-btn ${filter===c?"active":""}`}>{c}</button>)}</div>
          <button onClick={shuffle} className="shuffle-btn"><Shuffle size={14}/> SHUFFLE TILES</button>
        </div>
        <div className="skills-grid">
          {visible.map((skill, index)=><article key={skill.name} className="skill-tile group" style={{animationDelay:`${Math.min(index,12)*22}ms`}}>
            <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.25em] text-[#c4d2ca]">{skill.category}</span><IconFor type={skill.type}/></div>
            <h3 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-tight">{skill.name}</h3>
            <div className="skill-detail"><span>{skill.detail || "Explore technology"}</span><span className="skill-orbit"/></div>
          </article>)}
        </div>
      </div>
      <div className="mt-10"><Ticker dark/></div>
    </section>
  );
}

export default Skills;