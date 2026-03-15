"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    kicker: "chapter 01",
    title: "Arrival pressure",
    body: "The machine should already feel alive before the user does anything. Light bands, scanlines, projection haze, and fake-camera motion establish the world immediately."
  },
  {
    kicker: "chapter 02",
    title: "Poster-wall collapse",
    body: "Large visual panels slide and overlap like impossible movie frames. Scroll becomes editing, not browsing."
  },
  {
    kicker: "chapter 03",
    title: "System rupture",
    body: "The interface appears to tear into a new state with wipes, depth shifts, and compositional distortion."
  },
  {
    kicker: "chapter 04",
    title: "Lock-on chamber",
    body: "All movement narrows toward the final conversion zone so the ending feels earned, focused, and high-stakes."
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
