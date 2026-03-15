"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 34 }).map((_, i) => ({
  id: i,
  left: `${(i * 11) % 100}%`,
  top: `${(i * 19) % 100}%`,
  size: 2 + (i % 5),
  duration: 7 + (i % 7),
}));

export default function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle-dot"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -24 - (p.id % 20), 0],
            x: [0, p.id % 2 === 0 ? 10 : -10, 0],
            opacity: [0.14, 0.78, 0.14],
            scale: [1, 1.35, 1]
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
