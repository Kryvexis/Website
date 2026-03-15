"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    kicker: "section 01 - arrival",
    title: "Massive headline. Minimal text. Maximum confidence.",
    body: "The first screen should establish premium intent immediately with cinematic typography, ambient motion, and enough restraint to feel expensive rather than crowded."
  },
  {
    kicker: "section 02 - system reveal",
    title: "Introduce the core interaction language.",
    body: "This is where tilt, glow, orbit, pulse, scanlines, and layered surfaces teach the user how the world behaves. It should feel like a next-gen operating system waking up."
  },
  {
    kicker: "section 03 - signature moments",
    title: "Show the effects people will remember and talk about.",
    body: "Mouse-reactive shockwaves, layered cards, scene morphing, and quick luminous wipes should feel surprising but still deliberate. Motion must always serve perception, not ego."
  },
  {
    kicker: "section 04 - product / offer focus",
    title: "Translate spectacle into substance.",
    body: "A concept this ambitious still needs discipline. The strongest version explains what the product is, why it matters, and what makes it superior without losing the premium atmosphere."
  }
];

function ChapterVisual({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yA = useTransform(scrollYProgress, [0, 1], [140, -190]);
  const yB = useTransform(scrollYProgress, [0, 1], [170, -230]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [-10, 12]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [8, -10]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1.12]);

  return (
    <div className={`chapter-visual visual-${index + 1}`} ref={ref}>
      <motion.div className="chapter-layer layer-a" style={{ y: yA, rotate: rotateA }} />
      <motion.div className="chapter-layer layer-b" style={{ y: yB, rotate: rotateB }} />
      <motion.div className="chapter-layer layer-c" style={{ y: yA, scale }} />
      <motion.div className="chapter-screen" style={{ y: yB }}>
        <div className="chapter-grid" />
        <div className="chapter-noise" />
        <div className="chapter-poster poster-a" />
        <div className="chapter-poster poster-b" />
        <div className="chapter-poster poster-c" />
        <motion.div
          className="chapter-camera-wipe"
          animate={{ x: ["-24%", "124%"] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

export default function ImpossibleChapters() {
  return (
    <section className="chapters-shell" id="chapters">
      {chapters.map((chapter, index) => (
        <section className="chapters-block" key={chapter.title}>
          <div className="chapters-sticky">
            <div className="chapters-copy">
              <span className="eyebrow">{chapter.kicker}</span>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
            </div>
            <ChapterVisual index={index} />
          </div>
        </section>
      ))}
    </section>
  );
}
