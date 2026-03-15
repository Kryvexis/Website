"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const scenes = [
  {
    kicker: "takeover 01",
    title: "Background pressure",
    body: "The world should never be calm. Bands, scanlines, beams, and picture-frames keep moving even when the user is still."
  },
  {
    kicker: "takeover 02",
    title: "Trailer frames",
    body: "As you scroll, giant poster-like compositions build and slide past, like scenes from a launch film rendered inside the UI."
  },
  {
    kicker: "takeover 03",
    title: "Total handoff",
    body: "The last phase behaves like a climax sequence, tightening motion and focusing every visual force into the final action zone."
  }
];

function Visual({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yA = useTransform(scrollYProgress, [0, 1], [100, -140]);
  const yB = useTransform(scrollYProgress, [0, 1], [140, -180]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [-8, 10]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [6, -8]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1.08]);

  return (
    <div className={`takeover-visual visual-${index + 1}`} ref={ref}>
      <motion.div className="take-layer layer-a" style={{ y: yA, rotate: rotateA }} />
      <motion.div className="take-layer layer-b" style={{ y: yB, rotate: rotateB }} />
      <motion.div className="take-layer layer-c" style={{ scale, y: yA }} />
      <motion.div className="take-screen" style={{ y: yB }}>
        <div className="take-grid" />
        <div className="take-beam" />
        <div className="take-poster poster-a" />
        <div className="take-poster poster-b" />
      </motion.div>
    </div>
  );
}

export default function TakeoverScenes() {
  return (
    <section className="takeover-shell" id="takeover">
      {scenes.map((scene, index) => (
        <section className="takeover-block" key={scene.title}>
          <div className="takeover-sticky">
            <div className="takeover-copy">
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
