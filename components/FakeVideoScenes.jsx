"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const scenes = [
  {
    kicker: "scene cut 01",
    title: "Opening pressure frame",
    body: "The sequence begins like a trailer opening shot. Atmosphere moves under the copy, and the whole world feels like it is projecting itself."
  },
  {
    kicker: "scene cut 02",
    title: "Poster-wall composition",
    body: "As you scroll, huge layered panels slide like cinematic posters or frozen shots from a future product reveal video."
  },
  {
    kicker: "scene cut 03",
    title: "Scan-wipe takeover",
    body: "Light slices and camera-like wipes cross the viewport so the site feels edited, not just animated."
  },
  {
    kicker: "scene cut 04",
    title: "Launch climax",
    body: "The final phase compresses the visuals into a louder, sharper end card that behaves like a system trailer finale."
  }
];

function Visual({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yA = useTransform(scrollYProgress, [0, 1], [120, -160]);
  const yB = useTransform(scrollYProgress, [0, 1], [160, -220]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [-10, 12]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [8, -9]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1.1]);

  return (
    <div className={`cinema-visual visual-${index + 1}`} ref={ref}>
      <motion.div className="cinema-layer layer-a" style={{ y: yA, rotate: rotateA }} />
      <motion.div className="cinema-layer layer-b" style={{ y: yB, rotate: rotateB }} />
      <motion.div className="cinema-layer layer-c" style={{ y: yA, scale }} />
      <motion.div className="cinema-screen" style={{ y: yB }}>
        <div className="cinema-grid" />
        <div className="cinema-flicker" />
        <div className="cinema-poster poster-a" />
        <div className="cinema-poster poster-b" />
        <div className="cinema-poster poster-c" />
        <motion.div
          className="cinema-camera-wipe"
          animate={{ x: ["-22%", "122%"] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

export default function FakeVideoScenes() {
  return (
    <section className="cinema-shell" id="cinema">
      {scenes.map((scene, index) => (
        <section className="cinema-block" key={scene.title}>
          <div className="cinema-sticky">
            <div className="cinema-copy">
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
