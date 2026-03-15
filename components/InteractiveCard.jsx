"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function InteractiveCard({ item }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 20 });
  const sy = useSpring(my, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(sy, [-40, 40], [10, -10]);
  const rotateY = useTransform(sx, [-40, 40], [-12, 12]);
  const glowX = useTransform(sx, [-50, 50], ["30%", "70%"]);
  const glowY = useTransform(sy, [-50, 50], ["25%", "75%"]);

  return (
    <motion.article
      className="interactive-card"
      style={{ rotateX, rotateY }}
      whileHover={{ y: -10 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left - rect.width / 2);
        my.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.span className="card-glow" style={{ left: glowX, top: glowY }} />
      <div className="card-layer layer-a" />
      <div className="card-layer layer-b" />
      <div className="card-content">
        <span className="eyebrow">{item.eyebrow}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul>
          {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}
