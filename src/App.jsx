
import React, { useState, useCallback } from "react";

import Loader from "./Loader";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import { Toaster } from "sonner";
import { ArrowUpRight } from "lucide-react";

function App() {
  const [loading, setLoading] = useState(true);

  const done = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      theme="dark"
    />
      {loading && <Loader onDone={done} />}

      {/* Fixed navbar outside main */}
      {!loading && <Nav />}

      {/* Main portfolio content */}
      <main className={loading ? "opacity-0" : ""}>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <a
        href="#home"
        className="back-top"
        aria-label="Back to top"
      >
        <ArrowUpRight size={18} />
      </a>
    </>
  );
}

export default App;
