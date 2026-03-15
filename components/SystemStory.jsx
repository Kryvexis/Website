"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const scenes = [
  {
    kicker: "scene 01",
    title: "System horizon",
    body: "Large glowing bands and atmosphere layers move behind the content so the world stays active even before the user interacts."
  },
  {
    kicker: "scene 02",
    title: "Picture-building scroll",
    body: "As the user scrolls, oversized panels and visual masks form shapes that feel like frames from a future product trailer."
  },
  {
    kicker: "scene 03",
    title: "Launch overload",
    body: "The final section tightens the motion, increases the intensity, and makes the whole interface feel like a live reveal."
  }
];

function Visual({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const yB = useTransform(scrollYProgress, [0, 1], [120, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1.08]);

  return (
    <div className={`story-visual visual-${index + 1}`} ref={ref}>
      <motion.div className="story-layer layer-a" style={{ y: yA, rotate }} />
      <motion.div className="story-layer layer-b" style={{ y: yB, scale }} />
      <motion.div className="story-layer layer-c" style={{ y: yA }} />
      <motion.div className="story-screen" style={{ y: yB }}>
        <div className="story-screen-grid" />
        <div className="story-screen-beam" />
      </motion.div>
    </div>
  );
}

export default function SystemStory() {
  return (
    <section className="story-shell" id="story">
      {scenes.map((scene, index) => (
        <section className="story-block" key={scene.title}>
          <div className="story-sticky">
            <div className="story-copy">
              <span className="eyebrow">{scene.kicker}</span>
              <h2>{scene.title}</h2>
              <p>{scene.body}</p>
            </div>
            <Visual index={index} />
          </div>
        </section>
      ))}
    </section>
  );
}
