
import React from "react";
import { motion, useReducedMotion } from "framer-motion";


export function Reveal({ children, delay = 0, className }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function SplitText({ text, className, delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.08em] align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0 },
            }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function SectionHead({ no, label, title }) {
  return (
    <div className="mb-14 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-primary">{no}</span>
        <span className="eyebrow">{label}</span>
      </div>

      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl">
        <SplitText text={title} />
      </h2>
    </div>
  );
}

export const GithubIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={p.className}
    aria-hidden="true"
  >
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
  </svg>
);

export const LinkedinIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={p.className}
    aria-hidden="true"
  >
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
  </svg>
);
