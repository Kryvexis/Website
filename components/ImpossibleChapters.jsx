"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const chapters = [
  {
    kicker: "product philosophy",
    title: "One command environment instead of disconnected business tools.",
    body: "Kryvexis OS treats sales, stock, procurement, finance, and reports as connected layers of the same operating system. The goal is continuity across daily execution, management visibility, and company governance."
  },
  {
    kicker: "operating model",
    title: "Branch-aware, role-aware, and increasingly workspace-driven.",
    body: "The platform is designed to adapt for managers, executives, finance users, sales users, warehouse teams, procurement, and operations staff without losing coherence. Company profiles, branch controls, invites, branding, imports, and role-policy visibility all support that direction."
  },
  {
    kicker: "capability catalogue",
    title: "A broad product surface with credible commercial depth.",
    body: "The reviewed materials show meaningful coverage across authentication, dashboarding, sales, inventory, procurement, accounting, operations, reports, roles, settings, and workspace administration. The application already has the shape of a serious business platform."
  },
  {
    kicker: "commercial reality",
    title: "The challenge now is trust, consistency, and finish.",
    body: "Kryvexis OS is beyond concept stage, but full commercial rollout still depends on authentication stability, backend authorization integrity, multi-company isolation, automation robustness, and a consistently premium UI finish across every core surface."
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
