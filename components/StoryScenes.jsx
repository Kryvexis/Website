"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function SceneVisual({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -140]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1.08]);

  return (
    <div className={`story-visual visual-${index + 1}`} ref={ref}>
      <motion.div className="story-shape shape-a" style={{ y: y1, rotate }} />
      <motion.div className="story-shape shape-b" style={{ y: y2, scale }} />
      <motion.div className="story-shape shape-c" style={{ y: y1, x: y2 }} />
      <motion.div className="story-poster" style={{ y: y1 }}>
        <div className="poster-screen" />
      </motion.div>
    </div>
  );
}

const scenes = [
  {
    kicker: "scene 01",
    title: "Arrival storm",
    body: "The background wakes up in layers, particles intensify, and visual shards rise as the world comes online."
  },
  {
    kicker: "scene 02",
    title: "Image formation",
    body: "Large background shapes align like frames in a trailer, creating picture-like compositions while text advances."
  },
  {
    kicker: "scene 03",
    title: "Conversion climax",
    body: "Motion tightens, contrast sharpens, and the launch panel arrives like the end card of a cinematic sequence."
  }
];

export default function StoryScenes() {
  return (
    <section className="story-shell" id="story">
      {scenes.map((scene, index) => (
        <section key={scene.title} className="story-block">
          <div className="story-sticky">
            <div className="story-copy">
              <span className="eyebrow">{scene.kicker}</span>
              <h2>{scene.title}</h2>
              <p>{scene.body}</p>
            </div>
            <SceneVisual index={index} />
          </div>
        </section>
      ))}
    </section>
  );
}
