"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SceneCard({ eyebrow, title, description, bullets, index = 0 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 20 });
  const sy = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(sy, [-40, 40], [11, -11]);
  const rotateY = useTransform(sx, [-40, 40], [-13, 13]);

  return (
    <motion.article
      className="scene-card"
      style={{ rotateX, rotateY }}
      whileHover={{ y: -10, scale: 1.01 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className={`scene-card-beacon beacon-${(index % 3) + 1}`} />
      <div className="scene-card-layer layer-one" />
      <div className="scene-card-layer layer-two" />
      <div className="scene-card-layer layer-three" />
      <div className="scene-card-content">
        <span className="eyebrow">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}
