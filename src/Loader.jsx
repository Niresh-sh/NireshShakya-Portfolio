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


function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let start = performance.now();
    let frame;
    const tick = (now) => {
      const p = Math.min(100, Math.round(((now - start) / 1750) * 100));
      setProgress(p);
      if (p < 100) frame = requestAnimationFrame(tick);
      else setTimeout(onDone, 280);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);
  return (
    <div className="loader fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#101713]">
      <div className="loader-mark font-display text-[86px] leading-none tracking-[-.09em] text-[#91f77d]">NS</div>
      <div className="mt-5 h-px w-40 bg-white/15">
        <div className="h-full bg-[#91f77d] transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-4 font-mono text-[10px] tracking-[.32em] text-white/75">WARMING UP</div>
      <span className="sr-only">{progress}% loaded</span>
    </div>
  );
}

export default Loader;